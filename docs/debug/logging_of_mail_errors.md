# Logging of mail sending errors

```php
class MailErrorLogger
{

    /**
     * Logging an error to a standard file
     *
     * @param object $error The error object
     */
    public static function logToStandardFile($error)
    {
        if (is_object($error) && method_exists($error, 'get_error_message')) {
            $message = sprintf('[WP Mail Error]: %s', $error->get_error_message());
            error_log($message);
        }
    }

    /**
     * Logging an error to a custom file
     *
     * @param object $error The error objec
     * @param string $filePath The path to the logging file
     */
    public static function logToCustomFile($error, $filePath)
    {
        if (is_object($error) && method_exists($error, 'get_error_message')) {
            $message = sprintf('[WP Mail Error]: %s' . PHP_EOL, $error->get_error_message());
            error_log($message, 3, $filePath);
        }
    }
}

// Using a class for logging to a standard file
add_action('wp_mail_failed', function ($error) {
    MailErrorLogger::logToStandardFile($error);
});

// Using a class to log into a custom file
add_action('wp_mail_failed', function ($error) {
    $customLogFilePath = __DIR__ . '/mail-error.log'; // Specify the desired path
    MailErrorLogger::logToCustomFile($error, $customLogFilePath);
});

```