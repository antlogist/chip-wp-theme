<?php
if (! defined("ABSPATH")) {
    header("Location: /");
    exit;
}

get_header();
?>

<div class="container my-5">
    <div class="content-wrapper pt-3">
        <?php
        if (have_posts()) :
            while (have_posts()) : the_post(); ?>
                <h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>
                <p class="small">Posted by <b><?php the_author_posts_link() ?></b> on <?= get_the_date('d.m.y') ?> in <b><?= get_the_category_list(', ') ?></b></p>
                <p><?php the_excerpt(); ?></p>
        <?php
            endwhile;
        endif; ?>
    </div>

    <div class="content-wrapper mt-2 pt-3">
        <?= paginate_links() ?>
    </div>
</div>

<?php
get_footer();
