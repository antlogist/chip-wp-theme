# Autoloader

This code defines an autoloader function named `my_autoloader`, which is used to automatically load classes in a WordPress theme. Here’s how it works step-by-step:

1. The `$class_name` parameter represents the fully qualified class name passed by PHP when attempting to autoload a class that hasn't been loaded yet.
2. The `str_replace` function replaces any backslashes (`\\`) with the appropriate directory separator for the current operating system (`DIRECTORY_SEPARATOR`), ensuring cross-platform compatibility.
3. The `$file_path` variable constructs the full path to the file containing the class definition. It uses the `get_template_directory()` function to retrieve the template directory path and appends the class path along with the `.php` extension.
4. If the file exists at the constructed path, it is included using `include_once`.
5. Finally, the `spl_autoload_register` function registers the `my_autoloader` function as an autoloader, so it will be called whenever PHP needs to load a class that has not already been defined.

This approach simplifies the process of loading classes within your WordPress theme, making it easier to manage and organize your codebase.

---

```php
// functions.php

function my_autoloader($class_name)
{
  $path = str_replace('\\', DIRECTORY_SEPARATOR, $class_name);
  $file_path = get_template_directory() . "/inc/$path.php";

  if (file_exists($file_path)) {
    include_once $file_path;
  }
}
spl_autoload_register('my_autoloader');
```