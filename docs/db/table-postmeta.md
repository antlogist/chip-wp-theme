# prefix_postmeta

| Field      | Type            | Null | Key | Default | Extra          |
|------------|-----------------|------|-----|---------|----------------|
| meta_id    | bigint unsigned | NO   | PRI | NULL    | auto_increment |
| post_id    | bigint unsigned | NO   | MUL | 0       |                |
| meta_key   | varchar(255)    | YES  | MUL | NULL    |                |
| meta_value | longtext        | YES  |     | NULL    |                |

### Table `wp_postmeta`

| Поле          | Тип данных    | Описание                  |
|---------------|---------------|---------------------------|
| `meta_id`     | BIGINT        | Уникальный идентификатор  |
| `post_id`     | BIGINT        | Идентификатор поста       |
| `meta_key`    | VARCHAR(255)  | Ключ метаданных           |
| `meta_value`  | LONGTEXT      | Значение метаданных       |