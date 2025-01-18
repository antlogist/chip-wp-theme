Advanced Custom Fields (ACF) is a powerful plugin for WordPress that allows you to create custom fields and customize their display for different post types. With ACF, you can easily establish connections between various content types, creating complex interrelated data structures, which significantly enhances the possibilities of managing content on your website.

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