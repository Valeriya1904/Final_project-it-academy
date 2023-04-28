import { APP_ROUTES } from './appRoutes';

export const routes = {
  home: {
    href: APP_ROUTES.home,
    component: 'home-page',
  },
  about: {
    href: APP_ROUTES.about,
    component: 'about-page',
  },
  cart: {
    href: APP_ROUTES.cart,
    component: 'cart-page',
  },
  blog: {
    href: APP_ROUTES.blog,
    component: 'blog-page',
  },
  productView: {
    href: APP_ROUTES.product,
    component: 'product-page',
  },
  admin: {
    href: APP_ROUTES.admin,
    component: 'admin-page',
  },
  // signUp: {
  //   href: APP_ROUTES.signUp,
  //   component: 'sign-up-page',
  // },
  // signIn: {
  //   href: APP_ROUTES.signIn,
  //   component: 'sign-in-page',
  // },
  // signOut: {
  //   href: APP_ROUTES.signOut,
  //   component: 'sign-out-page',
  // },
  
  error: {
    href: '*',
    component: 'error-page',
  },
};
