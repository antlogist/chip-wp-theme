<?php 

//Exit if accessed directly
if ( ! defined ('ABSPATH') ) {
  exit;
}
get_header(); ?>

<!--Content-->
<div class="container">
  <div class="row">
    <div class="col-4 col-lg-3">
      <a href="#">
        <img id="aboutImg" src="<?php if (!get_theme_mod('about_img')) {echo "https://dummyimage.com/282x126/000/fff.jpg";} else { echo esc_url(get_theme_mod('about_img'));} ?>" class="d-block w-100" alt="about">
        <span class="title">
          Aboout us
        </span>
      </a>
    </div>
    <div class="col-4 col-lg-3">
      <a href="#">
        <img id="productsImg" src="<?php if (!get_theme_mod('products_img')) {echo "https://dummyimage.com/282x126/000/fff.jpg";} else { echo esc_url(get_theme_mod('products_img'));} ?>" class="d-block w-100" alt="products">
        <span class="title">
          Our Products
        </span>
      </a>
    </div>
    <div class="col-4 col-lg-3">
      <a href="#">
        <img id="contactImg" src="<?php if (!get_theme_mod('contact_img')) {echo "https://dummyimage.com/282x126/000/fff.jpg";} else { echo esc_url(get_theme_mod('contact_img'));} ?>" class="d-block w-100" alt="contact">
        <span class="title">
          Contact Us
        </span>
      </a>
    </div>
    <div class="col-12 col-lg-3"></div>
  </div>
</div>
<!--/Content-->

<?php get_footer(); ?>
