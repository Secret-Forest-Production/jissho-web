<?php

namespace App\Filament\Resources\SiteSettings\Tables;

use App\Models\SiteSetting;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Grouping\Group;
use Filament\Tables\Table;

class SiteSettingTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('key')
                    ->label('Kunci (Key)')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('group')
                    ->label('Grup')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('type')
                    ->label('Tipe Input')
                    ->sortable(),
                TextColumn::make('value.id')
                    ->label('Konten (ID)')
                    ->limit(50)
                    ->searchable(),
                TextColumn::make('value.en')
                    ->label('Konten (EN)')
                    ->limit(50)
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('value.ja')
                    ->label('Konten (JA)')
                    ->limit(50)
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('group')
                    ->label('Filter Grup')
                    ->options(fn () => SiteSetting::query()->distinct()->pluck('group', 'group')->toArray()),
            ])
            ->groups([
                Group::make('group')
                    ->label('Grup Halaman')
                    ->collapsible(),
            ])
            ->defaultGroup('group')
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                // No bulk actions for delete
            ]);
    }
}
