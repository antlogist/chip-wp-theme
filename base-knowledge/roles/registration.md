# Registration

Disabling registration restrictions:
By default, WordPress prohibits self-registration of users. To allow users to register on their own, log into the WordPress Admin console and go to **Settings > General**. Find the Membership option and check the box next to Anyone can register.

## Redirection to the home page

This function redirects a user to the home page after logging in, but only if the user's role is "Subscriber".

```php
add_action('admin_init', 'redirect_to_home_after_login');

function redirect_to_home_after_login()
{
  $user = wp_get_current_user();
  if (is_user_logged_in() && $user->roles[0] === 'subscriber') {
    wp_redirect('/');
    exit;
  }
}
```

## Hide the admin bar

This function hides the admin bar for users with the "Subscriber" role when they are logged in.

```php
add_action('wp_loaded', 'hide_admin_bar');

function hide_admin_bar()
{
  $user = wp_get_current_user();
  if (is_user_logged_in() && $user->roles[0] === 'subscriber') {
    show_admin_bar(false);
  }
}
```

## Modify the URL in the login form's header

This function modifies the URL in the login form's header so that it points to the site's homepage instead of the default WordPress login page.

```php
add_filter('login_headerurl', 'login_header_url');

function login_header_url()
{
  return esc_url(site_url('/'));
}
```

## Replace the default login logo

This code adds a custom action to the login_head hook in WordPress. It defines a function called change_login_logo, which inserts CSS styles that replace the default login logo with a custom image (logo.png) located in the theme's /images/ directory.

```php
add_action( 'login_head', 'change_login_logo' );

function change_login_logo()
{
  echo '<style>
	#login h1 a{
		background-image : url(' . get_stylesheet_directory_uri() . '/images/logo.png);
	}
	</style>';
}
```