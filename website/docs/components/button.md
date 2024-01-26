---
title: Button
---

:::warning
Inline styles in these examples are for demo purposes.
:::

## Types

```html live
<div class="demo">
  <button class="fds-btn fds-btn--primary">
    <span class="fds-btn__label">Primary button</span>
  </button>

  <button class="fds-btn fds-btn--secondary">
    <span class="fds-btn__label">Secondary button</span>
  </button>

  <button class="fds-btn fds-btn--outline">
    <span class="fds-btn__label">Outline button</span>
  </button>

  <button class="fds-btn fds-btn--ghost">
    <span class="fds-btn__label">Ghost button</span>
  </button>

  <button class="fds-btn fds-btn--destructive">
    <span class="fds-btn__label">Destructive button</span>
  </button>

  <button class="fds-btn fds-btn--destructive-outline">
    <span class="fds-btn__label">Destructive outline button</span>
  </button>
</div>

```

## Size

```html live
<div class="demo">
  <button class="fds-btn fds-btn--primary fds-btn--lg">
    <span class="fds-btn__label">Large button</span>
  </button>

  <button class="fds-btn fds-btn--primary">
    <span class="fds-btn__label">Default button</span>
  </button>

  <button class="fds-btn fds-btn--primary fds-btn--sm">
    <span class="fds-btn__label">Small button</span>
  </button>
</div>
```

## Full width

```html live
<div class="demo-vertical">
  <button class="fds-btn fds-btn--primary fds-btn--full-width">
    <span class="fds-btn__label">Full width button</span>
  </button>

  <button class="fds-btn fds-btn--primary fds-btn--full-width">
    <span class="fds-icon">
      <i class="fa-regular fa-plus"></i>
    </span>
    <span class="fds-btn__label">Full width button</span>
  </button>
</div>
```

## Button with icon

### Icon left

```html live
<button class="fds-btn fds-btn--primary">
  <span class="fds-icon">
    <i class="fa-regular fa-chevron-left"></i>
  </span>
  <span class="fds-btn__label">Icon left</span>
</button>
```

### Icon right

```html live
<button class="fds-btn fds-btn--primary">
  <span class="fds-btn__label">Icon right</span>
  <span class="fds-icon">
    <i class="fa-regular fa-chevron-right"></i>
  </span>
</button>
```

### Icon only

```html live
<button class="fds-btn fds-btn--primary fds-btn--icon">
  <span class="fds-icon">
    <i class="fa-regular fa-plus"></i>
  </span>
</button>
```

## Truncation
```html live
<div class="demo">
  <button class="fds-btn fds-btn--primary" style={{ maxWidth: '150px' }}>
    <span class="fds-btn__label">A very long sentence</span>
  </button>

  <button class="fds-btn fds-btn--primary" style={{ maxWidth: '150px' }}>
    <span class="fds-btn__label">A very long sentence</span>
    <span class="fds-icon">
      <i class="fa-regular fa-chevron-right"></i>
    </span>
  </button>
</div>
```

## States

### Disabled

```html live
<div class="demo">
  <button class="fds-btn fds-btn--primary fds-btn--disabled" disabled>
    <span class="fds-btn__label">Disabled button</span>
  </button>

  <button class="fds-btn fds-btn--outline fds-btn--disabled" disabled>
    <span class="fds-btn__label">Disabled button</span>
  </button>

  <button class="fds-btn fds-btn--primary fds-btn--icon fds-btn--disabled" disabled>
    <span class="fds-icon">
      <i class="fa-regular fa-plus"></i>
    </span>
  </button>
</div>
```

### Busy

```html live
<div class="demo">
  <button class="fds-btn fds-btn--primary fds-btn--busy" disabled>
    <div role="status" aria-label="Loading process" class="fds-spinner fds-spinner--sm fds-spinner--secondary">
      <span class="fds-icon fds-spinner__icon">
        <i class="fa-regular fa-spinner-third"></i>
      </span>
    </div>
    <span class="fds-btn__label">Primary button</span>
  </button>

  <button class="fds-btn fds-btn--outline fds-btn--busy" disabled>
    <div role="status" aria-label="Loading process" class="fds-spinner fds-spinner--sm fds-spinner--secondary">
      <span class="fds-icon fds-spinner__icon">
        <i class="fa-regular fa-spinner-third"></i>
      </span>
    </div>
    <span class="fds-btn__label">Outline button</span>
  </button>

  <button class="fds-btn fds-btn--primary fds-btn--icon fds-btn--busy" disabled>
    <div role="status" aria-label="Loading process" class="fds-spinner fds-spinner--sm fds-spinner--secondary">
      <span class="fds-icon fds-spinner__icon">
        <i class="fa-regular fa-spinner-third"></i>
      </span>
    </div>
    <span class="fds-icon">
      <i class="fa-regular fa-plus"></i>
    </span>
  </button>
</div>
```
