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
        the_archive_title('<h4>', '</h4>');
        ?>
    </div>

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

    <?php if (paginate_links()) { ?>
        <div class="content-wrapper mt-2 pt-3">
            <?= paginate_links() ?>
        </div>
    <?php } ?>
</div>

<?php
get_footer();
