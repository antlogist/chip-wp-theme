# Old School WordPress Theme

- Theme Name: Chip theme
- Theme URI: https://github.com/antlogist/chip-wp-theme
- Author: Anton Podlesnyy
- Author URI: https://podlesnyy.ru
- Description: Simple business theme with old school design
- Tags: business-theme, old-school-design
- Version: 2.0
- Requires at least: 5.0
- Tested up to: 6.7.1
- Requires PHP: 8.2
- License: GNU General Public License v2 or later
- License URI: http://www.gnu.org/licenses/gpl-2.0.html
- Text Domain: chiptheme
- Use it to make something cool, have fun, and share what you've learned with others.

# Website menu

To display menus, the REST API is utilized. The endpoints are as follows:

- Header menu: `/wp-json/menus/v1/menu`
- Footer menu: `/wp-json/menus/v1/footer`

In order for the menus to appear, you need to create menus named "header" and "footer" in the admin panel.

# A little bit about the REST API

```php
// wp-content/themes/chip-wp-theme/functions.php

//REST menu
include( get_template_directory() . '/inc/REST/rest_menu.php');
...
//REST menu
add_action( 'rest_api_init', 'chip_menu' );
```
Registers a REST API route. Implement filtering logic in REST API endpoint to sanitize and limit site menu information, enhancing security and preventing unauthorized access.

```php
// wp-content/themes/chip-wp-theme/inc/REST/rest_menu.php

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
```

# Structure

```bash
.
├── dist
│   ├── css
│   │   ├── all.css
│   │   ├── all.min.css
│   │   ├── libs.css
│   │   └── libs.min.css
│   └── js
│       ├── all.js
│       ├── all.js.LICENSE.txt
│       ├── all.min.js
│       ├── theme-customize.js
│       └── theme-customize.min.js
├── footer.php
├── front-page.php
├── functions.php
├── header.php
├── inc
│   ├── Classes
│   │   ├── CSRFToken.php
│   │   └── Session.php
│   ├── customizer.php
│   ├── enqueue.php
│   ├── mail
│   │   └── mail.php
│   ├── REST
│   │   └── rest_menu.php
│   └── setup.php
├── index.php
├── package.json
├── page.php
├── README.md
├── resources
│   └── assets
│       ├── js
│       │   ├── baseObject.js
│       │   ├── buttons
│       │   │   └── buttons.js
│       │   ├── carousel
│       │   │   └── carousel.js
│       │   ├── Classes
│       │   │   ├── Mail.js
│       │   │   ├── Modal.js
│       │   │   ├── Mouse.js
│       │   │   └── Request.js
│       │   ├── customization
│       │   │   └── theme-customize.js
│       │   ├── init.js
│       │   ├── nav
│       │   │   └── nav.js
│       │   └── wpcf7
│       │       └── wpcf7.js
│       └── sass
│           ├── app.scss
│           └── libs.scss
├── single.php
├── style.css
├── template-parts
│   ├── frontbuttons-basic.php
│   ├── frontbuttons-subscr.php
│   ├── pagebuttons-basic.php
│   └── recentnews-basic.php
└── webpack.mix.js
```