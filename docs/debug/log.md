# Debugging variables


```php
// wp-config.php

define( 'WP_DEBUG', !!getenv_docker('WORDPRESS_DEBUG', '') );
define( 'WP_DEBUG_DISPLAY', !!getenv_docker('WORDPRESS_DEBUG_DISPLAY', false) );
define( 'WP_DEBUG_LOG', !!getenv_docker('WORDPRESS_DEBUG_LOG', true) );
```

```yml
# docker-compose.yml

    environment:
      WORDPRESS_DEBUG: 1
      WORDPRESS_DEBUG_DISPLAY: 1
      WORDPRESS_DEBUG_LOG: 1
```

This code sets up debugging variables in WordPress:

1. `WP_DEBUG` – enables debug mode.
2. `WP_DEBUG_DISPLAY` – controls whether errors are displayed.
3. `WP_DEBUG_LOG` – logs debug messages.

These settings allow developers to control how much information is shown when debugging issues.

Inside the **wp-content** folder, you will find a file called debug.log.

---

Этот код устанавливает переменные для отладки в WordPress:

1. `WP_DEBUG` – активирует режим отладки.
2. `WP_DEBUG_DISPLAY` – управляет отображением ошибок.
3. `WP_DEBUG_LOG` – ведет журнал отладочных сообщений.

Эти настройки дают разработчикам возможность контролировать объем выводимой информации при устранении проблем.

