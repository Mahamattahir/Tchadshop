<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'category_id',
        'stock',
        'image_url',
    ];

    // Définir la relation avec la catégorie
    public function category()
    {
        return $this->belongsTo(Categorie::class, 'category_id'); // Assurez-vous que 'category_id' est le nom correct de la colonne de clé étrangère
    }
    protected static function booted()
    {
        static::saving(function ($product) {
            if ($product->image_url) {
                // Remplace les espaces par des tirets dans le nom du fichier avant de le sauvegarder
                $product->image_url = str_replace(' ', '_', $product->image_url);
            }
        });
    }

}
