# wp_postmeta

The wp_postmeta table in WordPress is designed to store the metadata of posts (posts, pages, custom record types, etc.). Metadata is additional data that can be associated with any record in the system. Here are the main fields of this table:

1. **`meta_id`**: A unique metadata identifier.
2. **`post_id`**: The ID of the record to which the metadata belongs.
3. **`meta_key`**: A keyword or metadata name. It describes the type of data that is stored in this field.
4. **`meta_value`**: The metadata value itself. It can contain any information, such as text strings, numbers, JSON data, and even serialized objects.
Examples of using metadata include storing additional details about the record, such as the date of creation, the author's comment, information about the price of the product (in the case of an online store), and more.

---

Таблица `wp_postmeta` в WordPress предназначена для хранения метаданных записей (постов, страниц, пользовательских типов записей и т.д.). Метаданные представляют собой дополнительные данные, которые могут быть связаны с любой записью в системе. Вот основные поля этой таблицы:

1. **`meta_id`**: Уникальный идентификатор метаданных.
2. **`post_id`**: Идентификатор записи, к которой относятся метаданные.
3. **`meta_key`**: Ключевое слово или имя метаданных. Оно описывает тип данных, которые хранятся в этом поле.
4. **`meta_value`**: Само значение метаданных. Может содержать любую информацию, такую как текстовые строки, числа, JSON-данные и даже сериализованные объекты.

Примеры использования метаданных включают хранение дополнительных деталей о записи, таких как дата создания, авторский комментарий, информация о цене товара (в случае интернет-магазина) и многое другое.

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

# wp_postmeta example

| meta_id | post_id | meta_key          | meta_value          |
|---------|---------|-------------------|---------------------|
|     134 |      50 | _edit_lock        | 1737108600:1        |
|     142 |      50 | footnotes         |                     |
|     146 |      50 | _edit_last        | 1                   |
|     147 |      50 | event_date        | 2025-01-27 15:00:00 |
|     148 |      50 | _event_date       | field_6787a20c38e63 |
|     265 |      50 | related_programs  | a:1:{i:0;s:2:"82";} |
|     266 |      50 | _related_programs | field_6789f9b0d346c |
