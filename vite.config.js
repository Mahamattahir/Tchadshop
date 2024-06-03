import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { glob } from 'glob';
export default defineConfig({
    plugins: [
        laravel({
            input: [
             
                'resources/js/**/*.{js,jsx}',  
                'resources/css/Hero.css',
                'resources/css/Navbar.css',  
                'resources/css/acheter.css',
                'resources/css/animation.css',
                'resources/css/app.css',
                'resources/css/bootstrap-grid.css',
                'resources/css/bootstrap-grid.min.css',
                'resources/css/bootstrap-reboot.css',
                'resources/css/bootstrap-reboot.min.css',
                'resources/css/bootstrap.css',
                'resources/css/bootstrap.min.css',
                'resources/css/contact.css',
                'resources/css/Home.css',
                'resources/css/Inscription.css',
                'resources/css/style.css',
                'resources/css/style.min.css',

                       
                ...glob.sync('resources/sass/**/*.scss'),
                ...glob.sync('resources/scss/bootstrap/scss/mixins/**/*.scss'),
                ...glob.sync('resources/scss/bootstrap/scss/utilities/**/*.scss'),
                ...glob.sync('resources/scss/bootstrap/scss/vendor/**/*.scss'),
                ...glob.sync('resources/lib/easing/**/*.js'),
                ...glob.sync('resources/lib/animate/**/*.css'),
                
            ],
            refresh: true,
        }),
        react(),
    ],
    esbuild: {
        loader: 'jsx',
        include: [
            'resources/js/**/*.{js,jsx}',
        ],
        exclude: [],
    },
});


