<?php

//Exit if accessed directly
if (! defined('ABSPATH')) {
    exit;
}
get_header();
?>

<!-- Breadcrumbs -->
<div class="container">
    <div class="content-wrapper pt-3">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?= get_post_type_archive_link('event') ?>">Events</a></li>
                <li class="breadcrumb-item active" aria-current="page"><?php the_title() ?></li>
            </ol>
        </nav>
    </div>
</div>
<!-- / Breadcrumbs -->

<!--Content-->
<div class="container">
    <div class="content-wrapper">
        <div class="row g-0">
            <div class="col-md-12">
                <div class="post-wrapper">
                    <?php
                    if (have_posts()) :
                        while (have_posts()) : the_post();
                            $event_date_field_value = get_field('event_date');
                            if ($event_date_field_value) {
                                $event_date = new DateTime($event_date_field_value);
                                $formatted_event_date = $event_date->format('j M Y H:i');
                            } ?>

                            <h2><?php the_title(); ?></h2>

                            <?php if ($event_date_field_value) { ?>
                                <p class="small">The event will start on <?= $formatted_event_date ?></p>
                            <?php }
                            ?>

                            <p><?php the_content(); ?></p>
                    <?php
                        endwhile;
                    endif; ?>
                </div>
            </div>
        </div>
    </div>
</div>
<!--/Content-->

<?php get_footer(); ?>