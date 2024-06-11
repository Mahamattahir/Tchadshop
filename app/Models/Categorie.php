<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Categorie extends Model
{
    use HasFactory, Searchable;
    protected $fillable = ['Name', 'Slug', 'product_list'];
    protected $guarded = [''];

    public function toSearchableArray(): array
    {
        $searcharray = [
            'Name'=>$this->Name
        ];



        return $searcharray;
    }
}
