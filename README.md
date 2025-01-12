# Old School WordPress Theme

- Theme Name: Chip theme
- Theme URI: https://github.com/antlogist/chip-wp-theme
- Author: Anton Podlesnyy
- Author URI: https://podlesnyy.ru
- Description: Simple business theme with old school design
- Tags: business-theme, old-school-design
- Version: 2.0
- Requires at least: 5.0
- Tested up to: 6.7.1
- Requires PHP: 8.2
- License: GNU General Public License v2 or later
- License URI: http://www.gnu.org/licenses/gpl-2.0.html
- Text Domain: chiptheme
- Use it to make something cool, have fun, and share what you've learned with others.

# Website menu

To display menus, the REST API is utilized. The endpoints are as follows:

- Header menu: `/wp-json/menus/v1/menu`
- Footer menu: `/wp-json/menus/v1/footer`

In order for the menus to appear, you need to create menus named "header" and "footer" in the admin panel.

# Structure

```bash
.
├── dist
│   ├── css
│   │   ├── all.css
│   │   ├── all.min.css
│   │   ├── libs.css
│   │   └── libs.min.css
│   └── js
│       ├── all.js
│       ├── all.js.LICENSE.txt
│       ├── all.min.js
│       ├── theme-customize.js
│       └── theme-customize.min.js
├── footer.php
├── front-page.php
├── functions.php
├── header.php
├── inc
│   ├── Classes
│   │   ├── CSRFToken.php
│   │   └── Session.php
│   ├── customizer.php
│   ├── enqueue.php
│   ├── mail
│   │   └── mail.php
│   ├── REST
│   │   └── rest_menu.php
│   └── setup.php
├── index.php
├── package.json
├── page.php
├── README.md
├── resources
│   └── assets
│       ├── js
│       │   ├── baseObject.js
│       │   ├── buttons
│       │   │   └── buttons.js
│       │   ├── carousel
│       │   │   └── carousel.js
│       │   ├── Classes
│       │   │   ├── Mail.js
│       │   │   ├── Modal.js
│       │   │   ├── Mouse.js
│       │   │   └── Request.js
│       │   ├── customization
│       │   │   └── theme-customize.js
│       │   ├── init.js
│       │   ├── nav
│       │   │   └── nav.js
│       │   └── wpcf7
│       │       └── wpcf7.js
│       └── sass
│           ├── app.scss
│           └── libs.scss
├── single.php
├── style.css
├── template-parts
│   ├── frontbuttons-basic.php
│   ├── frontbuttons-subscr.php
│   ├── pagebuttons-basic.php
│   └── recentnews-basic.php
└── webpack.mix.js
```