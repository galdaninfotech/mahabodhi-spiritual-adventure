import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './testimonials.css?inline';

export default component$(() => {
    useStylesScoped$(styles);
  return (
    <>
        <h2 class="mkdf-st-title" style="color: #000; margin-right: 10px">
            Testimonials
            <span class="mkdf-st-highlight-title-holder" style="color: #f2f1e7">
                
            </span>
        </h2>
        <div class="testimonials mkdf-row-grid-section">
            <div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-0">
                <input type="radio" name="testimonial" id="input-testimonial1" checked />
                <input type="radio" name="testimonial" id="input-testimonial2" />
                <input type="radio" name="testimonial" id="input-testimonial3" />
                <input type="radio" name="testimonial" id="input-testimonial4" />
                <div class="testimonials-inner">
                <div class="testimonial">
                    <div class="testimonial-photo">
                        <div class="photo-background"></div>
                        <div class="photo-author"></div>
                    </div>
                    <div class="testimonial-text">
                        <p>Wait a second... you're telling me this testimonials slider is powered solely by CSS? That's some next-level web wizardry! I'm sold! Give me that mind-blowing slider to my website!</p>
                    </div>
                    <div class="testimonial-author">Henry Schwengle</div>
                </div>
                <div class="testimonial">
                    <div class="testimonial-photo">
                        <div class="photo-background"></div>
                        <div class="photo-author"></div>
                    </div>
                    <div class="testimonial-text">
                        <p>The older I get, the more I understand why roosters just scream to start the day.</p>
                    </div>
                    <div class="testimonial-author">Mr. George Robert</div>
                </div>
                <div class="testimonial">
                    <div class="testimonial-photo">
                        <div class="photo-background"></div>
                        <div class="photo-author"></div>
                    </div>
                    <div class="testimonial-text">
                        <p>Two of my friends have never met each other. Before they spoke, I told both of them that the other is a bit deaf. They shouted at each other for a few minutes before they realized that I'm an asshole.</p>
                    </div>
                    <div class="testimonial-author">Doodle Wobblepants</div>
                </div>
                <div class="testimonial">
                    <div class="testimonial-photo">
                        <div class="photo-background"></div>
                        <div class="photo-author"></div>
                    </div>
                    <div class="testimonial-text">
                        <p>Turning on your lights and sirens after losing a drag race is just poor sportsmanship, man.</p>
                    </div>
                    <div class="testimonial-author">John "Vroom" Cena</div>
                </div>
                </div>
                <div class="testimonials-arrows">
                    <div class="arrow arrow-left">
                        <label for="input-testimonial1"></label>
                        <label for="input-testimonial2"></label>
                        <label for="input-testimonial3"></label>
                        <label for="input-testimonial4"></label>
                        <span></span>
                    </div>
                    <div class="arrow arrow-right">
                        <label for="input-testimonial1"></label>
                        <label for="input-testimonial2"></label>
                        <label for="input-testimonial3"></label>
                        <label for="input-testimonial4"></label>
                        <span></span>
                    </div>
                </div>
                <div class="testimonials-bullets">
                    <label for="input-testimonial1">
                        <div class="bullet">
                        <div>
                            <span></span>
                        </div>
                        </div>
                    </label>
                    <label for="input-testimonial2">
                        <div class="bullet">
                        <div>
                            <span></span>
                        </div>
                        </div>
                    </label>
                    <label for="input-testimonial3">
                        <div class="bullet">
                        <div>
                            <span></span>
                        </div>
                        </div>
                    </label>
                    <label for="input-testimonial4">
                        <div class="bullet">
                        <div>
                            <span></span>
                        </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    </>
  );
});
