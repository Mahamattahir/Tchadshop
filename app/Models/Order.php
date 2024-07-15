<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\product;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'product_id',
        'quantity',
        'name',
        'email',
        'phone',
        'Delivery_adress',
        'Ref',
        'date',
        'status',
    ];
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
