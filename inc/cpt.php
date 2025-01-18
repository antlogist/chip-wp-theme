<?php

//Exit if accessed directly
if (! defined("ABSPATH")) {
    exit;
}

function chip_theme_post_types()
{
    // Event post type
    $event_labels = [
        'name'               => _x('Events', 'Post Type General Name', 'chip-wp-theme'),
        'singular_name'      => _x('Event', 'Post Type Singular Name', 'chip-wp-theme'),
        'menu_name'          => __('Events', 'chip-wp-theme'),
        'parent_item_colon'  => __('Parent Event:', 'chip-wp-theme'),
        'all_items'          => __('All Events', 'chip-wp-theme'),
        'view_item'          => __('View Event', 'chip-wp-theme'),
        'add_new_item'       => __('Add New Event', 'chip-wp-theme'),
        'add_new'            => __('Add New', 'chip-wp-theme'),
        'edit_item'          => __('Edit Event', 'chip-wp-theme'),
        'update_item'        => __('Update Event', 'chip-wp-theme'),
        'search_items'       => __('Search Events', 'chip-wp-theme'),
        'not_found'          => __('Not found', 'chip-wp-theme'),
        'not_found_in_trash' => __('Not found in Trash', 'chip-wp-theme'),
    ];
    $event_args = [
        'label'               => __('event', 'chip-wp-theme'),
        'description'         => __('Event news and reviews', 'chip-wp-theme'),
        'rewrite'             => ['slug' => 'events'],
        'labels'              => $event_labels,
        'supports'            => ['title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields',],
        'taxonomies'          => ['category', 'post_tag'],
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'menu_position'       => 5,
        'show_in_admin_bar'   => true,
        'show_in_nav_menus'   => true,
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'event',
        'map_meta_cap'        => true,
        'show_in_rest'        => true, // Guttenberg
    ];
    register_post_type('event', $event_args);

    // Program post type
    $program_labels = [
        'name'               => _x('Programs', 'Post Type General Name', 'chip-wp-theme'),
        'singular_name'      => _x('Program', 'Post Type Singular Name', 'chip-wp-theme'),
        'menu_name'          => __('Programs', 'chip-wp-theme'),
        'parent_item_colon'  => __('Parent Program:', 'chip-wp-theme'),
        'all_items'          => __('All Programs', 'chip-wp-theme'),
        'view_item'          => __('View Program', 'chip-wp-theme'),
        'add_new_item'       => __('Add New Program', 'chip-wp-theme'),
        'add_new'            => __('Add New', 'chip-wp-theme'),
        'edit_item'          => __('Edit Program', 'chip-wp-theme'),
        'update_item'        => __('Update Program', 'chip-wp-theme'),
        'search_items'       => __('Search Programs', 'chip-wp-theme'),
        'not_found'          => __('Not found', 'chip-wp-theme'),
        'not_found_in_trash' => __('Not found in Trash', 'chip-wp-theme'),
    ];
    $program_args = [
        'label'               => __('program', 'chip-wp-theme'),
        'description'         => __('Program news and reviews', 'chip-wp-theme'),
        'rewrite'             => ['slug' => 'programs'],
        'labels'              => $program_labels,
        'supports'            => ['title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields',],
        'taxonomies'          => ['category', 'post_tag'],
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'menu_position'       => 5,
        'show_in_admin_bar'   => true,
        'show_in_nav_menus'   => true,
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'program',
        'map_meta_cap'        => true,
        'show_in_rest'        => true, // Guttenberg
    ];
    register_post_type('program', $program_args);
}
