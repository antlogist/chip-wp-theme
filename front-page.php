<?php 

//Exit if accessed directly
if ( ! defined ('ABSPATH') ) {
  exit;
}
get_header(); ?>

<!--Content-->
<div class="figures-wrapper">
  <div class="figure figure-1"></div>
  <div class="figure figure-2">
    <div class="logo-wrapper d-flex align-items-center justify-content-center">
      <div>
        <img src="https://dummyimage.com/512x512/ffbd00/000.jpg" class="logo" alt="logo">
        <h2 class="tagline text-uppercase" id="tagline"><?php echo get_theme_mod('front_page_tagline'); ?></h2>
        <div class="button-wrapper">
          <button data-page_id="<?php echo get_theme_mod('about_page_id'); ?>" class="_btn _btn-left _btn-invert" id="openModalAbout">About Us</button>
          <button data-page_id="<?php echo get_theme_mod('products_page_id'); ?>" class="_btn _btn-right mt-3" id="openModalProducts">Products</button>
        </div>
      </div>
    </div>
  </div>
  <div class="figure figure-3">
    <div class="contact-wrapper d-flex align-items-center">
      <div class="mt-3">
        <h3 class="tagline text-uppercase">Call Us</h3>
        <h5 class="contact" >Phone: <a id="phoneHref" href="tel:<?php echo get_theme_mod('phone');?>"><span id="phone"><?php echo get_theme_mod('phone'); ?></span></a></h5>
        <script>
          (function() {
            const phone = "<?php echo get_theme_mod('phone'); ?>";
            const el = document.getElementById("phoneHref");
            el.setAttribute('href', phone.replace(/\s/g, ''));
          })();
        </script>
        <h3 class="tagline text-uppercase mt-4">Address</h3>
        <h5 class="contact" id="address"><?php echo get_theme_mod('address'); ?></h5>

        <h3 class="tagline text-uppercase mt-4">Postal Address</h3>
        <h5 class="contact" id="postalAddress"><?php echo get_theme_mod('postal_address'); ?></h5>
        <div class="button-wrapper">
          <button class="_btn _btn-left _btn-invert mt-3" id="openModalMail">Send Mail</button>
          <button class="_btn _btn-right mt-3" id="openModalMap">Open Map</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!--/Content-->

<?php get_footer(); ?>
