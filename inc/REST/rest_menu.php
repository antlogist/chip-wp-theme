<?php

// Exit if accessed directly
if ( ! defined ('ABSPATH') ) {
    exit;
} 

function overlap_menu() {
  register_rest_route( 'menus/v1', 'menu', array(
    'methods' => WP_REST_SERVER:: READABLE,
    'callback' => 'get_menu',
  ) );
}

function get_menu() {
  return wp_get_nav_menu_items('main');
}
