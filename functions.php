<?php

//Exit if accessed directly
if ( ! defined ('ABSPATH') ) {
  exit;
}

/*===INCLUDES===*/
//Theme features
include( get_template_directory() . '/inc/setup.php' );

//Styles and scrpts
include( get_template_directory() . '/inc/enqueue.php' );

//Theme customizer
include( get_template_directory() . '/inc/customizer.php');

//REST menu
include( get_template_directory() . '/inc/REST/rest_menu.php');

/*===HOOKS===*/
//Theme features
add_action('after_setup_theme', 'chip_theme_support');

//Menu depth
add_action( 'admin_enqueue_scripts', 'menu_depth' );

//Add viewport
add_action( 'wp_head', 'add_viewport_meta_tag' , '1' );

//Styles and scrpts
add_action( 'wp_enqueue_scripts', 'chip_styles_and_scripts' );

//Theme customizer
add_action( 'customize_register', 'chip_customize_register' );

//Theme customizer script
add_action( 'customize_preview_init', 'chip_customizer_script' );

//REST menu
add_action( 'rest_api_init', 'chip_menu' );
