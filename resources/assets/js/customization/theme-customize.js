(function ($) {
  wp.customize('front_page_tagline', function (value) {
    value.bind(function (newval) {
      $('#tagline').html(newval);
    });
  });
  
  wp.customize('phone', function (value) {
    value.bind(function (newval) {
      $('#phone').html(newval);
    });
  });
  
  wp.customize('address', function (value) {
    value.bind(function (newval) {
      $('#address').html(newval);
    });
  });
  
  wp.customize('postal_address', function (value) {
    value.bind(function (newval) {
      $('#postalAddress').html(newval);
    });
  });
  
  wp.customize('about_page_id', function (value) {
    value.bind(function (newval) {
      $('#openModalAbout').data('page_id', newval);
    });
  });
  
  wp.customize('products_page_id', function (value) {
    value.bind(function (newval) {
      $('#openModalProducts').data('page_id', newval);
    });
  });
})(jQuery);
