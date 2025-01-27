# Deployment

This YAML file is used to deploy a local WordPress development environment using Docker Compose. It defines three services: wordpress, db (MySQL), and phpmyadmin. The wordpress service uses the official WordPress image, exposes port 80, and mounts a local directory for the WordPress files. The db service uses MySQL version 8.4.3, exposes port 3306, and stores data in a mounted volume. The phpmyadmin service provides a web interface for managing MySQL databases on port 8080. All services are connected via a custom wordpress network.

```yml
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
    volumes:
      - ./wordpress:/var/www/html
    networks:
      - wordpress

  db:
    image: mysql:8.4.3
    restart: always
    ports:
      - 3306:3306
    environment:
      MYSQL_DATABASE: wordpress
      MYSQL_USER: user
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
      MYSQL_RANDOM_ROOT_PASSWORD: '1'
    volumes:
      - ./db:/var/lib/mysql
    networks:
      - wordpress

  phpmyadmin:
    image: phpmyadmin:5.2.1
    restart: always
    ports:
      - 8080:80
    environment:
      - PMA_ARBITRARY=1
    networks:
      - wordpress

  mailpit:
    image: 'axllent/mailpit:latest'
    ports:
        - '${FORWARD_MAILPIT_PORT:-1025}:1025'
        - '${FORWARD_MAILPIT_DASHBOARD_PORT:-8025}:8025'
    networks:
        - wordpress

networks:
  wordpress:
      driver: bridge
```