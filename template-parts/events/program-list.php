<?php
$related_programs = get_field('related_programs');

if ($related_programs) { ?>
    <div class="post-wrapper">
        <h2>Related Program(s)</h2>
        <?php
        foreach ($related_programs as $related_program) {
            $permalink = get_the_permalink($related_program);
            $title = get_the_title($related_program);
            echo sprintf('<p><a href="%s">%s</a></p>', esc_url($permalink), esc_html($title));
        }
        ?>
    </div>
<?php
} ?>