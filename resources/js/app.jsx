import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { InertiaProgress } from '@inertiajs/progress';

// Initialise Inertia Progress (barre de progression)
InertiaProgress.init();

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
    return pages[`./Pages/${name}.jsx`];
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});






// import { createInertiaApp } from '@inertiajs/inertia-react';
// import { createRoot } from 'react-dom/client';

// createInertiaApp({
//   resolve: name => import(`./Pages/${name}.jsx`).then(module => module.default),
//   setup({ el, App, props }) {
//     createRoot(el).render(<App {...props} />);
//   },
// });


