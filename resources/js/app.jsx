import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { InertiaProgress } from '@inertiajs/progress';
import { Provider } from 'react-redux'; // Import du Provider de Redux si nécessaire
import store from './Pages/store'; // Import du store Redux si nécessaire

// Initialise Inertia Progress (barre de progression)
InertiaProgress.init();

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <Provider store={store}>
                    <App {...props} />
            </Provider>
        );
    },
});
