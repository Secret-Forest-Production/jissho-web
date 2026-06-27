<?php

namespace App\Filament\Resources\Galleries\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class GalleryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                FileUpload::make('image')
                    ->image()
                    ->imageEditor()
                    ->disk('public')
                    ->visibility('public')
                    ->directory('galleries')
                    ->required()
                    ->columnSpanFull(),

                Select::make('category')
                    ->options([
                        'language_class' => 'Kelas Bahasa',
                        'japanese_culture' => 'Budaya Jepang',
                        'job_preparation' => 'Persiapan Kerja',
                        'foundation_event' => 'Acara Yayasan',
                    ])
                    ->required(),

                Tabs::make('Title Translations')
                    ->tabs([
                        Tab::make('Indonesia')
                            ->schema([
                                TextInput::make('title.id')
                                    ->label('Title (ID)')
                                    ->required(),
                            ]),
                        Tab::make('English')
                            ->schema([
                                TextInput::make('title.en')
                                    ->label('Title (EN)')
                                    ->required(),
                            ]),
                        Tab::make('Japanese')
                            ->schema([
                                TextInput::make('title.ja')
                                    ->label('Title (JA)')
                                    ->required(),
                            ]),
                    ])
                    ->columnSpanFull(),

                Toggle::make('is_active')
                    ->default(true)
                    ->required(),

                TextInput::make('sort_order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}
