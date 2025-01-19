<?php
if (! defined("ABSPATH")) {
  header("Location: /");
  exit;
} ?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset') ?>">
  <?php wp_head(); ?>
</head>

<script>
  const baseUrl = "<?= get_site_url(); ?>";
</script>

<body <?php body_id(); ?> <?php body_class(); ?>>

  <header>

    <?php get_template_part('template-parts/nav/nav', 'top'); ?>

    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <div class="d-flex h-100 align-items-center justify-content-center pt-5 pt-sm-0">
            <a href="<?= esc_url(get_home_url()); ?>">
              <img class="img-fluid py-2 py-sm-0" src="<?= get_theme_file_uri(); ?>/images/logo.png" class="logo" alt="logo">
            </a>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="d-flex h-100 align-items-center justify-content-center pt-sm-5">
            <img class="img-fluid" src="<?= get_theme_file_uri(); ?>/images/partner-logo.png" class="logo" alt="partner-logo">
          </div>
        </div>
      </div>

    </div>
  </header>

  <nav id="navMain">
    <a href="#" id="navToggleButton">
      <span class="toggle-line toggle-line-1"></span>
      <span class="toggle-line toggle-line-2"></span>
      <span class="toggle-line toggle-line-3"></span>
    </a>
    <div id="navMainWrapper" class="nav-wrapper opacity-0 container"></div>
  </nav>

  <div class="container">
    <!--Carousel-->
    <div id="frontPageCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">

        <?php
        function render_carousel_item($slide_name)
        {
          $placeholder_image_url = 'https://dummyimage.com/1142x283/000/fff.jpg';
          $image_url = get_theme_mod($slide_name) ?: $placeholder_image_url;
          $attachment_id = attachment_url_to_postid($image_url);
          if ($attachment_id) {
            $banner_size_url = wp_get_attachment_image_src($attachment_id, 'pageBanner')[0];
            $image_url = esc_url($banner_size_url);
          } else {
            $image_url = esc_url($placeholder_image_url);
          }
          echo '<img src="' . $image_url . '" alt="Page Banner" id="' . esc_attr($slide_name) . '" class="d-block w-100">';
        }
        ?>

        <div class="carousel-item active">
          <?php render_carousel_item('slide_one'); ?>
        </div>

        <div class="carousel-item">
          <?php render_carousel_item('slide_two'); ?>
        </div>

        <div class="carousel-item">
          <?php render_carousel_item('slide_three'); ?>
        </div>

      </div>
    </div>
    <!--/Carousel-->
  </div>