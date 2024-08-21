<?php

namespace App\Providers;

use Filament\FilamentServiceProvider as BaseFilamentServiceProvider;
use Illuminate\Support\ServiceProvider;

class FilamentServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->loadRoutesFrom(__DIR__.'/../../vendor/filament/filament/routes.php');
        $this->loadViewsFrom(__DIR__.'/../../vendor/filament/filament/resources/views', 'filament');
    }

    public function register(): void
    {
        $this->app->register(BaseFilamentServiceProvider::class);
    }
}
