# Logging of mail sending errors

This function handles failed emails by logging the error message to the error log upon failure.

```php
add_action('wp_mail_failed', function ($error) {
  error_log($error->get_error_message());
});
```