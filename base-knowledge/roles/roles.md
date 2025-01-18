# Roles

Leaving the `'capability_type'` value equal to `'post'` preserves standard management rules for `post` type records. 
This means that users with appropriate roles will be able to perform actions such as creating, editing, and deleting `program` type records just like they would with regular posts.

If you set the `'capability_type'` value to `'program'`, then unique management rules based on access rights to `program` record type will be applied. This allows more flexible configuration of access permissions for `program` type records, providing greater control over different types of records.

```php
// inc/cpt.php

$event_args = [
        ...
        'capability_type'     => 'event',
        ...
    ];
    register_post_type('event', $event_args);

    ...

    $program_args = [
        ...
        'capability_type'     => 'program',
        ...
    ];
    register_post_type('program', $program_args);

```