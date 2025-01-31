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

<body <?php body_id(); ?> <?php body_class('body--dark'); ?>>

  <header>
    <?php get_template_part('template-parts/nav/nav', 'top'); ?>
  </header>

  <?php
  if (has_nav_menu('header')) {
    wp_nav_menu(
      [
        'theme_location' => 'header',
        'container'      => false,
        'menu_class'     => 'header-menu',
        'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
      ]
    );
  }
  ?>