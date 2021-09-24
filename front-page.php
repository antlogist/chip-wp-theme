<?php 

//Exit if accessed directly
if ( ! defined ('ABSPATH') ) {
  exit;
}
get_header(); ?>

<div class="container" id="frontCards">
  <div class="row g-0">
    <div class="col-4 col-lg-3">
      <a id="aboutLink" href="<?php if (!get_theme_mod('about_id')) { echo "./"; } else { echo esc_url( get_permalink(get_theme_mod('about_id')) ); } ?>">
        <img id="aboutImg" src="<?php if (!get_theme_mod('about_img')) {echo "https://dummyimage.com/282x126/000/fff.jpg"; } else { echo esc_url(get_theme_mod('about_img')); } ?>" class="d-block w-100" alt="about">
        <span class="title">
          <span class="title-wrapper title-about-wrapper">
            About us
          </span>
        </span>
      </a>
    </div>
    <div class="col-4 col-lg-3">
      <a id="productsLink" href="<?php if (!get_theme_mod('products_id')) { echo "./"; } else { echo esc_url( get_permalink(get_theme_mod('products_id')) ); } ?>">
        <img id="productsImg" src="<?php if (!get_theme_mod('products_img')) {echo "https://dummyimage.com/282x126/000/fff.jpg"; } else { echo esc_url(get_theme_mod('products_img')); } ?>" class="d-block w-100" alt="products">
        <span class="title">
          <span class="title-wrapper title-products-wrapper">
            Our Products
          </span>
        </span>
      </a>
    </div>
    <div class="col-4 col-lg-3">
      <a id="contactLink" href="<?php if (!get_theme_mod('contact_id')) { echo "./"; } else { echo esc_url( get_permalink(get_theme_mod('contact_id')) ); } ?>">
        <img id="contactImg" src="<?php if (!get_theme_mod('contact_img')) {echo "https://dummyimage.com/282x126/000/fff.jpg"; } else { echo esc_url(get_theme_mod('contact_img')); } ?>" class="d-block w-100" alt="contact">
        <span class="title">
          <span class="title-wrapper title-contact-wrapper">
            Contact Us
          </span>
        </span>
      </a>
    </div>
    <div class="col-12 col-lg-3">
      <div class="subscribe-form">
        <div class="subscribe-form-wrapper">
          <div class="form-title mb-1"><b class="text-uppercase">Subscribe</b> to our newsletter</div>
          <?php
            echo do_shortcode(get_theme_mod('subscr'));
          ?>
        </div>
      </div>
    </div>
  </div>
</div>

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
