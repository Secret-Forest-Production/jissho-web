<?php

namespace App\Filament\Resources\Registrations\Schemas;

use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Grid;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Storage;

class RegistrationInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Data Pribadi')
                    ->columns(2)
                    ->schema([
                        TextEntry::make('full_name')->label('Nama Lengkap'),
                        TextEntry::make('email')->label('Email Address'),
                        TextEntry::make('phone_number')->label('No. Telepon / WhatsApp'),
                        TextEntry::make('gender')
                            ->label('Jenis Kelamin')
                            ->badge()
                            ->formatStateUsing(fn (string $state): string => ucfirst($state))
                            ->color(fn (string $state): string => match ($state) {
                                'laki-laki' => 'info',
                                'perempuan' => 'success',
                                default => 'gray',
                            }),
                        TextEntry::make('age')->label('Usia'),
                        TextEntry::make('origin')->label('Asal (Kota/Kabupaten)'),
                    ]),

                Section::make('Sertifikat & Dokumen')
                    ->schema([
                        Grid::make(3)->schema([
                            TextEntry::make('jft_certificate_path')
                                ->label('Sertifikat JFT')
                                ->placeholder('Tidak diupload')
                                ->formatStateUsing(fn (?string $state): string => $state ? 'Lihat Dokumen' : '-')
                                ->url(fn (?string $state): ?string => $state ? Storage::url($state) : null)
                                ->openUrlInNewTab()
                                ->color('primary')
                                ->icon('heroicon-m-document-text'),
                                
                            TextEntry::make('senmonkyu_certificate_path')
                                ->label('Sertifikat Senmonkyu')
                                ->placeholder('Tidak diupload')
                                ->formatStateUsing(fn (?string $state): string => $state ? 'Lihat Dokumen' : '-')
                                ->url(fn (?string $state): ?string => $state ? Storage::url($state) : null)
                                ->openUrlInNewTab()
                                ->color('primary')
                                ->icon('heroicon-m-document-text'),

                            TextEntry::make('skill_test_certificate_path')
                                ->label('Sertifikat Skill Test / SSW')
                                ->placeholder('Tidak diupload')
                                ->formatStateUsing(fn (?string $state): string => $state ? 'Lihat Dokumen' : '-')
                                ->url(fn (?string $state): ?string => $state ? Storage::url($state) : null)
                                ->openUrlInNewTab()
                                ->color('primary')
                                ->icon('heroicon-m-document-text'),
                        ]),
                    ]),

                Section::make('Informasi Tambahan')
                    ->columns(1)
                    ->schema([
                        TextEntry::make('japan_experience')
                            ->label('Pengalaman di Jepang')
                            ->placeholder('Tidak ada pengalaman')
                            ->columnSpanFull(),
                        TextEntry::make('status')
                            ->label('Status Pendaftaran')
                            ->badge()
                            ->color(fn (string $state): string => match ($state) {
                                'pending' => 'warning',
                                'approved' => 'success',
                                'rejected' => 'danger',
                                default => 'gray',
                            }),
                    ]),
            ]);
    }
}
