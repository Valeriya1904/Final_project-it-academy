import { APP_ROUTES } from './appRoutes';

export const routes = {
  catalog: {
    href: APP_ROUTES.catalog,
    component: 'catalog-page',
  },
  about: {
    href: APP_ROUTES.about,
    component: 'about-page',
  },
  blog: {
    href: APP_ROUTES.blog,
    component: 'blog-page',
  },
  cart: {
    href: APP_ROUTES.cart,
    component: 'cart-page',
  },
  error: {
    href: '*',
    component: 'error-page',
  },
};
