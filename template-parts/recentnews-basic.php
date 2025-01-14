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
      $recent_posts = wp_get_recent_posts([
        'numberposts' => 4,
        'post_status' => 'publish'
      ]);
      foreach ($recent_posts as $post_item) : ?>
        <li class="li-recent-post">
          <a href="<?php echo get_permalink($post_item['ID']) ?>" class="recent-post-title">
            <?php echo $post_item['post_title'] ?> <b>Read more</b>
          </a>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
</div>