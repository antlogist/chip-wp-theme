# Roles

## Default roles:

- Administrator
- Editor
- Author
- Participant
- Subscriber
- Super User (only in multisite installations)

## Table wp_options

Roles and capabilities are stored in the **wp_options** table.

| Field        | Type            | Null | Key | Default | Extra          |
|--------------|-----------------|------|-----|---------|----------------|
| option_id    | bigint unsigned | NO   | PRI | NULL    | auto_increment |
| option_name  | varchar(191)    | NO   | UNI |         |                |
| option_value | longtext        | NO   |     | NULL    |                |
| autoload     | varchar(20)     | NO   | MUL | yes     |                |

```mysql
SELECT 
    option_id, 
    option_name, 
    LEFT(option_value, 50) AS option_value, 
    autoload 
FROM 
    wp_options 
WHERE 
    option_name LIKE '%role%';
```

| option_id | option_name   | option_value                                       | autoload |
|-----------|---------------|----------------------------------------------------|----------|
|        46 | default_role  | subscriber                                         | on       |
|       102 | wp_user_roles | a:5:{s:13:"administrator";a:2:{s:4:"name";s:13:"Ad | on       |

## current_user_can

```php
if (current_user_can('read_post') && ('read_event')) {
    ...
}
```

## capability_type

Leaving the `'capability_type'` value equal to `'post'` preserves standard management rules for `post` type records. 
This means that users with appropriate roles will be able to perform actions such as creating, editing, and deleting `program` type records just like they would with regular posts.

If you set the `'capability_type'` value to `'program'`, then unique management rules based on access rights to `program` record type will be applied. This allows more flexible configuration of access permissions for `program` type records, providing greater control over different types of records.

## map_meta_cap

When the property `map_meta_cap` is set to `true`, WordPress maps the capabilities required to manage metadata fields directly to those needed to manage the underlying post. In other words, if a user has permission to edit a post, they also gain the ability to modify its metadata. Conversely, if a user lacks the necessary capability to edit the post itself, they won't be able to change any of its metadata even if they theoretically have access to managing metadata separately.

By setting `'map_meta_cap'` to `true`, you ensure that managing metadata requires the same level of permissions as managing the actual post. This simplifies the process of controlling access to metadata, making sure that users can't manipulate data unless they have the proper authorization.

```php
// inc/cpt.php

$event_args = [
        ...
        'capability_type'     => 'event',
        'map_meta_cap'        => true
        ...
    ];
    register_post_type('event', $event_args);

    ...

    $program_args = [
        ...
        'capability_type'     => 'program',
        'map_meta_cap'        => true
        ...
    ];
    register_post_type('program', $program_args);

```

## Compare capabilities

```php
add_action( 'admin_menu', 'event_submenu', 11 );
function event_submenu() {
    add_submenu_page(
        'tools.php',
        esc_html__( 'Event CPT', 'wp_event' ),
        esc_html__( 'Event CPT', 'wp_event' ),
        'manage_options',
        'event_cpt',
        'render_event'
    );
}

function render_event() {
    <?php
    $event = $GLOBALS['wp_post_types']['event'];
    
    $role = get_role('administrator');
    $caps = $role->capabilities;
    $event_caps = array_filter($caps, function($key) {
        return strpos($key, 'event') !== false;
    }, ARRAY_FILTER_USE_KEY);
    
    ?>
    <div class="wrap" id="wp_learn_admin">
        <h1>Book</h1>
        <pre style="font-size: 22px; line-height: 1.2;"><?php print_r( array( 'capability_type' => $event->capability_type ) ) ?></pre>
        <pre style="font-size: 22px; line-height: 1.2;"><?php print_r( array( 'map_meta_cap' => $event->map_meta_cap ) ) ?></pre>
        <pre style="font-size: 22px; line-height: 1.2;"><?php print_r( array( 'admin_map_meta_cap' => $event_caps ) ) ?></pre>
        <pre style="font-size: 22px; line-height: 1.2;"><?php print_r( array( 'cap' => $event->cap ) ) ?></pre>
        <pre style="font-size: 22px; line-height: 1.2;"><?php print_r( $event ) ?></pre>
    </div>
}
```
### Result
```
Array
(
    [cap] => stdClass Object
        (
            [edit_post] => edit_event
            [read_post] => read_event
            [delete_post] => delete_event
            [edit_posts] => edit_events
            [edit_others_posts] => edit_others_events
            [delete_posts] => delete_events
            [publish_posts] => publish_events
            [read_private_posts] => read_private_events
            [read] => read
            [delete_private_posts] => delete_private_events
            [delete_published_posts] => delete_published_events
            [delete_others_posts] => delete_others_events
            [edit_private_posts] => edit_private_events
            [edit_published_posts] => edit_published_events
            [create_posts] => edit_events
        )

)
Array
(
    [admin_map_meta_cap] => Array
        (
            [edit_events] => 1
            [edit_others_events] => 1
            [publish_events] => 1
            [read_events] => 1
            [read_private_events] => 1
            [delete_events] => 1
            [edit_event] => 1
            [read_event] => 1
            [delete_event] => 1
        )

)
```
