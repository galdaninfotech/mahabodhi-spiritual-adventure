import { component$ } from '@builder.io/qwik';

export default component$(() => {

  return (
    <>
        <h4 itemProp="name" class="entry-title mkdf-post-title" style="margin-top:30px">
            <a itemProp="url" href="#" title="Inclusions"> Optional Activities: </a>
        </h4>
        <ul class="inclusion">
          <li><span><i class="far fa-check-square"></i>River Rafting</span></li>
          <li><span><i class="far fa-check-square"></i>Trekking</span></li>
          <li><span><i class="far fa-check-square"></i>Cycling</span></li>
          <li><span><i class="far fa-check-square"></i>Camel Safari </span></li>
          <li><span><i class="far fa-check-square"></i>ATV Rides </span></li>
          <li><span><i class="far fa-check-square"></i>Zip Lining </span></li>
          <li><span><i class="far fa-check-square"></i>Bike Rental </span></li>
          <li>
            <span><i class="far fa-check-square"></i>Cultural Workshooop </span>
            <ul>
              <li><span><i class="far fa-check-square"></i>Village visit </span></li>              
              <li><span><i class="far fa-check-square"></i>Local Cuisine </span></li>              
            </ul>
          </li>
        </ul>
    </>
  );
});
