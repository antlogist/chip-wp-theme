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