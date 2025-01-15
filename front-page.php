<?php

//Exit if accessed directly
if (! defined('ABSPATH')) {
  exit;
}
get_header();

// if (!get_theme_mod('buttons_type') || get_theme_mod('buttons_type') === "basic") {
//   get_template_part('template-parts/frontbuttons', 'basic');
// } else {
//   get_template_part('template-parts/frontbuttons', 'subscr');
// }

get_template_part('template-parts/pagebuttons', 'basic');


?>
<!--Content-->
<div class="container">
  <div class="content-wrapper">
    <div class="row">
      <div class="col-md-12">
        <div class="post-wrapper">
          <?php get_template_part('template-parts/eventlist', 'basic'); ?>
        </div>
      </div>
    </div>
  </div>
</div>
<!--/Content-->

<?php get_footer(); ?>