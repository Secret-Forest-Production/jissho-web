<?php

namespace App\Filament\Resources\SiteSettings\Schemas;

use App\Models\SiteSetting;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class SiteSettingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Metadata Pengaturan')
                    ->schema([
                        Grid::make(3)->schema([
                            TextInput::make('group')
                                ->label('Grup')
                                ->disabled(),
                            TextInput::make('key')
                                ->label('Kunci (Key)')
                                ->disabled(),
                            TextInput::make('type')
                                ->label('Tipe Input')
                                ->disabled(),
                        ]),
                    ]),

                Section::make('Konten Copywriting')
                    ->schema([
                        TextInput::make('value.id')
                            ->label('Bahasa Indonesia (ID)')
                            ->required()
                            ->hidden(fn (?SiteSetting $record): bool => $record?->type === 'textarea'),
                        Textarea::make('value.id')
                            ->label('Bahasa Indonesia (ID)')
                            ->required()
                            ->rows(3)
                            ->visible(fn (?SiteSetting $record): bool => $record?->type === 'textarea'),

                        TextInput::make('value.en')
                            ->label('English (EN)')
                            ->required()
                            ->hidden(fn (?SiteSetting $record): bool => $record?->type === 'textarea'),
                        Textarea::make('value.en')
                            ->label('English (EN)')
                            ->required()
                            ->rows(3)
                            ->visible(fn (?SiteSetting $record): bool => $record?->type === 'textarea'),

                        TextInput::make('value.ja')
                            ->label('日本語 (JA)')
                            ->required()
                            ->hidden(fn (?SiteSetting $record): bool => $record?->type === 'textarea'),
                        Textarea::make('value.ja')
                            ->label('日本語 (JA)')
                            ->required()
                            ->rows(3)
                            ->visible(fn (?SiteSetting $record): bool => $record?->type === 'textarea'),
                    ]),
            ]);
    }
}
