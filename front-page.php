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
    <div class="row">
      <div class="col-md-12">
        <div class="post-wrapper">
          <?php get_template_part('template-parts/events/event', 'list'); ?>
        </div>
      </div>
    </div>
  </div>
</div>
<!--/Content-->

<?php get_footer(); ?>