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
        <div class="recent-posts-wrapper">
          <div class="inner-wrapper">
            <b>Industry</b> updates
            <ul id="recentPosts" class="ul-recent-posts">
              <?php
              $recent_posts = wp_get_recent_posts(array(
                  'numberposts' => 2,
                  'post_status' => 'publish'
              ));
              foreach( $recent_posts as $post_item ) : ?>
                <li class="li-recent-post">
                  <a href="<?php echo get_permalink($post_item['ID']) ?>" class="recent-post-title">
                    <?php echo $post_item['post_title'] ?> <b>Read more</b>
                  </a>
                </li>
                <?php endforeach; ?>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!--/Content-->

<?php get_footer(); ?>