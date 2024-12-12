import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import styles from './index.css?inline';
import Sidebar from '~/components/starter/sidebar/sidebar';
import Inclusions from '~/components/inclusions/inclusions';
import Exclusions from '~/components/exclusions/exclusions';
import OtherFacilities from '~/components/amenities/amenities';
import ImgBlogPostImg35 from '../../../../public/images/blog-post-img-35.jpg?jsx';
import OptionalActivities from '~/components/optional-activities/optional-activities';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="mkdf-content" style="margin-top: -150px">
      <div class="mkdf-content-inner">

          <div class="mkdf-title-holder mkdf-standard-type mkdf-title-va-header-bottom mkdf-preload-background mkdf-has-bg-image mkdf-bg-responsive-disabled" style="height: 452px;background-image:url(/images/blog-post-img-35.jpg);" data-height="452">
              <div class="mkdf-title-image">
                <ImgBlogPostImg35 />
              </div>
              <div class="mkdf-title-wrapper" style="height: 302px;padding-top: 150px">
                  <div class="mkdf-title-inner">
                      <div class="mkdf-grid">
                          <h2 class="mkdf-page-title entry-title">Customized Wellness Journeys</h2>
                      </div>
                  </div>
              </div>
          </div>

          <div class="mkdf-container">
              <div class="mkdf-container-inner clearfix">
                  <div class="mkdf-grid-row mkdf-grid-large-gutter">
                      <div class="mkdf-page-content-holder mkdf-grid-col-9">
                          <div class="mkdf-blog-holder mkdf-blog-standard mkdf-blog-pagination-standard" data-blog-type="standard" data-next-page="2" data-max-num-pages="17" data-post-number="5" data-excerpt-length="47">
                              <div class="mkdf-blog-holder-inner">
                                  <article id="post-506" class="mkdf-post-has-media post-506 post type-post status-publish format-standard has-post-thumbnail hentry category-trips tag-adventure tag-explore tag-guides">
                                      <div class="mkdf-post-content">
                                          
                                          <div class="mkdf-post-text">
                                              <div class="mkdf-post-text-inner">
                                                <div class="mkdf-post-text-main">
                                                    <h3 itemProp="name" class="entry-title mkdf-post-title">
                                                        <a itemProp="url" href="#" title="Customized Wellness Journeys"> Customized Wellness Journeys </a>
                                                    </h3>

                                                    <div class="mkdf-post-excerpt-holder">
                                                        <p itemProp="description" class="mkdf-post-excerpt">
                                                        Tailor your travel experience to match your wellness goals. Whether you seek rejuvenation, adventure, or cultural immersion, we create personalized itineraries that blend yoga and meditation with local exploration.
                                                        </p>
                                                    </div>

                                                    <form action="/get-in-touch/#wpcf7-f1433-p1182-o1" method="post" class="wpcf7-form init cf7_custom_style_1 demo" aria-label="Contact form" data-status="init">
                                                        <div style="display: none;">
                                                            <input type="hidden" name="_wpcf7" value="1433" />
                                                            <input type="hidden" name="_wpcf7_version" value="5.9.2" />
                                                            <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                                            <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f1433-p1182-o1" />
                                                            <input type="hidden" name="_wpcf7_container_post" value="1182" />
                                                            <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                                                        </div>
                                                        <div class="customized-wellness-journeys-form">
                                                            <span class="wpcf7-form-control-wrap">
                                                                <input size={40} class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Your FullName" value="" type="text" name="your-name" />
                                                                <input size={40} class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Your E-mail" value="" type="email" name="your-email" />
                                                            </span>

                                                            <span class="wpcf7-form-control-wrap">
                                                                <input size={40} class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="No. Of People" value="" type="number" name="number-of-people" />
                                                                <input size={40} class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="No. Of Days" value="" type="number" name="number-of-days" />
                                                            </span>

                                                            <span class="wpcf7-form-control-wrap">
                                                                <textarea cols={40} rows={4} class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Your requirements..." name="requirements"></textarea>
                                                            </span>

                                                            <button class="wpcf7-form-control wpcf7-submit mkdf-btn mkdf-btn-medium mkdf-btn-solid" type="submit">
                                                                <span class="mkdf-btn-text">Create Custom Package</span>
                                                            </button>
                                                        </div>
                                                        <div class="wpcf7-response-output" aria-hidden="true"></div>
                                                    </form>


                                                    <br /><br /><br />
                                                    <Inclusions />
                                                    <Exclusions />
                                                    <OtherFacilities />
                                                    <OptionalActivities />

                                                    
                                                </div>
                                                  
                                              </div>
                                          </div>
                                      </div>
                                  </article>
                                  
                              </div>
                          </div>
                      </div>



                      <Sidebar />

                  </div>
              </div>
          </div>
      </div>
  </div>    
  );
});

export const head: DocumentHead = {
  title: 'Customized Wellness Journeys',
  meta: [
    {
      name: 'description',
      content: 'Customized Wellness Journeys',
    },
  ],
};