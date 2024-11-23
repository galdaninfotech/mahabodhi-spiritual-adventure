import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './sidebar.module.css?inline';

export default component$(() => {
useStylesScoped$(styles);

  return (
    <div class="mkdf-sidebar-holder mkdf-grid-col-3">
      <aside class="mkdf-sidebar">
          <div id="media_image-2" class="widget widget_media_image"><a href="/about"><img loading="lazy" width="306" height="223" src="/images/sidebar-img.png" class="image wp-image-3272  attachment-full size-full" alt="a" style="max-width: 100%; height: auto;" decoding="async" srcset="/images/sidebar-img.png 306w, images/sidebar-img-300x219.png 300w" sizes="(max-width: 306px) 100vw, 306px" /></a></div>
          <div id="text-2" class="widget widget_text">
              <div class="textwidget">
                  <div class="vc_row wpb_row vc_row-fluid">
                      <div class="wpb_column vc_column_container vc_col-sm-12">
                          <div class="vc_column-inner">
                              <div class="wpb_wrapper">
                                  <div class="mkdf-section-title-holder  ">
                                      <div class="mkdf-st-inner">
                                          <h5 class="mkdf-st-title">
                                          </h5>
                                          <p class="mkdf-st-text " style="line-height: 23px">
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div id="categories-2" class="widget widget_categories">
              <div class="mkdf-widget-title-holder">
                  <h6 class="mkdf-widget-title">WHY CHOOSE US?</h6>
              </div>
              <ul>
                  <li class="cat-item cat-item-52"><span><i class="far fa-check-square"></i>Holistic Travel</span></li>
                  <li class="cat-item cat-item-52"><span><i class="far fa-check-square"></i>Local Expertise</span></li>
                  <li class="cat-item cat-item-52"><span><i class="far fa-check-square"></i>Community Spirit</span></li>
                  <li class="cat-item cat-item-25"><span><i class="far fa-check-square"></i>Nature-Infused Wellness</span></li>
                  <li class="cat-item cat-item-38"><span><i class="far fa-check-square"></i>Debuting Serenity</span></li>
                  <li class="cat-item cat-item-52"><span><i class="far fa-check-square"></i>Himalayan Haven</span></li>


              </ul>
          </div>

          <div id="categories-2" class="widget widget_categories">
              <div class="mkdf-widget-title-holder">
                  <h6 class="mkdf-widget-title">OUR OFFERINGS</h6>
              </div>
              <ul>
                  <li class="cat-item cat-item-23"><a href="/unique-offerings/customized-wellness-journeys">Customized Wellness Journeys</a></li>
                  <li class="cat-item cat-item-26"><a href="/unique-offerings/yoga-and-meditation-at-exotic-locations">Yoga and Meditation at Exotic Locations</a></li>
                  <li class="cat-item cat-item-39"><a href="/unique-offerings/eco-friendly-accommodations">Eco-Friendly Accommodations</a></li>
                  <li class="cat-item cat-item-50"><a href="/unique-offerings/local-cultural-workshops">Local Cultural Workshops</a></li>

                  <li class="cat-item cat-item-41"><a href="/upcoming-retreats/ladakh-yoga-retreat">Ladakh Yoga Retreat</a></li>
                  <li class="cat-item cat-item-40"><a href="/upcoming-retreats/meditation-in-the-monasteries">Meditation in the Monasteries</a></li>
                  <li class="cat-item cat-item-74"><a href="/upcoming-retreats/nature-immersion-retreat">Nature Immersion Retreat</a></li>
                  <li class="cat-item cat-item-63"><a href="/upcoming-retreats/yoga-and-meditation-at-pangong-lake">Yoga and Meditation at Pangong Lake</a></li>

                  <li class="cat-item cat-item-24"><a href="/packages/serenity-and-discovery">Serenity & Discovery</a></li>
                  <li class="cat-item cat-item-1"><a href="/packages/adventure-and-enlightenment">Adventure & Enlightenment</a></li>
                  <li class="cat-item cat-item-1"><a href="/packages/complete-retreat">Complete Retreat</a></li>
                  <li class="cat-item cat-item-1"><a href="/packages/hybrid-retreat-and-sightseeing">Hybrid Retreat & Sightseeing</a></li>
              </ul>
          </div>
          
      </aside>
  </div>
  );
});
