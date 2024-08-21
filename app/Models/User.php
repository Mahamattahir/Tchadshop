<?php


namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Foundation\Auth\User as AuthenticatableUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
class User extends AuthenticatableUser implements AuthenticatableContract
{
    use HasFactory, Notifiable;
    protected $fillable = ['name','email','password'];
    public function setPasswordAttribute($value)
    {
        // Hash le mot de passe avant de le stocker dans la base de données
        $this->attributes['password'] = Hash::needsRehash($value) ? Hash::make($value) : $value;
    }
}
