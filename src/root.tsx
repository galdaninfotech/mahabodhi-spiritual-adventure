import { component$ } from '@builder.io/qwik';
import { isDev } from '@builder.io/qwik/build';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
        {!isDev && <ServiceWorkerRegister />}
      </head>
      <body lang="en" class="home page-template page-template-full-width page-template-full-width-php page page-id-29 theme-wanderland wanderland-core-1.3 woocommerce-no-js qodef-qi--no-touch qi-addons-for-elementor-1.6.9 wanderland-ver-1.6 mkdf-grid-1300 mkdf-wide-dropdown-menu-content-in-grid mkdf-light-header mkdf-no-behavior mkdf-dropdown-animate-height mkdf-header-divided mkdf-menu-area-shadow-disable mkdf-menu-area-in-grid-shadow-disable mkdf-menu-area-in-grid-border-disable mkdf-logo-area-border-disable mkdf-logo-area-in-grid-border-disable mkdf-header-vertical-border-disable mkdf-side-menu-slide-from-right mkdf-woocommerce-columns-3 mkdf-woo-normal-space mkdf-woo-pl-info-below-image mkdf-woo-single-thumb-on-left-side mkdf-woo-single-has-pretty-photo mkdf-default-mobile-header mkdf-sticky-up-mobile-header mkdf-header-top-enabled mkdf-on-side-search wpb-js-composer js-comp-ver-7.5 vc_responsive elementor-default elementor-kit-3474" itemScope itemType="https://schema.org/WebPage">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
