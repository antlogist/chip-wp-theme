<?php
$current_page_id = get_the_ID();
$parent_ids = get_post_ancestors($current_page_id);
$parent_ids = array_reverse($parent_ids);
$parent_pages = [];
foreach ($parent_ids as $id) {
    $parent_page = get_post($id);
    $parent_pages[] = [
        'title' => $parent_page->post_title,
        'link' => get_permalink($id),
    ];

    if (count($parent_pages) > 0) {
?>

        <div class="recent-posts-wrapper mb-2">
            <div class="inner-wrapper">
                <b>Parent</b> pages
                <ul id="recentPosts" class="ul-recent-posts">
                    <?php
                    foreach ($parent_pages as $page) {
                        echo '<li class="li-recent-post"><a class="recent-post-title" href="' . $page['link'] . '">' . $page['title'] . '</a></li>';
                    }
                    ?>
                </ul>
            </div>
        </div>
<?php }
}
