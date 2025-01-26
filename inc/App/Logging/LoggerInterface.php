<?php

namespace App\Logging;

/**
 * Interface defining the contract for logger classes.
 *
 * Classes implementing this interface must provide methods for logging errors to both standard and custom files.
 */
interface LoggerInterface
{
    /**
     * Logs an error to the standard system log file.
     *
     * Implementations of this method should format the error message and write it to the default system log.
     *
     * @param object $error The error object containing the error details.
     *
     * @return void
     */
    public static function logToStandardFile($error);

    /**
     * Logs an error to a custom file specified by the user.
     *
     * Implementations of this method should format the error message and write it to the specified file.
     *
     * @param object $error      The error object containing the error details.
     * @param string $filePath   The full path to the custom log file where the error should be written.
     *
     * @return void
     */
    public static function logToCustomFile($error, $filePath);
}
