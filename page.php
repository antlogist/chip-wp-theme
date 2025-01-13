<?php

//Exit if accessed directly
if (! defined('ABSPATH')) {
  exit;
}
get_header();


get_template_part('template-parts/pagebuttons', 'basic');

?>
<!--Content-->
<div class="container">
  <div class="content-wrapper">
    <div class="row g-0">
      <div class="col-md-9">
        <div class="post-wrapper">
          <?php the_content(); ?>
        </div>
      </div>
      <!--Recent posts-->
      <div class="col-md-3">
        <?php get_template_part('template-parts/childpages', 'basic'); ?>
      </div>
    </div>
  </div>
</div>
<!--/Content-->

<?php get_footer(); ?>