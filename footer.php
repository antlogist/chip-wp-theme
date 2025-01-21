<?php
if (! defined("ABSPATH")) {
  header("Location: /");
  exit;
} ?>

<footer>

  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <div class="footer-inner-wrapper">
          <a class="d-flex align-items-center" id="phoneHref" href="tel:<?= esc_html(get_theme_mod('phone')); ?>">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>
            <span class="ps-1 fs-7" id="phone"><?= esc_html(!get_theme_mod('phone') ? "+0 000 000 00 00" : get_theme_mod('phone')); ?></span>
          </a>
          <p>
            &copy; Chiptyre
          </p>
        </div>
      </div>
      <div class="col-sm-6 ">
        <div class="footer-inner-wrapper">
          <p id="footerMenu" class="text-sm-end"></p>
        </div>
      </div>
    </div>
  </div>

</footer>

<?php
wp_footer();
?>
</body>

</html>