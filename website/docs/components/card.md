---
title: Card
---

## Types

:::warning
Inline styles in these examples are for demo purposes.
:::

### Default

```html live
<div class="fds-card">
  <div class="fds-card__header">
    <h5 class="fds-card__heading">Card header</h5>
  </div>
  <div class="fds-card__content">
    <p style={{ marginBottom: '0' }}>Card content goes here</p>
  </div>
  <div class="fds-card__footer">
    <button class="fds-btn fds-btn--ghost fds-btn--sm">
      <span class="fds-btn__label">Ghost button</span>
    </button>
    <button class="fds-btn fds-btn--secondary fds-btn--sm">
      <span class="fds-btn__label">Secondary button</span>
    </button>
  </div>
</div>
```

### Without header

```html live
<div class="fds-card">
  <div class="fds-card__content">
    <p style={{ marginBottom: '0' }}>Card content goes here</p>
  </div>
  <div class="fds-card__footer">
    <button class="fds-btn fds-btn--ghost fds-btn--sm">
      <span class="fds-btn__label">Ghost button</span>
    </button>
    <button class="fds-btn fds-btn--secondary fds-btn--sm">
      <span class="fds-btn__label">Secondary button</span>
    </button>
  </div>
</div>
```

### Without footer

```html live
<div class="fds-card">
  <div class="fds-card__header">
    <h5 class="fds-card__heading">Card header</h5>
  </div>
  <div class="fds-card__content">
    <p style={{ marginBottom: '0' }}>Card content goes here</p>
  </div>
</div>
```

### Only content

```html live
<div class="fds-card">
  <div class="fds-card__content">
    <p style={{ marginBottom: '0' }}>Card content goes here</p>
  </div>
</div>
```