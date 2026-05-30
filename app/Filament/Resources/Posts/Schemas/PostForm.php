<?php

namespace App\Filament\Resources\Posts\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Schemas\Components\Grid;
use Filament\Forms\Components\RichEditor;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class PostForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Informasi Utama')
                    ->schema([
                        Grid::make(2)->schema([
                            TextInput::make('title')
                                ->label('Judul Postingan')
                                ->required()
                                ->live(onBlur: true)
                                ->afterStateUpdated(fn (Set $set, ?string $state) => $set(
                                    'slug',
                                    Str::slug($state ?? '')
                                )),
                            TextInput::make('slug')
                                ->label('URL Slug')
                                ->required()
                                ->unique(ignoreRecord: true),
                        ]),
                        RichEditor::make('content')
                            ->label('Konten Berita')
                            ->required()
                            ->columnSpanFull()
                            ->fileAttachmentsDirectory('posts/attachments'),
                    ])
                    ->columnSpan(['lg' => 2]),

                Section::make('Media & Status')
                    ->schema([
                        FileUpload::make('image')
                            ->label('Gambar Sampul (Cover)')
                            ->image()
                            ->directory('posts/covers')
                            ->maxSize(5120) // 5MB
                            ->columnSpanFull(),
                        Select::make('author_id')
                            ->label('Penulis (Author)')
                            ->relationship('author', 'name')
                            ->searchable()
                            ->preload()
                            ->columnSpanFull(),
                        TextInput::make('reading_time')
                            ->label('Waktu Baca')
                            ->numeric()
                            ->suffix('Menit')
                            ->helperText('Estimasi waktu membaca')
                            ->columnSpanFull(),
                        DateTimePicker::make('published_at')
                            ->label('Tanggal Publikasi')
                            ->helperText('Kosongkan jika ingin menyimpannya sebagai Draft.')
                            ->columnSpanFull(),
                    ])
                    ->columnSpan(['lg' => 1]),
            ])
            ->columns(3);
    }
}
