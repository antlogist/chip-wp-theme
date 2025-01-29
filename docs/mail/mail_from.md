# Setting and replacing the default email address

```yml
# docker-compose.yml

wordpress:
    image: wordpress
    restart: always
    ports:
      - 80:80
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: admin
      WORDPRESS_DB_PASSWORD: ${WORDPRESS_DB_PASSWORD}
      WORDPRESS_DB_NAME: wordpress
      WORDPRESS_DEBUG: 1
      WORDPRESS_DEBUG_DISPLAY: 1
      WORDPRESS_DEBUG_LOG: 1
      WORDPRESS_MAIL_FROM: test@test.test
```


```php
// functions.php

add_filter('wp_mail_from', function ($email) {
  return WP_MAIL_FROM;
});
```

```php
// wp-config.php

define('WP_MAIL_FROM', getenv_docker('WORDPRESS_MAIL_FROM', 'test@test.test'));
```