import { component$ } from '@builder.io/qwik';

export default component$(() => {

  return (
    <>
        <h4 itemProp="name" class="entry-title mkdf-post-title" style="margin-top:30px">
            <a itemProp="url" href="#" title="Inclusions"> Inclusions: </a>
        </h4>
        <ul class="inclusion">
            <li><span><i class="far fa-check-square"></i>Holistic Travel</span></li>
            <li><span><i class="far fa-check-square"></i>All meals during the retreat and select meals during exploration.</span></li>
            <li><span><i class="far fa-check-square"></i>Transportation for local tours.</span></li>
            <li><span><i class="far fa-check-square"></i>Guided meditation sessions and workshops.</span></li>
            <li><span><i class="far fa-check-square"></i>Permit</span></li>
            <li><span><i class="far fa-check-square"></i>Entrance fees for attractions.</span></li>
        </ul>
    </>
  );
});
