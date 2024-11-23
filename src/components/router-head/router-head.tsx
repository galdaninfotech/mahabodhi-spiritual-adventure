import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

import { component$ } from '@builder.io/qwik';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />


      <meta property="og:url" content="index.html" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Wanderland" />
        <meta property="og:description" content="Travel Blog" />
        <meta property="og:image" content="wp-content/themes/wanderland/assets/img/open_graph.jpg" />

        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes" />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="profile" href="https://gmpg.org/xfn/11" />

        <title>Wanderland &#8211; Travel Blog</title>

       
        <link rel="dns-prefetch" href="http://export.qodethemes.com/" />
        <link rel="dns-prefetch" href="http://maps.googleapis.com/" />
        <link rel="dns-prefetch" href="http://static.zdassets.com/" />
        <link rel="dns-prefetch" href="http://fonts.googleapis.com/" />
        <link rel="alternate" type="application/rss+xml" title="Wanderland &raquo; Feed" href="feed/index.html" />
        <link rel="alternate" type="application/rss+xml" title="Wanderland &raquo; Comments Feed" href="comments/feed/index.html" />

        <link rel='stylesheet' href='/custom.css' type='text/css' media='all' />
        <link rel='stylesheet' id='wp-block-library-css' href='/wp-includes/css/dist/block-library/style.min.css' type='text/css' media='all' />
        
        <link rel='stylesheet' id='titan-adminbar-styles-css' href='/wp-content/plugins/anti-spam/assets/css/admin-bar.css' type='text/css' media='all' />
        <link rel='stylesheet' id='contact-form-7-css' href='/wp-content/plugins/contact-form-7/includes/css/styles.css' type='text/css' media='all' />
        <link rel='stylesheet' id='rabbit_css-css' href='/_toolbar/assets/css/rbt-modules.css' type='text/css' media='all' />

        <link rel='stylesheet' id='ppress-frontend-css' href='/wp-content/plugins/wp-user-avatar/assets/css/frontend.min.css' type='text/css' media='all' />
        <link rel='stylesheet' id='ppress-flatpickr-css' href='/wp-content/plugins/wp-user-avatar/assets/flatpickr/flatpickr.min.css' type='text/css' media='all' />
        <link rel='stylesheet' id='ppress-select2-css' href='/wp-content/plugins/wp-user-avatar/assets/select2/select2.min.css' type='text/css' media='all' />
        <link rel='stylesheet' id='qi-addons-for-elementor-grid-style-css' href='/wp-content/plugins/qi-addons-for-elementor/assets/css/grid.min.css' type='text/css' media='all' />
        <link rel='stylesheet' id='qi-addons-for-elementor-helper-parts-style-css' href='/wp-content/plugins/qi-addons-for-elementor/assets/css/helper-parts.min.css' type='text/css' media='all' />
        <link rel='stylesheet' id='qi-addons-for-elementor-style-css' href='/wp-content/plugins/qi-addons-for-elementor/assets/css/main.min.css' type='text/css' media='all' />
        <link rel='stylesheet' id='wanderland-mikado-default-style-css' href='/wp-content/themes/wanderland/style.css' type='text/css' media='all' />
        <link rel='stylesheet' id='wanderland-mikado-modules-css' href='/wp-content/themes/wanderland/assets/css/modules.min.css' type='text/css' media='all' />
        <link rel='stylesheet' id='wanderland-mikado-dripicons-css' href='/wp-content/themes/wanderland/framework/lib/icons-pack/dripicons/dripicons.css' type='text/css' media='all' />
        <link rel='stylesheet' id='wanderland-mikado-font_elegant-css' href='/wp-content/themes/wanderland/framework/lib/icons-pack/elegant-icons/style.min.css' type='text/css' media='all' />
        <link rel='stylesheet' id='wanderland-mikado-font_awesome-css' href='/wp-content/themes/wanderland/framework/lib/icons-pack/font-awesome/css/fontawesome-all.min.css' type='text/css' media='all' />
        <link rel='stylesheet' id='wanderland-mikado-ion_icons-css' href='/wp-content/themes/wanderland/framework/lib/icons-pack/ion-icons/css/ionicons.min.css' type='text/css' media='all' />
        <link rel='stylesheet' id='wanderland-mikado-linea_icons-css' href='/wp-content/themes/wanderland/framework/lib/icons-pack/linea-icons/style.css' type='text/css' media='all' />
        <link rel='stylesheet' id='wanderland-mikado-linear_icons-css' href='/wp-content/themes/wanderland/framework/lib/icons-pack/linear-icons/style.css' type='text/css' media='all' />
        <link rel='stylesheet' id='wanderland-mikado-simple_line_icons-css' href='/wp-content/themes/wanderland/framework/lib/icons-pack/simple-line-icons/simple-line-icons.css' type='text/css' media='all' />
        <link rel='stylesheet' id='mediaelement-css' href='/wp-includes/js/mediaelement/mediaelementplayer-legacy.min.css' type='text/css' media='all' />
        <link rel='stylesheet' id='wp-mediaelement-css' href='/wp-includes/js/mediaelement/wp-mediaelement.min.css' type='text/css' media='all' />
        <link rel='stylesheet' id='wanderland-mikado-woo-css' href='/wp-content/themes/wanderland/assets/css/woocommerce.min.css' type='text/css' media='all' />

        <link rel='stylesheet' id='wanderland-mikado-woo-responsive-css' href='/wp-content/themes/wanderland/assets/css/woocommerce-responsive.min.css' type='text/css' media='all' />
        <link rel='stylesheet' id='wanderland-mikado-style-dynamic-css' href='/wp-content/themes/wanderland/assets/css/style_dynamic.css' type='text/css' media='all' />
        <link rel='stylesheet' id='wanderland-mikado-modules-responsive-css' href='/wp-content/themes/wanderland/assets/css/modules-responsive.min.css' type='text/css' media='all' />
        <link rel='stylesheet' id='wanderland-mikado-style-dynamic-responsive-css' href='/wp-content/themes/wanderland/assets/css/style_dynamic_responsive.css' type='text/css' media='all' />
        <link rel='stylesheet' id='wanderland-mikado-google-fonts-css' href='https://fonts.googleapis.com/css?family=Oswald%3A300%2C400%2C400i%2C600%7CMuli%3A300%2C400%2C400i%2C600%7CCrimson+Text%3A300%2C400%2C400i%2C600&#038;subset=latin-ext&#038;ver=1.0.0' type='text/css' media='all' />
        <link rel='stylesheet' id='js_composer_front-css' href='/wp-content/plugins/js_composer/assets/css/js_composer.min.css' type='text/css' media='all' />
        <link rel='stylesheet' id='swiper-css' href='/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css' type='text/css' media='all' />
        <link rel='stylesheet' id='qode-zendesk-chat-css' href='/wp-content/plugins/qode-zendesk-chat/assets/main.css' type='text/css' media='all' />
        
        <link rel='stylesheet' id='rs-plugin-settings-css' href='/wp-content/plugins/revslider/public/assets/css/rs6.css' type='text/css' media='all' />
        
        <link rel='stylesheet' href='/custom2.css' type='text/css' media='all' />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.style })}
        />
      ))}

      {head.scripts.map((s) => (
        <script
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.script })}
        />
      ))}
    </>
  );
});
