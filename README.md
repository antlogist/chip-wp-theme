# WordPress Theme

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

# Deployment

The YAML file is used to deploy a local WordPress development environment using Docker Compose. It defines three services: wordpress, db (MySQL), and phpmyadmin. The wordpress service uses the official WordPress image, exposes port 80, and mounts a local directory for the WordPress files. The db service uses MySQL version 8.4.3, exposes port 3306, and stores data in a mounted volume. The phpmyadmin service provides a web interface for managing MySQL databases on port 8080. All services are connected via a custom wordpress network.

[More about the website development environment.](docs/deployment/docker.md)

# Relations

To establish relationships between the `event` and `program` post types, the Advanced Custom Fields (ACF) plugin is utilized.

| Post type   | Type of relations | Related post type |
|-------------|-------------------|-------------------|
| Event       | hasMany           | Programs          |
| Program     | belongsTo         | Event             |

## Examples of implementing a relationship using the ACF plugin

This code retrieves related programs through ACF, loops over them, and outputs linked titles within a wrapper.

```php
<?php
$related_programs = get_field('related_programs');

if ($related_programs) { ?>
    <div class="post-wrapper">
        <h2>Related Program(s)</h2>
        <?php
        foreach ($related_programs as $related_program) {
            $permalink = get_the_permalink($related_program);
            $title = get_the_title($related_program);
            echo sprintf('<p><a href="%s">%s</a></p>', esc_url($permalink), esc_html($title));
        }
        ?>
    </div>
<?php
} ?>
```

This code fetches upcoming events associated with the current program ID, where the event date is after today.

```php
$today = date('Y-m-d H:i:s');

$upcoming_events = new WP_Query([
    'post_type' => 'event',
    'posts_per_page' => -1,
    'meta_key' => 'event_date',
    'orderby' => 'meta_value',
    'order' => 'ASC',
    'meta_query' => [
        [
            'key' => 'event_date',
            'compare' => '>',
            'value' => $today
        ],
        [
            'key' => 'related_programs',
            'compare' => 'LIKE',
            'value' => '"' . get_the_ID() . '"'
        ]
    ]
]);
```

[More about the ACF plugin.](docs/tools/acf.md)

# Website menu

To display menus, the REST API is utilized. The endpoints are as follows:

- Header menu: `/wp-json/menus/v1/menu`
- Footer menu: `/wp-json/menus/v1/footer`

In order for the menus to appear, you need to create menus named "header" and "footer" in the admin panel. 

[More about the website navigation.](docs/architecture/nav-rest.md)

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

# A direct method of accessing the file system, bypassing FTP.

You can manually change the WordPress configuration file to allow automatic updates without entering FTP data.
Open the file wp-config.php in the WordPress root directory. Add the following line:

```php
define('FS_METHOD', 'direct');
```
This will force WordPress to use a direct method of accessing the file system, bypassing FTP.

# Add dd-like helper function to WordPress theme
```php
if (!function_exists('dd')) {
  function dd(...$vars) {
      foreach ($vars as $var) {
          var_dump($var);
      }
      die(1);
  }
}
```

# Architecture

The theme follows a standard WordPress architecture with essential templates like `archive.php`, `single.php`, and `page.php`. It includes specific templates for events (`archive-event.php`, `single-event.php`) and programs (`archive-program.php`, `single-program.php`). The `inc` directory contains various classes, custom post types, and customization files. Additionally, there are folders for REST API integration, mailing functionality, and template parts for reusable components.

```bash
tree -I 'node_modules|images|resources|docs|dist|*.json|webpack*'

.
├── archive-event.php
├── archive.php
├── archive-program.php
├── footer.php
├── front-page.php
├── functions.php
├── header.php
├── inc
│   ├── Classes
│   │   ├── CSRFToken.php
│   │   └── Session.php
│   ├── cpt.php
│   ├── customizer.php
│   ├── enqueue.php
│   ├── mail
│   │   └── mail.php
│   ├── REST
│   │   └── rest_menu.php
│   └── setup.php
├── index.php
├── page-past-events.php
├── page.php
├── README.md
├── screenshot.png
├── single-event.php
├── single.php
├── single-program.php
├── style.css
└── template-parts
    ├── childpages-basic.php
    ├── events
    │   ├── event-list.php
    │   ├── event-of-program.php
    │   └── program-list.php
    ├── frontbuttons-basic.php
    ├── frontbuttons-subscr.php
    ├── pagebuttons-basic.php
    ├── parentpages-basic.php
    ├── recentnews-basic.php
    └── recentnews-query.php

```

[More about the project architecture.](docs/architecture/architecture.md)