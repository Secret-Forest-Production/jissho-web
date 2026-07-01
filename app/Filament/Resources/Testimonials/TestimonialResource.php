<?php

namespace App\Filament\Resources\Testimonials;

use App\Filament\Resources\Testimonials\Pages\ManageTestimonials;
use App\Models\Testimonial;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class TestimonialResource extends Resource
{
    protected static ?string $model = Testimonial::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedChatBubbleBottomCenterText;

    protected static string|\UnitEnum|null $navigationGroup = 'Landing Page';

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required()
                    ->maxLength(255)
                    ->columnSpanFull(),

                Tabs::make('Translations')
                    ->tabs([
                        Tabs\Tab::make('Indonesian')
                            ->schema([
                                TextInput::make('role.id')
                                    ->label('Peran / Jabatan (ID)')
                                    ->required(),
                                Textarea::make('message.id')
                                    ->label('Pesan (ID)')
                                    ->required()
                                    ->rows(4),
                            ]),
                        Tabs\Tab::make('English')
                            ->schema([
                                TextInput::make('role.en')
                                    ->label('Role (EN)')
                                    ->required(),
                                Textarea::make('message.en')
                                    ->label('Message (EN)')
                                    ->required()
                                    ->rows(4),
                            ]),
                        Tabs\Tab::make('Japanese')
                            ->schema([
                                TextInput::make('role.ja')
                                    ->label('Role (JA)')
                                    ->required(),
                                Textarea::make('message.ja')
                                    ->label('Message (JA)')
                                    ->required()
                                    ->rows(4),
                            ]),
                    ])
                    ->columnSpanFull(),

                FileUpload::make('image')
                    ->image()
                    ->imageEditor()
                    ->disk('public')
                    ->visibility('public')
                    ->directory('testimonials')
                    ->columnSpanFull(),

                Toggle::make('is_active')
                    ->label('Active')
                    ->default(true)
                    ->required(),

                TextInput::make('sort_order')
                    ->label('Sort Order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->reorderable('sort_order')
            ->recordTitleAttribute('name')
            ->columns([
                ImageColumn::make('image')
                    ->circular()
                    ->visibility('public'),
                TextColumn::make('name')
                    ->searchable(),
                TextColumn::make('role.id')
                    ->label('Role (ID)')
                    ->searchable()
                    ->limit(30),
                IconColumn::make('is_active')
                    ->boolean(),
                TextColumn::make('sort_order')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ManageTestimonials::route('/'),
        ];
    }
}
