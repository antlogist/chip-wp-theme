<?php

//Exit if accessed directly
if ( ! defined ("ABSPATH") ) {
  exit;
} ?>

<div class="container" id="frontCards">
  <div class="row g-0">
    <div class="col-4">
      <a id="aboutLink" href="<?php if (!get_theme_mod('about_id')) { echo "./"; } else { echo esc_url( get_permalink(get_theme_mod('about_id')) ); } ?>">
        <span class="title">
          <span class="title-wrapper title-about-wrapper">
            About us
          </span>
        </span>
      </a>
    </div>
    <div class="col-4">
      <a id="productsLink" href="<?php if (!get_theme_mod('products_id')) { echo "./"; } else { echo esc_url( get_permalink(get_theme_mod('products_id')) ); } ?>">
        <span class="title">
          <span class="title-wrapper title-products-wrapper">
            Our Products
          </span>
        </span>
      </a>
    </div>
    <div class="col-4">
      <a id="contactLink" href="<?php if (!get_theme_mod('contact_id')) { echo "./"; } else { echo esc_url( get_permalink(get_theme_mod('contact_id')) ); } ?>">
        <span class="title">
          <span class="title-wrapper title-contact-wrapper">
            Contact Us
          </span>
        </span>
      </a>
    </div>
  </div>
</div>
