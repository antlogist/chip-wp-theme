<?php

//Exit if accessed directly
if ( ! defined ("ABSPATH") ) {
  exit;
}

?>

<!DOCTYPE html>

<html <?php language_attributes(); ?>>

<?php 

wp_head(); ?>

<script>
  const baseUrl = "<?php echo get_site_url(); ?>";

</script>

<body <?php echo body_id(); body_class(); ?> style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/images/bg.jpg')">

  <!--Header-->
  <header>
    <div class="container">
      <div class="header-phone">
        <a id="phoneHref" href="tel:<?php echo get_theme_mod('phone');?>">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 384">
            <path d="M362.667,266.667c-26.56,0-52.267-4.267-76.16-12.16c-7.36-2.347-15.787-0.64-21.653,5.227l-46.933,47.04
              c-60.48-30.72-109.867-80.107-140.587-140.48l46.933-47.147c5.867-5.867,7.573-14.293,5.227-21.653
              c-7.893-23.893-12.16-49.6-12.16-76.16C117.333,9.493,107.84,0,96,0H21.333C9.6,0,0,9.493,0,21.333
              C0,221.653,162.347,384,362.667,384c11.84,0,21.333-9.493,21.333-21.333V288C384,276.16,374.507,266.667,362.667,266.667z" />
          </svg>
            <span id="phone">
              <?php 
                if (!get_theme_mod('phone')) {
                  echo "123 456 789";
                } else {
                  echo get_theme_mod('phone'); 
                }
              ?>
            </span>
          </a>
        <script>
          (function() {
            const phone = "<?php echo get_theme_mod('phone'); ?>";
            const el = document.getElementById("phoneHref");
            el.setAttribute('href', 'tel:' + phone.replace(/\s/g, ''));
          })();

        </script>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <div class="d-flex h-100 align-items-center justify-content-center pt-5 pt-sm-0">
            <a href="<?php echo esc_url(get_home_url()); ?>">
              <img class="img-fluid py-2 py-sm-0" src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo.png" class="logo" alt="logo">
            </a>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="d-flex h-100 align-items-center justify-content-center pt-sm-5">
            <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/images/atra_logo.png" class="logo" alt="logo">
          </div>

        </div>
      </div>
    </div>
  </header>
  <!--/Header-->

  <!--Nav-->
  <nav id="navMain">
    <!--Nav toggle button-->
    <a href="#" id="navToggleButton">
      <span class="toggle-line toggle-line-1"></span>
      <span class="toggle-line toggle-line-2"></span>
      <span class="toggle-line toggle-line-3"></span>
    </a>
    <div id="navMainWrapper" class="nav-wrapper opacity-0 container">
    </div>
  </nav>

  <div class="container">
    <!--Carousel-->
    <div id="frontPageCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img id="slideOne" src="<?php if (!get_theme_mod('slide_one')) {echo "https://dummyimage.com/1142x283/000/fff.jpg";} else { echo esc_url(get_theme_mod('slide_one'));} ?>" class="d-block w-100" alt="tyre">
        </div>
        <div class="carousel-item">
          <img id="slideTwo" src="<?php if (!get_theme_mod('slide_two')) {echo "https://dummyimage.com/1142x283/000/fff.jpg";} else { echo esc_url(get_theme_mod('slide_two'));} ?>" class="d-block w-100" alt="tyre">
        </div>
        <div class="carousel-item">
          <img id="slideThree" src="<?php if (!get_theme_mod('slide_three')) {echo "https://dummyimage.com/1142x283/000/fff.jpg";} else { echo esc_url(get_theme_mod('slide_three'));} ?>" class="d-block w-100" alt="tyre">
        </div>
      </div>
    </div>
    <!--/Carousel-->
  </div>
