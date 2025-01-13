<?php

//Exit if accessed directly
if ( ! defined ("ABSPATH") ) {
  exit;
} ?>


<div class="recent-posts-wrapper">
  <div class="inner-wrapper">
    <b>Child</b> pages
    <ul id="recentPosts" class="ul-recent-posts">
      <?php
        $parent_id = get_the_ID();

        $args = array(
          'sort_order' => 'ASC',
          'sort_column' => 'menu_order',
          'hierarchical' => 0,
          'parent' => $parent_id,
        );
        $child_pages = get_pages($args);

        foreach ($child_pages as $page) {
          echo '<li class="li-recent-post"><a class="recent-post-title" href="' . get_permalink($page->ID) . '">' . $page->post_title . '</a></li>';
        } ?> 
    </ul>
  </div>
</div>
