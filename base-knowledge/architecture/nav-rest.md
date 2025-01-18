# Website Navigation

This code registers two REST API endpoints `/menus/v1/menu` and `/menus/v1/footer-menu` to retrieve navigation menus from WordPress. The `get_menu()` and `get_footer_menu()` functions use `wp_get_nav_menu_items()` to fetch menu items for the main and footer menus respectively. These items are then filtered using `filter_nav()`, which reduces them to an array of URLs and titles before returning the result.

```php
// inc/REST/rest_menu.php

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

// functions.php
add_action('rest_api_init', 'chip_menu');
```