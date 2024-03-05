---
title: Link
---

:::warning
Inline styles in these examples are for demo purposes.
:::

## Types

### Primary

```html live
<a href="#" tabindex="0" class="fds-link fds-link--primary">Link</a>
```

### Secondary

```html live
<a href="#" tabindex="0" class="fds-link fds-link--secondary">Link</a>
```

### Dark

```html live
<div style={{ padding: '12px', backgroundColor: '#1f1f1f' }}>
  <a href="#" tabindex="0" class="fds-link fds-link--dark">Link</a>
</div>
```

## Inline

```html live
<p class="body-short-02">
  This is for short paragraphs with no more than 4 lines and is&nbsp;
  <a href="#" tabindex="0" class="fds-link fds-link--primary fds-link--inline">Link</a>
  &nbsp;commonly used in the Link expressive type theme for layouts.
</p>
```

## With icon

```html live
<a href="#" tabindex="0" class="fds-link fds-link--primary">
  Link
  <div class="fds-link__icon">
    <span class="fds-icon fds-icon--xs">
      <i class="fa-regular fa-arrow-up-right-from-square"></i>
    </span>
  </div>
</a>
```

## State

### Disabled

```html live
<a tabindex="0" class="fds-link fds-link--primary fds-link--disabled" disabled>Link</a>
```
