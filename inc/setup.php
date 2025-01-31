<?php

//Exit if accessed directly
if (! defined("ABSPATH")) {
  exit;
}

function add_viewport_meta_tag()
{
  echo '<meta name="viewport" content="width=device-width, initial-scale=1">';
}

function menu_depth($hook)
{
  if ($hook != 'nav-menus.php') return;
  wp_add_inline_script('nav-menu', 'wpNavMenu.options.globalMaxDepth = 1;', 'after');
}

function chip_theme_support()
{
  //Thumbnails support
  add_theme_support("post-thumbnails");

  //Image size
  add_image_size("pageBanner", 1500, 350, true);
  add_image_size("standardImage", 1024, 683, true);
  add_image_size("squareImage", 683, 683, true);

  //Document title tag support
  add_theme_support("title-tag");

  //Menus
  add_theme_support("menus");
}

/**
 * This function determines the current page type in WordPress 
 * by checking various conditions such as `is_front_page`, `is_home`, etc. 
 * If a condition matches, it sets an appropriate ID for the `<body>` tag 
 * using the corresponding value from the `$pages` array. 
 * The IDs are escaped to prevent XSS vulnerabilities.
 *
 * @return void
 */
function body_id()
{
  $pages = [
    'is_front_page' => 'frontPage',
    'is_home'       => 'homePage',
    'is_single'     => 'singlePage',
    'is_search'     => 'searchPage',
    'is_archive'    => 'archivePage'
  ];

  foreach ($pages as $condition => $value) {
    if (call_user_func($condition)) { // is_front_page()...
      echo 'id="' . esc_attr($value) . '"';
      return;
    }
  }
}

// Register nav menu Theme Locations
add_action('after_setup_theme', function () {
  register_nav_menus(
    [
      'header' => 'Header Menu',
      'footer' => 'Footer Menu'
    ]
  );
});

/**
 * This function modifies the CSS classes of navigation menu items in WordPress using the BEM methodology. 
 * It clears default classes, adds a base element class (`header-menu__item`), 
 * and appends an active modifier (`header-menu__item--active`) to the current menu item.
 */
add_filter('nav_menu_css_class', function ($classes, $item, $args, $depth) {
  if ($args->theme_location == 'header') {
    $classes = []; // Clearing the standard classes

    // Element class
    $classes[] = 'header-menu__item';

    // Modifier for the current item (modifier)
    if (in_array('current-menu-item', $classes)) {
      $classes[] = 'header-menu__item--active';
    }

    return $classes;
  }

  return $classes;
}, 10, 4);
