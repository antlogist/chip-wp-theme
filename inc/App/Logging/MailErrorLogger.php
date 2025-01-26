<?php

namespace App\Logging;

/**
 * MailErrorLogger class handles logging of mail-related errors in WordPress.
 */
class MailErrorLogger implements LoggerInterface
{
    /**
     * Logs an error to the standard system log file.
     *
     * This method formats the error message and writes it to the default system log.
     *
     * @param object $error The error object containing the error details.
     *
     * @return void
     */
    public static function logToStandardFile($error)
    {
        if (is_object($error) && method_exists($error, 'get_error_message')) {
            $message = sprintf('[WP Mail Error]: %s', $error->get_error_message());
            error_log($message);
        }
    }

    /**
     * Logs an error to a custom file specified by the user.
     *
     * This method formats the error message and writes it to the specified file.
     *
     * @param object $error      The error object containing the error details.
     * @param string $filePath   The full path to the custom log file where the error should be written.
     *
     * @return void
     */
    public static function logToCustomFile($error, $filePath)
    {
        if (is_object($error) && method_exists($error, 'get_error_message')) {
            $message = sprintf('[WP Mail Error]: %s' . PHP_EOL, $error->get_error_message());
            error_log($message, 3, $filePath);
        }
    }
}
