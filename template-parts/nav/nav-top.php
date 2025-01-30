<nav class="navbar navbar--light">
    <div class="container">
        <div class="navbar__wrapper navbar__wrapper--flex-between">

            <div class="navbar__logo-col">
                <a href="<?= esc_url(get_home_url()); ?>" class="navbar__logo-link">
                    <img class="navbar__logo navbar__logo--circle" src="<?= get_theme_file_uri(); ?>/images/logo.jpg" alt="logo">
                </a>
            </div>

            <div class="navbar__actions-col">
                <?php if (is_user_logged_in()) { ?>

                    <!-- profile link -->
                    <a href="<?= admin_url() ?>" class="navbar__avatar-link">
                        <?= get_avatar(get_current_user_id(), '', '', 'profile', ['class' => ['navbar__avatar navbar__avatar--circle']]) ?>
                    </a>
                    <!-- / profile link -->

                    <!-- logout link -->
                    <a href="<?= wp_logout_url('/'); ?>"  class="navbar__logout-link" title="logout">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                        </svg>
                    </a>
                    <!-- / logout link -->

                <?php } else { ?>

                    <!-- login link -->
                    <a class="navbar__login-link" href="<?= wp_login_url(); ?>" title="login">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                            <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                        </svg>
                    </a>
                    <!-- / login link -->
                <?php } ?>
            </div>

        </div>
    </div>
</nav>