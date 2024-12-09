import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './amenities.css?inline';

export default component$(() => {
    useStylesScoped$(styles);
  return (
    <>
        <h4 itemProp="name" class="entry-title mkdf-post-title" style="margin-top:30px">
            <a itemProp="url" href="#" title="Inclusions"> Amenities: </a>
        </h4>
        <ul class="inclusion">
          <li><span><i class="far fa-check-square"></i>Open Campus</span></li>
          <li><span><i class="far fa-check-square"></i>Access to various meditation facilities</span></li>
          <li><span><i class="far fa-check-square"></i>Buddha Park</span></li>
          <li><span><i class="far fa-check-square"></i>Hospital for any medical issues </span></li>
          <li><span><i class="far fa-check-square"></i>Holistic environment </span></li>
        </ul>
        <a itemProp="url" href="/amenities" target="_self"  class="mkdf-btn mkdf-btn-medium mkdf-btn-solid mkdf-btn-svg-icon"  >
            <span class="mkdf-btn-text">Amenities Details</span>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 17 17" style="enable-background:new 0 0 17 17;" xml:space="preserve">
                <g>
                    <path d="M15,1.9"/>
                    <line x1="1.7" y1="15.3" x2="15" y2="1.9"/>
                    <line x1="16" y1="1.9" x2="15" y2="1.9"/>
                    <line x1="15" y1="1.9" x2="1" y2="1.9"/>
                    <path d="M15,1.9"/>
                    <line x1="15" y1="16" x2="15" y2="1.9"/>
                </g>
            </svg>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 17 17" style="enable-background:new 0 0 17 17;" xml:space="preserve">
                <g>
                    <path d="M15,1.9"/>
                    <line x1="1.7" y1="15.3" x2="15" y2="1.9"/>
                    <line  x1="16" y1="1.9" x2="15" y2="1.9"/>
                    <line x1="15" y1="1.9" x2="1" y2="1.9"/>
                    <path d="M15,1.9"/>
                    <line x1="15" y1="16" x2="15" y2="1.9"/>
                </g>
            </svg>
        </a>
    </>
  );
});
