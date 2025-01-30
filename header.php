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
