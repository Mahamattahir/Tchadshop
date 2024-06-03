<?php

namespace App;

use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Http\Kernel as HttpKernel;


class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        // Ajoutez ici vos middlewares globaux
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            HandleInertiaRequests::class,
     
            // Ajoutez ici vos middlewares de groupe pour les routes web
        ],

        'api' => [
            // Ajoutez ici vos middlewares de groupe pour les routes API
        ],
    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        // Ajoutez ici vos middlewares de route
    ];
}
