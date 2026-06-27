<?php

namespace App\Filament\Resources\SocialLinks\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class SocialLinkForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Nama Kunci (Key)')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255)
                    ->placeholder('Contoh: instagram, facebook, youtube'),
                TextInput::make('url')
                    ->label('Tautan URL')
                    ->url()
                    ->required()
                    ->maxLength(255)
                    ->placeholder('https://...'),
                TextInput::make('icon')
                    ->label('Iconify Icon')
                    ->required()
                    ->maxLength(255)
                    ->placeholder('Contoh: mdi:instagram')
                    ->helperText('Gunakan kode icon dari Iconify (https://iconify.design)'),
                Toggle::make('is_active')
                    ->label('Aktif')
                    ->default(true)
                    ->required(),
            ]);
    }
}
