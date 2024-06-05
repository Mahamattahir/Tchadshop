<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Model;
class Product extends Model implements HasMedia
{
    use InteractsWithMedia;
    protected $fillable = ['Name','Description','Price','category_id','image_url'];
}
