<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    use HasFactory;

    protected $fillable = ['Name', 'Slug', 'product_list'];

    // Définir la relation inverse avec les produits
    public function products()
    {
        return $this->hasMany(Product::class, 'category_id'); // Assurez-vous que 'category_id' est le nom correct de la colonne de clé étrangère
    }
}
