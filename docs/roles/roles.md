# Roles

## capability_type

Leaving the `'capability_type'` value equal to `'post'` preserves standard management rules for `post` type records. 
This means that users with appropriate roles will be able to perform actions such as creating, editing, and deleting `program` type records just like they would with regular posts.

If you set the `'capability_type'` value to `'program'`, then unique management rules based on access rights to `program` record type will be applied. This allows more flexible configuration of access permissions for `program` type records, providing greater control over different types of records.

## map_meta_cap

When the property `map_meta_cap` is set to `true`, WordPress maps the capabilities required to manage metadata fields directly to those needed to manage the underlying post. In other words, if a user has permission to edit a post, they also gain the ability to modify its metadata. Conversely, if a user lacks the necessary capability to edit the post itself, they won't be able to change any of its metadata even if they theoretically have access to managing metadata separately.

By setting `'map_meta_cap'` to `true`, you ensure that managing metadata requires the same level of permissions as managing the actual post. This simplifies the process of controlling access to metadata, making sure that users can't manipulate data unless they have the proper authorization.

```php
// inc/cpt.php

$event_args = [
        ...
        'capability_type'     => 'event',
        'map_meta_cap'        => true
        ...
    ];
    register_post_type('event', $event_args);

    ...

    $program_args = [
        ...
        'capability_type'     => 'program',
        'map_meta_cap'        => true
        ...
    ];
    register_post_type('program', $program_args);

```