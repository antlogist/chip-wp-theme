<?php 

//Exit if accessed directly
if ( ! defined ('ABSPATH') ) {
  exit;
}
get_header(); ?>

<!--Content-->
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
        <p><b class="text-uppercase">Subscribe</b> to our newsletter</p>
        <?php
            echo do_shortcode(get_theme_mod('subscr'));
          ?>
        </div>
      </div>
    </div>
  </div>
</div>
<!--/Content-->

<?php get_footer(); ?>
