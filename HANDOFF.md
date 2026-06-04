# WordPress Handoff Notes

This prototype should be treated as the visual and structural source for a custom WordPress theme.

## Component To Partial Map

| React component / section | Suggested WordPress partial | Notes |
| --- | --- | --- |
| `Header` | `template-parts/header/site-header.php` | Navigation should use WP menu fallback. |
| `Hero` | `template-parts/sections/hero.php` | Hero copy, CTAs, and stats should be editable. |
| `#ekosistema` | `template-parts/sections/ecosystem-proof.php` | BIO and TECH cards can be ACF group fields. |
| `#sklypai` | `template-parts/sections/plots-infrastructure.php` | Infrastructure stats should use repeater fields. |
| `#procesas` | `template-parts/sections/investor-process.php` | Four process steps as repeater fields. |
| `#kontaktai` | `template-parts/sections/contact-cta.php` | Later connect to form plugin or custom handler. |

## Suggested ACF Fields

### Hero

- `hero_eyebrow`
- `hero_title`
- `hero_text`
- `hero_primary_cta_label`
- `hero_primary_cta_url`
- `hero_secondary_cta_label`
- `hero_secondary_cta_url`
- `hero_stats` repeater: `value`, `label`

### Ecosystem

- `ecosystem_eyebrow`
- `ecosystem_title`
- `ecosystem_cards` repeater: `title`, `text`, `link_label`, `link_url`, `theme`

### Plots / Infrastructure

- `plots_eyebrow`
- `plots_title`
- `plots_text`
- `infrastructure_stats` repeater: `value`, `label`

### Process

- `process_eyebrow`
- `process_title`
- `process_steps` repeater: `title`, `text`

### Contact

- `contact_title`
- `contact_text`
- `contact_email`
- `contact_phone`
- `contact_form_shortcode`

## CSS Strategy

Keep design tokens centralized. In WordPress, these can move to `theme.json`, `style.css`, or SCSS variables, depending on the final theme build system.
