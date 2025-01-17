<?php
if (! defined("ABSPATH")) {
    header("Location: /");
    exit;
}

get_header();
?>

<div class="container mt-2 mb-5">

    <div class="content-wrapper my-2 pt-3">
        <?php
        the_archive_title('<h1>', '</h1>');
        ?>
    </div>

    <div class="content-wrapper pt-3">
        <?php
        if (have_posts()) :
            while (have_posts()) : the_post();
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
        endif; ?>
    </div>

    <?php if (paginate_links()) { ?>
        <div class="content-wrapper mt-2 pt-3">
            <?= paginate_links() ?>
        </div>
    <?php } ?>
</div>

<?php
get_footer();
