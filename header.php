<?php

//Exit if accessed directly
if ( ! defined ("ABSPATH") ) {
  exit;
}

include( get_template_directory() . '/inc/Classes/CSRFToken.php' );
$token = CSRFToken::_token();

?>

<!DOCTYPE html>

<html <?php language_attributes(); ?>>

<?php 

wp_head(); ?>

<script>
  const baseUrl = "<?php echo get_site_url(); ?>";
  const token = "<?php echo $token; ?>";

</script>

<body <?php echo body_id(); body_class(); ?>>
   
    <!--Nav-->
    <nav id="navMain">
     <div id="navMainWrapper" class="nav-wrapper opacity-0 d-flex align-items-center container">
        <!--Nav toggle button-->
        <a href="#" id="navToggleButton">
          <span class="toggle-line toggle-line-1"></span>
          <span class="toggle-line toggle-line-2"></span>
          <span class="toggle-line toggle-line-3"></span>
        </a>
     </div>
    </nav>
    
  <div class="container">
    <!--Carousel-->
    <div id="frontPageCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://dummyimage.com/1024x330/000/fff.jpg" class="d-block w-100" alt="tyre">
        </div>
        <div class="carousel-item">
          <img src="https://dummyimage.com/1024x330/000/ffbd00.jpg" class="d-block w-100" alt="tyre">
        </div>
        <div class="carousel-item">
          <img src="https://dummyimage.com/1024x330/000/fff.jpg" class="d-block w-100" alt="tyre">
        </div>
      </div>
    </div>
    <!--/Carousel-->
  </div>
