import { component$ } from '@builder.io/qwik';

export default component$(() => {

  return (
    <>
        <h4 itemProp="name" class="entry-title mkdf-post-title" style="margin-top:30px">
            <a itemProp="url" href="#" title="Exclusions"> Exclusions: </a>
        </h4>
        <ul class="inclusion">
          <li><span><i class="fas fa-times-circle"></i>Airfare to and from Leh.</span></li>
          <li><span><i class="fas fa-times-circle"></i>Personal expenses (shopping, additional meals).</span></li>
          <li><span><i class="fas fa-times-circle"></i>Optional activities not included in the package.</span></li>
        </ul>
    </>
  );
});
