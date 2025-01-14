<?php

//Exit if accessed directly
if (! defined("ABSPATH")) {
    exit;
} ?>


<div class="recent-posts-wrapper">
    <div class="inner-wrapper">
        <b>Industry</b> updates
        <ul id="recentPosts" class="ul-recent-posts">
            <?php

            $recent_posts = new WP_Query([
                'category_name' => 'news',
                'posts_per_page' => 2
            ]);

            while ($recent_posts->have_posts()) {
                $recent_posts->the_post(); ?>

                <li class="li-recent-post">
                    <a href="<?php the_permalink() ?>" class="recent-post-title">
                        <?php the_title() ?> <b>Read more</b>
                    </a>
                </li>
            <?php }
            wp_reset_postdata(); ?>
        </ul>
    </div>
</div>