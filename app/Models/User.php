<?php


namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Foundation\Auth\User as AuthenticatableUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
class User extends AuthenticatableUser implements AuthenticatableContract
{
    use HasFactory, Notifiable;
    protected $fillable = ['name','email','password'];
}
