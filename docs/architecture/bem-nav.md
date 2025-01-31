# BEM-based class modifications

Initialize menu and implement BEM-based class modifications, enhancing markup consistency and maintainability

```php
// header.php 

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

```

```php
// setup.php

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