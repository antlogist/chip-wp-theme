<?php

//Exit if accessed directly
if (! defined('ABSPATH')) {
  exit;
}
get_header();

get_template_part('template-parts/pagebuttons', 'basic');

?>
<!--Content-->
<div class="container">
  <div class="content-wrapper">
    <div class="row g-0">
      <div class="col-md-9">
        <div class="post-wrapper">
          <?php
          if (have_posts()) :
            while (have_posts()) : the_post(); ?>
              <h2><?php the_title(); ?></h2>
              <p class="small">Posted by <b><?php the_author_posts_link() ?></b> on <?= get_the_date('d.m.y') ?> in <b><?= get_the_category_list(', ') ?></b></p>
              <p><?php the_content(); ?></p>
          <?php
            endwhile;
          endif; ?>
        </div>
      </div>
      <!--Recent posts-->
      <div class="col-md-3">
        <?php get_template_part('template-parts/recentnews', 'basic'); ?>
      </div>
    </div>
  </div>
</div>
<!--/Content-->

<?php get_footer(); ?>