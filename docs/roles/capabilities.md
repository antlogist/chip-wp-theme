# Capabilities

```
// Meta capabilities
edit_post
read_post
delete_post

// Primitive capabilities used outside of map_meta_cap():
edit_posts
edit_others_posts
delete_posts
publish_posts
read_private_posts

// Primitive capabilities used within map_meta_cap()
read
delete_private_posts
delete_published_posts
delete_others_posts
edit_private_posts'
edit_published_posts

// Post creation capability simply maps to edit_posts by default:
create_posts
```
The main types of capabilities in WordPress that are used to control user access to various actions on objects (posts, pages, comments, etc.). These opportunities fall into two categories:

Meta Capabilities are capabilities that are dynamically calculated based on primitive capabilities and applied to specific objects. For example, edit_post is applied to one post, and read_post is applied to reading one post.
Primitive Capabilities are basic capabilities that control actions on multiple objects simultaneously. They are divided into two subtypes:
Features used outside the map_meta_cap() mechanism
Features used inside the map_meta_cap() mechanism
It is also worth noting that the create_posts feature is equivalent to the edit_posts feature by default, that is, the creation of new posts is controlled by the same feature as editing existing ones.

All these features together provide a flexible access rights management system in WordPress, allowing you to fine-tune who can do what on the site.

---

Основные типы возможностей (capabilities) в WordPress, которые используются для управления доступом пользователей к различным действиям над объектами (постами, страницами, комментариями и т.д.). Эти возможности делятся на две категории:

Мета-возможности (Meta Capabilities) – это возможности, которые динамически вычисляются на основе примитивных возможностей и применяются к конкретным объектам. Например, edit_post применяется к одному посту, а read_post – к чтению одного поста.
Примитивные возможности (Primitive Capabilities) – это базовые возможности, которые управляют действиями над несколькими объектами одновременно. Они делятся на два подтипа:
Возможности, используемые вне механизма map_meta_cap()
Возможности, используемые внутри механизма map_meta_cap()
Также стоит отметить, что возможность create_posts по умолчанию эквивалентна возможности edit_posts, то есть создание новых постов контролируется той же возможностью, что и редактирование существующих.

Все эти возможности вместе обеспечивают гибкую систему управления правами доступа в WordPress, позволяя точно настроить, кто и что может делать на сайте.

```php
function add_event_caps_to_admin()
{
    // gets the administrator role
    $role = get_role('administrator');
    $capabilities = array(
        'edit_events',
        'edit_others_events',
        'delete_events',
        'publish_events',
        'read_private_events',
        'delete_private_events',
        'delete_published_events',
        'delete_others_events',
        'edit_private_events',
        'edit_published_events',
    );
    foreach ($capabilities as $cap) {
        $role->add_cap($cap);
    }
}
add_action('admin_init', 'add_event_caps_to_admin');

function add_program_caps_to_admin()
{
    // gets the administrator role
    $role = get_role('administrator');
    $capabilities = array(
        'edit_programs',
        'edit_others_programs',
        'delete_programs',
        'publish_programs',
        'read_private_programs',
        'delete_private_programs',
        'delete_published_programs',
        'delete_others_programs',
        'edit_private_programs',
        'edit_published_programs',
    );
    foreach ($capabilities as $cap) {
        $role->add_cap($cap);
    }
}
add_action('admin_init', 'add_program_caps_to_admin');
```