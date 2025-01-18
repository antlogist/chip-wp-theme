# Architecture

The theme follows a standard WordPress architecture with essential templates like `archive.php`, `single.php`, and `page.php`. It includes specific templates for events (`archive-event.php`, `single-event.php`) and programs (`archive-program.php`, `single-program.php`). The `inc` directory contains various classes, custom post types, and customization files. Additionally, there are folders for REST API integration, mailing functionality, and template parts for reusable components.

```bash
tree -I 'node_modules|images|resources|base-knowledge|dist|*.json|webpack*'

.
├── archive-event.php
├── archive.php
├── archive-program.php
├── footer.php
├── front-page.php
├── functions.php
├── header.php
├── inc
│   ├── Classes
│   │   ├── CSRFToken.php
│   │   └── Session.php
│   ├── cpt.php
│   ├── customizer.php
│   ├── enqueue.php
│   ├── mail
│   │   └── mail.php
│   ├── REST
│   │   └── rest_menu.php
│   └── setup.php
├── index.php
├── page-past-events.php
├── page.php
├── README.md
├── screenshot.png
├── single-event.php
├── single.php
├── single-program.php
├── style.css
└── template-parts
    ├── childpages-basic.php
    ├── events
    │   ├── event-list.php
    │   ├── event-of-program.php
    │   └── program-list.php
    ├── frontbuttons-basic.php
    ├── frontbuttons-subscr.php
    ├── pagebuttons-basic.php
    ├── parentpages-basic.php
    ├── recentnews-basic.php
    └── recentnews-query.php

```