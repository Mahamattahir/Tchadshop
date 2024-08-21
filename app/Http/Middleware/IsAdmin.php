<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; // Assurez-vous que cette ligne est présente

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Utilisation de la facade Auth
        if (Auth::check() && Auth::user()->is_admin == 1) {
            return $next($request);
        }

        return redirect('/'); // Redirige les utilisateurs non administrateurs
    }
}
