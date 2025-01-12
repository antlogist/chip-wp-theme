<?php
if (! defined("ABSPATH")) {
  header("Location: /");
  exit;
}

function chip_menu()
{
  register_rest_route('menus/v1', 'menu', array(
    'methods' => WP_REST_SERVER::READABLE,
    'callback' => 'get_menu',
  ));

  register_rest_route('menus/v1', 'footer-menu', array(
    'methods' => WP_REST_SERVER::READABLE,
    'callback' => 'get_footer_menu',
  ));
}

function get_menu()
{
  $menu_items = wp_get_nav_menu_items('main');
  $filtered_items = filter_nav($menu_items);
  return $filtered_items;
}

function get_footer_menu()
{
  $menu_items = wp_get_nav_menu_items('footer');
  $filtered_items = filter_nav($menu_items);
  return $filtered_items;
}

function filter_nav($objects)
{
  $filteredObjects = array_reduce($objects, function ($carry, $item) {
    $newItem = ["url" => $item->url, "title" => $item->title];
    $carry[] = $newItem;
    return $carry;
  }, []);

  return $filteredObjects;
}
