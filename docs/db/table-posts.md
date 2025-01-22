# prefix_posts

| Field                 | Type            | Null | Key | Default             | Extra          |
|-----------------------|-----------------|------|-----|---------------------|----------------|
| ID                    | bigint unsigned | NO   | PRI | NULL                | auto_increment |
| post_author           | bigint unsigned | NO   | MUL | 0                   |                |
| post_date             | datetime        | NO   |     | 0000-00-00 00:00:00 |                |
| post_date_gmt         | datetime        | NO   |     | 0000-00-00 00:00:00 |                |
| post_content          | longtext        | NO   |     | NULL                |                |
| post_title            | text            | NO   |     | NULL                |                |
| post_excerpt          | text            | NO   |     | NULL                |                |
| post_status           | varchar(20)     | NO   |     | publish             |                |
| comment_status        | varchar(20)     | NO   |     | open                |                |
| ping_status           | varchar(20)     | NO   |     | open                |                |
| post_password         | varchar(255)    | NO   |     |                     |                |
| post_name             | varchar(200)    | NO   | MUL |                     |                |
| to_ping               | text            | NO   |     | NULL                |                |
| pinged                | text            | NO   |     | NULL                |                |
| post_modified         | datetime        | NO   |     | 0000-00-00 00:00:00 |                |
| post_modified_gmt     | datetime        | NO   |     | 0000-00-00 00:00:00 |                |
| post_content_filtered | longtext        | NO   |     | NULL                |                |
| post_parent           | bigint unsigned | NO   | MUL | 0                   |                |
| guid                  | varchar(255)    | NO   |     |                     |                |
| menu_order            | int             | NO   |     | 0                   |                |
| post_type             | varchar(20)     | NO   | MUL | post                |                |
| post_mime_type        | varchar(100)    | NO   |     |                     |                |
| comment_count         | bigint          | NO   |     | 0                   |                |


# MySQL queries 

```mysql
/* 
The query selects all records from the `wp_posts` table where the post type (`post_type`) is equal to `'event'`.
Запрос выбирает все записи из таблицы `wp_posts`, у которых тип поста (`post_type`) равен `'event'`.
*/

SELECT * FROM `wp_posts` WHERE post_type = 'event';
```

---

```
/*
This query selects all records from the `wp_posts` table where the post type (`post_type`) is either `'event'` or `'program'`.
Данный запрос выбирает все записи из таблицы `wp_posts`, у которых тип поста (`post_type`) равен `'event'` или `'program'`.
*/

SELECT * FROM `wp_posts` WHERE post_type IN ('event', 'program');
```
