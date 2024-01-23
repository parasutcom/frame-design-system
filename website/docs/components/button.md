---
title: Button
---

## Types

### Primary

```html live
<button class="fds-btn fds-btn--primary">
  <span class="fds-btn__label">Primary button</span>
</button>
```

### Secondary

```html live
<button class="fds-btn fds-btn--secondary">
  <span class="fds-btn__label">Secondary button</span>
</button>
```

### Outline

```html live
<button class="fds-btn fds-btn--outline">
  <span class="fds-btn__label">Outline button</span>
</button>
```

### Ghost

```html live
<button class="fds-btn fds-btn--ghost">
  <span class="fds-btn__label">Ghost button</span>
</button>
```

### Destructive

```html live
<button class="fds-btn fds-btn--destructive">
  <span class="fds-btn__label">Destructive button</span>
</button>
```

### Destructive outline

```html live
<button class="fds-btn fds-btn--destructive-outline">
  <span class="fds-btn__label">Destructive outline button</span>
</button>
```

## Size

```html live
<div class="playgroundPreview">
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
<div class="playgroundPreviewVertical">
  <button class="fds-btn fds-btn--primary fds-btn--full-width">
    <span class="fds-btn__label">Full width button</span>
  </button>

  <button class="fds-btn fds-btn--primary fds-btn--full-width">
    <span class="fds-icon"><i class="fa-regular fa-plus"></i></span>
    <span class="fds-btn__label">Full width button</span>
  </button>
</div>
```

## Button with icon

### Icon before

```html live
<button class="fds-btn fds-btn--primary">
  <span class="fds-icon"><i class="fa-regular fa-chevron-left"></i></span>
  <span class="fds-btn__label">Icon before</span>
</button>
```

### Icon after

```html live
<button class="fds-btn fds-btn--primary">
  <span class="fds-btn__label">Icon after</span>
  <span class="fds-icon"><i class="fa-regular fa-chevron-right"></i></span>
</button>
```

### Icon only

```html live
<button class="fds-btn fds-btn--primary fds-btn--icon">
  <span class="fds-icon"><i class="fa-regular fa-plus"></i></span>
</button>
```

## States

### Disabled

```html live
<div class="playgroundPreview">
  <button class="fds-btn fds-btn--primary fds-btn--disabled" disabled>
    <span class="fds-btn__label">Disabled button</span>
  </button>

  <button class="fds-btn fds-btn--outline fds-btn--disabled" disabled>
    <span class="fds-btn__label">Disabled button</span>
  </button>

  <button
    class="fds-btn fds-btn--primary fds-btn--icon fds-btn--disabled"
    disabled
  >
    <span class="fds-icon"><i class="fa-regular fa-plus"></i></span>
  </button>
</div>
```

### Busy

```html live
<div class="playgroundPreview">
  <button class="fds-btn fds-btn--primary fds-btn--busy" disabled>
    <div
      role="status"
      aria-label="Loading process"
      class="fds-spinner fds-spinner--sm fds-spinner--secondary"
    >
      <span class="fds-icon fds-spinner__icon">
        <i class="fa-regular fa-spinner-third"></i>
      </span>
    </div>
    <span class="fds-btn__label">Primary button</span>
  </button>

  <button class="fds-btn fds-btn--outline fds-btn--busy" disabled>
    <div
      role="status"
      aria-label="Loading process"
      class="fds-spinner fds-spinner--sm fds-spinner--secondary"
    >
      <span class="fds-icon fds-spinner__icon">
        <i class="fa-regular fa-spinner-third"></i>
      </span>
    </div>
    <span class="fds-btn__label">Outline button</span>
  </button>

  <button class="fds-btn fds-btn--primary fds-btn--icon fds-btn--busy" disabled>
    <div
      role="status"
      aria-label="Loading process"
      class="fds-spinner fds-spinner--sm fds-spinner--secondary"
    >
      <span class="fds-icon fds-spinner__icon">
        <i class="fa-regular fa-spinner-third"></i>
      </span>
    </div>
    <span class="fds-icon"><i class="fa-regular fa-plus"></i></span>
  </button>
</div>
```
