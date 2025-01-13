<?php

//Exit if accessed directly
if (! defined("ABSPATH")) {
  exit;
}
$current_page_id = get_the_ID();

$args = array(
  'sort_order' => 'ASC',
  'sort_column' => 'menu_order',
  'hierarchical' => 0,
  'parent' => $current_page_id,
);
$child_pages = get_pages($args);

if (count($child_pages) > 0) {

?>


  <div class="recent-posts-wrapper mb-2">
    <div class="inner-wrapper">
      <b>Child</b> pages
      <ul id="recentPosts" class="ul-recent-posts">
        <?php

        foreach ($child_pages as $page) {
          echo '<li class="li-recent-post"><a class="recent-post-title" href="' . get_permalink($page->ID) . '">' . $page->post_title . '</a></li>';
        } ?>
      </ul>
    </div>
  </div>

<?php }
