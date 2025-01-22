# prefix_postmeta

| Field      | Type            | Null | Key | Default | Extra          |
|------------|-----------------|------|-----|---------|----------------|
| meta_id    | bigint unsigned | NO   | PRI | NULL    | auto_increment |
| post_id    | bigint unsigned | NO   | MUL | 0       |                |
| meta_key   | varchar(255)    | YES  | MUL | NULL    |                |
| meta_value | longtext        | YES  |     | NULL    |                |
