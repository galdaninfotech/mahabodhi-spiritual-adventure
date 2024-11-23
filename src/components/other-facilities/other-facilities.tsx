import { component$ } from '@builder.io/qwik';

export default component$(() => {

  return (
    <>
        <h4 itemProp="name" class="entry-title mkdf-post-title" style="margin-top:30px">
            <a itemProp="url" href="#" title="Inclusions"> Exclusions: </a>
        </h4>
        <ul class="inclusion">
          <li><span><i class="far fa-check-square"></i>Open Campus</span></li>
          <li><span><i class="far fa-check-square"></i>Access to various meditation facilities</span></li>
          <li><span><i class="far fa-check-square"></i>Buddha Park</span></li>
          <li><span><i class="far fa-check-square"></i>Hospital for any medical issues </span></li>
          <li><span><i class="far fa-check-square"></i>Holistic environment </span></li>
        </ul>
    </>
  );
});
