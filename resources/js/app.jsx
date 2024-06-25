// import { createInertiaApp } from '@inertiajs/react';
// import { createRoot } from 'react-dom/client';
//   createInertiaApp({
//     resolve: name => {
//       const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
//       return pages[`./Pages/${name}.jsx`];
//     },
//     setup({ el, App, props }) {
//       createRoot(el).render(<App {...props} />);
//     },
//   });



import React from 'react';
import { createRoot } from 'react-dom/client';
import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

const app = document.getElementById('app');

createRoot(app).render(
  <InertiaApp
    initialPage={JSON.parse(app.dataset.page)}
    resolveComponent={(name) => import(`./Pages/${name}`).then(module => module.default)}
  />
);

InertiaProgress.init();
