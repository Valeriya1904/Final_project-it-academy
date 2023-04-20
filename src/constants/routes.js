import { APP_ROUTES } from './appRoutes';

export const routes = [
  {
    href: APP_ROUTES.catalog,
    component: '<catalog-page></catalog-page>',
  },
  {
    href: APP_ROUTES.about,
    component: '<about-page></about-page>',
  },
  {
    href: APP_ROUTES.blog,
    component: '<blog-page></blog-page>',
  },
  {
    href: APP_ROUTES.cart,
    component: '<cart-page></cart-page>',
  },
  {
    href: '*',
    component: '<error-page></error-page>',
  },
];
