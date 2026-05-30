<?php

namespace App\Filament\Resources\Posts\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Support\Carbon;

class PostsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')
                    ->label('Cover')
                    ->circular(),
                TextColumn::make('title')
                    ->label('Judul')
                    ->limit(40)
                    ->searchable()
                    ->sortable(),
                TextColumn::make('author.name')
                    ->label('Penulis')
                    ->searchable()
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('reading_time')
                    ->label('Waktu Baca')
                    ->numeric()
                    ->suffix(' Menit')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('published_at')
                    ->label('Status')
                    ->badge()
                    ->formatStateUsing(fn (?string $state): string => $state && Carbon::parse($state)->isPast() ? 'Published' : 'Draft')
                    ->color(fn (?string $state): string => $state && Carbon::parse($state)->isPast() ? 'success' : 'warning')
                    ->sortable(),
                TextColumn::make('published_at_date')
                    ->label('Tanggal Rilis')
                    ->getStateUsing(fn ($record) => $record->published_at)
                    ->dateTime('d M Y, H:i')
                    ->sortable(['published_at']),
                TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime('d M Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                ViewAction::make(),
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }
}
