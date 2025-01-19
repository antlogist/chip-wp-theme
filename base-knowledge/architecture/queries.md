# Queries modification

The code modifies queries for two post types on the front-end: sorting programs by title in ascending order and showing all posts, while events are sorted by future dates in ascending order.

```php
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
```
