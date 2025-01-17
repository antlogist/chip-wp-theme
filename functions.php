<?php

// Exit if accessed directly
if (! defined('ABSPATH')) {
  exit;
}

/*===INCLUDES===*/
// Theme features
include(get_template_directory() . '/inc/setup.php');

// Styles and scrpts
include(get_template_directory() . '/inc/enqueue.php');

// Theme customizer
include(get_template_directory() . '/inc/customizer.php');

// REST menu
include(get_template_directory() . '/inc/REST/rest_menu.php');

include(get_template_directory() . '/inc/cpt.php');

/*===HOOKS===*/
// Theme features
add_action('after_setup_theme', 'chip_theme_support');

// Menu depth
add_action('admin_enqueue_scripts', 'menu_depth');

// Add viewport
add_action('wp_head', 'add_viewport_meta_tag', '1');

// Styles and scrpts
add_action('wp_enqueue_scripts', 'chip_styles_and_scripts');

// Theme customizer
add_action('customize_register', 'chip_customize_register');

// Theme customizer script
add_action('customize_preview_init', 'chip_customizer_script');

// REST menu
add_action('rest_api_init', 'chip_menu');

// Modify excerpt length
function custom_excerpt_length($length)
{
  $length = 10;
  return $length;
}
add_filter('excerpt_length', 'custom_excerpt_length');

// Modify read more
function custom_excerpt_more($more)
{
  return '... <a href="' . get_permalink() . '" class="small"><br><span class="d-inline-block mt-2">Read more</span></a>';
}
add_filter('excerpt_more', 'custom_excerpt_more');

// Register custom post types
add_action('init', 'chip_theme_post_types');

if (!function_exists('dd')) {
  function dd(...$vars)
  {
    foreach ($vars as $var) {
      var_dump($var);
    }
    die(1);
  }
}

add_action('pre_get_posts', 'event_adjust_queries');

function event_adjust_queries($query)
{
  if (!is_admin() && is_post_type_archive('program') && $query->is_main_query()) {
    $query->set('orderby', 'title');
    $query->set('order', 'ASC');
    $query->set('posts_per_page', -1);
  }

  if (!is_admin() && is_post_type_archive('event') && $query->is_main_query()) {
    $today = date('Y-m-d H:i:s');

    $query->set('meta_key', 'event_date');
    $query->set('orderby', 'meta_value');
    $query->set('order', 'ASC');
    $query->set('meta_query', [
      [
        'key' => 'event_date',
        'compare' => '>',
        'value' => $today
      ]
    ]);
  }
}
