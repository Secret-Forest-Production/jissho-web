<?php

namespace App\Filament\Resources\Registrations\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class RegistrationForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Data Pribadi')
                    ->schema([
                        Grid::make(2)->schema([
                            TextInput::make('full_name')
                                ->label('Nama Lengkap')
                                ->required(),
                            TextInput::make('email')
                                ->label('Email Address')
                                ->email()
                                ->required(),
                            TextInput::make('phone_number')
                                ->label('No. Telepon / WhatsApp')
                                ->tel()
                                ->required(),
                            Select::make('gender')
                                ->label('Jenis Kelamin')
                                ->options(['laki-laki' => 'Laki-laki', 'perempuan' => 'Perempuan'])
                                ->required(),
                            TextInput::make('age')
                                ->label('Usia')
                                ->required()
                                ->numeric(),
                            TextInput::make('origin')
                                ->label('Asal (Kota/Kabupaten)')
                                ->required(),
                        ]),
                    ]),

                Section::make('Sertifikat & Dokumen')
                    ->schema([
                        Grid::make(1)->schema([
                            FileUpload::make('jft_certificate_path')
                                ->label('Sertifikat JFT')
                                ->disk('public')
                                ->directory('registrations')
                                ->acceptedFileTypes(['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'])
                                ->downloadable()
                                ->openable(),
                            FileUpload::make('senmonkyu_certificate_path')
                                ->label('Sertifikat Senmonkyu')
                                ->disk('public')
                                ->directory('registrations')
                                ->acceptedFileTypes(['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'])
                                ->downloadable()
                                ->openable(),
                            FileUpload::make('skill_test_certificate_path')
                                ->label('Sertifikat Skill Test / SSW')
                                ->disk('public')
                                ->directory('registrations')
                                ->acceptedFileTypes(['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'])
                                ->downloadable()
                                ->openable(),
                        ]),
                    ]),

                Section::make('Informasi Tambahan')
                    ->schema([
                        Textarea::make('japan_experience')
                            ->label('Pengalaman di Jepang')
                            ->columnSpanFull(),
                        Select::make('status')
                            ->label('Status Pendaftaran')
                            ->options([
                                'pending' => 'Pending',
                                'approved' => 'Approved',
                                'rejected' => 'Rejected',
                            ])
                            ->required()
                            ->default('pending'),
                    ]),
            ]);
    }
}
