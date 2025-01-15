<?php

//Exit if accessed directly
if (! defined("ABSPATH")) {
    exit;
}
$upcoming_events = new WP_Query([
    'post_type' => 'event',
    'posts_per_page' => -1,
    'orderby' => 'date',
    'order' => 'DESC',
]);
?>

<h2><a href="/event">Upcoming events</h2></a>

<?php
if ($upcoming_events->have_posts()) {
    while ($upcoming_events->have_posts()) {
        $upcoming_events->the_post();
?>
        <h3><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h3>
        <p><?php the_excerpt(); ?></p>
<?php
    }
} else {
    echo '<p>No events</p>';
}

wp_reset_postdata();
?>