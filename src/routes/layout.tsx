import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { RequestHandler } from '@builder.io/qwik-city';

import Header from '../components/starter/header/header';
import Footer from '../components/starter/footer/footer';

import styles from './styles.css?inline';
import Slider from '~/components/starter/slider/slider';
import Topbar from '~/components/starter/topbar/topbar';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <div class="mkdf-wrapper">
        <div class="mkdf-wrapper-inner">
          <Topbar />
          <Header />
          <Slider />
          <main>
            <Slot />
          </main>
          <Footer />
        </div>
      </div>
      
        <script type="text/javascript" src="/wp-includes/js/jquery/jquery.min.js" id="jquery-core-js"></script>
        <script type="text/javascript" src="/wp-includes/js/jquery/jquery-migrate.min.js" id="jquery-migrate-js"></script>
        <script type="text/javascript" src="/wp-content/plugins/revslider/public/assets/js/rbtools.min.js" async id="tp-tools-js"></script>
        <script type="text/javascript" src="/wp-content/plugins/revslider/public/assets/js/rs6.min.js" async id="revmin-js"></script>
        <script type="text/javascript" src="/wp-includes/js/hoverIntent.min.js" id="hoverIntent-js"></script>
        <script type="text/javascript" src="/wp-content/themes/wanderland/assets/js/modules/plugins/jquery-ui.min.js" id="jquery-ui-js"></script>
        <script type="text/javascript" src="/wp-content/themes/wanderland/assets/js/modules.min.js" id="wanderland-mikado-modules-js"></script>

        <script type="text/javascript" src="/custom.js"></script>
        





    </>
  );
});
