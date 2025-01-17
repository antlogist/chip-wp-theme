<?php

//Exit if accessed directly
if (! defined("ABSPATH")) {
    exit;
}
$today = date('Y-m-d H:i:s');

$upcoming_events = new WP_Query([
    'post_type' => 'event',
    'posts_per_page' => 2,
    'meta_key' => 'event_date',
    'orderby' => 'meta_value',
    'order' => 'ASC',
    'meta_query' => [
        [
            'key' => 'event_date',
            'compare' => '>',
            'value' => $today
        ]
    ]
]);
?>

<h2><a class="text-uppercase small" href="<?= get_post_type_archive_link('event') ?>">Upcoming events</h2></a>

<?php
if ($upcoming_events->have_posts()) :
    while ($upcoming_events->have_posts()) :
        $upcoming_events->the_post();
        $event_date_field_value = get_field('event_date');

        if ($event_date_field_value) {
            $event_date = new DateTime($event_date_field_value);
            $formatted_event_date = $event_date->format('j M Y H:i');
        }
?>
        <h3><a class="text-uppercase small" href="<?php the_permalink() ?>"><?php the_title(); ?></a></h3>
        <?php if ($event_date_field_value) : ?>
            <p class="small">The event will start on <?= $formatted_event_date ?></p>
        <?php endif; ?>

        <p><?php the_excerpt(); ?></p>
<?php
    endwhile;
else :
    echo '<p>No upcoming events.</p>';
endif;

wp_reset_postdata();
?>