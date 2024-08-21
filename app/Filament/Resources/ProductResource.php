<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Models\Product;
use App\Models\Categorie;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Resources\Resource;
use Filament\Forms\Form;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Actions\DeleteAction;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-shopping-bag';

    public static function form(Form $form): Form
    {
        return $form->schema([
            TextInput::make('name')
                ->required()
                ->maxLength(255),

            TextInput::make('price')
                ->required()
                ->numeric(),

            Forms\Components\Textarea::make('description')
                ->maxLength(65535),

            Forms\Components\FileUpload::make('image_url')
                ->image()
                ->maxSize(1024)
                ->directory('images') // Stocke l'image dans le répertoire 'images'
                ->preserveFilenames(), // Préserve le nom du fichier original

            Select::make('category_id')
                ->label('Category')
                ->options(fn() => Categorie::all()->pluck('Name', 'id'))
                ->nullable()
                ->searchable(),

            TextInput::make('stock')
                ->numeric()
                ->default(0),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table->columns([
            TextColumn::make('Name'),

            TextColumn::make('Price')
                ->money('XAF'),

            ImageColumn::make('image_url')
                ->getStateUsing(fn($record) => $record->image_url ? asset("storage/{$record->image_url}") : null)


                ->size(50)
                ->circular(),

            TextColumn::make('Stock')
                ->label('Stock'),

            TextColumn::make('category.Name')
                ->label('Category'),

            TextColumn::make('created_at')
                ->dateTime(),
        ])
        ->actions([
            EditAction::make(),
            DeleteAction::make(),
        ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
