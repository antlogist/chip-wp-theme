<?php 

//Exit if accessed directly
if ( ! defined ('ABSPATH') ) {
  exit;
}
get_header(); 

if (!get_theme_mod('buttons_type') || get_theme_mod('buttons_type') === "basic") {
  get_template_part('template-parts/frontbuttons', 'basic'); 
} else {
  get_template_part('template-parts/frontbuttons', 'subscr'); 
}

?>
<!--Content-->
<div class="container">
  <div class="content-wrapper">
    <div class="row g-0">
      <div class="col-md-9">
        <div class="post-wrapper">
          <?php 
            if ( have_posts() ) {
            while ( have_posts() ) {
              the_post(); 

              echo get_the_content();

              } // end while
            } // end if
          ?>
        </div>
      </div>
      <!--Recent posts-->
      <div class="col-md-3">
        <?php get_template_part('template-parts/recentnews', 'basic'); ?>
      </div>
    </div>
  </div>
</div>
<!--/Content-->

<?php get_footer(); ?>
