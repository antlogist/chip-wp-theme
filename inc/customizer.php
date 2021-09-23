<?php 

//Exit if accessed directly
if ( ! defined ('ABSPATH') ) {
  exit;
}

function chip_customize_register( $wp_customize ) {
  
  //HEADER
  
  $wp_customize->add_panel('chip_customize_panel',array(
      'title'=>'Theme Settings',
      'description'=> 'Theme Settings',
      'priority'=> 10,
  ));
  
  //Header section
  $wp_customize->add_section('header_section',array(
      'title'=>'Header & Slider',
      'priority'=>10,
      'panel'=>'chip_customize_panel',
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
      'section'=>'header_section',
      'settings'=>'phone',
  ));
  
  //Slide one setting
  $wp_customize ->add_setting('slide_one', array(
      'default' => '',
      'transport' => 'postMessage'
  ));
  
  //Slide one control
  $wp_customize ->add_control(new WP_Customize_Image_Control($wp_customize,'slide_one_control', array(
      'label'=>'Slide 1',
      'mime_type' => 'image',
      'section'=>'header_section',
      'settings' => 'slide_one', 
  ) )); 
  
  //Slide two setting
  $wp_customize ->add_setting('slide_two', array(
      'default' => '',
      'transport' => 'postMessage'
  ));
  
  //Slide two control
  $wp_customize ->add_control(new WP_Customize_Image_Control($wp_customize,'slide_two_control', array(
      'label'=>'Slide 2',
      'mime_type' => 'image',
      'section'=>'header_section',
      'settings' => 'slide_two', 
  ) ));
  
  //Slide three setting
  $wp_customize ->add_setting('slide_three', array(
      'default' => '',
      'transport' => 'postMessage'
  ));
  
  //Slide three control
  $wp_customize ->add_control(new WP_Customize_Image_Control($wp_customize,'slide_three_control', array(
      'label'=>'Slide 3',
      'mime_type' => 'image',
      'section'=>'header_section',
      'settings' => 'slide_three', 
  ) )); 
  
  //FRONT-PAGE
  
  //Front-page section
  $wp_customize->add_section('front_page_section',array(
      'title'=>'Front Page',
      'priority'=>10,
      'panel'=>'chip_customize_panel',
  ));
  
  //About img setting
  $wp_customize ->add_setting('about_img', array(
      'default' => '',
      'transport' => 'postMessage'
  ));
  
  //About img control
  $wp_customize ->add_control(new WP_Customize_Image_Control($wp_customize,'about_img_control', array(
      'label'=>'About Us Image',
      'mime_type' => 'image',
      'section'=>'front_page_section',
      'settings' => 'about_img', 
  ) ));
  
  //Products img setting
  $wp_customize ->add_setting('products_img', array(
      'default' => '',
      'transport' => 'postMessage'
  ));
  
  //Products img control
  $wp_customize ->add_control(new WP_Customize_Image_Control($wp_customize,'products_img_control', array(
      'label'=>'Products Image',
      'mime_type' => 'image',
      'section'=>'front_page_section',
      'settings' => 'products_img', 
  ) )); 
  
  //Contact img setting
  $wp_customize ->add_setting('contact_img', array(
      'default' => '',
      'transport' => 'postMessage'
  ));
  
  //Contact img control
  $wp_customize ->add_control(new WP_Customize_Image_Control($wp_customize,'contact_img_control', array(
      'label'=>'Contact Image',
      'mime_type' => 'image',
      'section'=>'front_page_section',
      'settings' => 'contact_img', 
  ) ));
  
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

