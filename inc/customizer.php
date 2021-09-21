<?php 

//Exit if accessed directly
if ( ! defined ('ABSPATH') ) {
  exit;
}

function overlap_customize_register( $wp_customize ) {
  
  $wp_customize->add_panel('overlap_customize_panel',array(
      'title'=>'Theme Settings',
      'description'=> 'Theme Settings',
      'priority'=> 10,
  ));

  //Front-page section
  $wp_customize->add_section('front_page_section',array(
      'title'=>'Front Page',
      'priority'=>10,
      'panel'=>'overlap_customize_panel',
  ));

  //Front-page tagline setting
  $wp_customize->add_setting('front_page_tagline',array(
      'default'=>'Lorem Ipsum<br>Dolor Sit Amet',
      'sanitize_callback' => 'wp_kses_post',
      'transport' => 'postMessage'
  ));

  //Front-page tagline control
  $wp_customize->add_control('front_page_tagline_control',array(
      'label'=>'Front Page Tagline',
      'type'=>'textarea',
      'section'=>'front_page_section',
      'settings'=>'front_page_tagline',
  ));
  
  //Phone setting
  $wp_customize->add_setting('phone',array(
      'default'=>'1234 5678',
      'sanitize_callback' => 'sanitize_text_field',
      'transport' => 'postMessage'
  ));

  //Phone control
  $wp_customize->add_control('phone_control',array(
      'label'=>'Phone Number',
      'type'=>'text',
      'section'=>'front_page_section',
      'settings'=>'phone',
  ));
  
  //Address setting
  $wp_customize->add_setting('address',array(
      'default'=>'251 Beibitshilik Street, New Chum QLD 1234',
      'sanitize_callback' => 'wp_kses_post',
      'transport' => 'postMessage'
  ));

  //Address control
  $wp_customize->add_control('address_control',array(
      'label'=>'Address',
      'type'=>'textarea',
      'section'=>'front_page_section',
      'settings'=>'address',
  ));
  
  //Postal address setting
  $wp_customize->add_setting('postal_address',array(
      'default'=>'251 Beibitshilik Street, New Chum QLD 1234',
      'sanitize_callback' => 'wp_kses_post',
      'transport' => 'postMessage'
  ));

  //Postal address control
  $wp_customize->add_control('postal_address_control',array(
      'label'=>'Postal Address',
      'type'=>'textarea',
      'section'=>'front_page_section',
      'settings'=>'postal_address',
  ));
  
  //About link setting
  $wp_customize->add_setting('about_page_id',array(
      'default'=>'',
      'sanitize_callback' => 'sanitize_text_field',
      'transport' => 'postMessage'
  ));

  //About link control
  $wp_customize->add_control('about_page_id_control',array(
      'label'=>'About Page',
      'type'=>'dropdown-pages',
      'section'=>'front_page_section',
      'settings'=>'about_page_id',
  ));
  
  //Products link setting
  $wp_customize->add_setting('products_page_id',array(
      'default'=>'',
      'sanitize_callback' => 'sanitize_text_field',
      'transport' => 'postMessage'
  ));

  //Products link control
  $wp_customize->add_control('products_page_id_control',array(
      'label'=>'Products Page',
      'type'=>'dropdown-pages',
      'section'=>'front_page_section',
      'settings'=>'products_page_id',
  ));
}

