---
title: Split Button
---

## Types

### Primary

```html live
<div class="fds-btn-group">
  <button class="fds-btn fds-btn--primary">
    <span class="fds-btn__label">Primary button</span>
  </button>
  <button class="fds-btn fds-btn--primary fds-btn--icon">
    <span class="fds-icon"><i class="fa-regular fa-chevron-down"></i></span>
  </button>
</div>
```

### Secondary

```html live
<div class="fds-btn-group">
  <button class="fds-btn fds-btn--secondary">
    <span class="fds-btn__label">Secondary button</span>
  </button>
  <button class="fds-btn fds-btn--secondary fds-btn--icon">
    <span class="fds-icon"><i class="fa-regular fa-chevron-down"></i></span>
  </button>
</div>
```

### Outline

```html live
<div class="fds-btn-group">
  <button class="fds-btn fds-btn--outline">
    <span class="fds-btn__label">Outline button</span>
  </button>
  <button class="fds-btn fds-btn--outline fds-btn--icon">
    <span class="fds-icon"><i class="fa-regular fa-chevron-down"></i></span>
  </button>
</div>
```

## Size

```html live
<div class="demo">
  <div class="fds-btn-group">
    <button class="fds-btn fds-btn--primary fds-btn--lg">
      <span class="fds-btn__label">Primary button</span>
    </button>
    <button class="fds-btn fds-btn--primary fds-btn--icon fds-btn--lg">
      <span class="fds-icon"><i class="fa-regular fa-chevron-down"></i></span>
    </button>
  </div>

  <div class="fds-btn-group">
    <button class="fds-btn fds-btn--primary">
      <span class="fds-btn__label">Primary button</span>
    </button>
    <button class="fds-btn fds-btn--primary fds-btn--icon">
      <span class="fds-icon"><i class="fa-regular fa-chevron-down"></i></span>
    </button>
  </div>

  <div class="fds-btn-group">
    <button class="fds-btn fds-btn--primary fds-btn--sm">
      <span class="fds-btn__label">Primary button</span>
    </button>
    <button class="fds-btn fds-btn--primary fds-btn--icon fds-btn--sm">
      <span class="fds-icon"><i class="fa-regular fa-chevron-down"></i></span>
    </button>
  </div>
</div>
```

## With encapsulation

```html live
<div class="fds-btn-group">
  <button class="fds-btn fds-btn--primary">
    <span class="fds-btn__label">Primary button</span>
  </button>
  <div>
    <button class="fds-btn fds-btn--primary fds-btn--icon fds-btn-group__btn fds-btn-group__btn--last">
      <span class="fds-icon"><i class="fa-regular fa-chevron-down"></i></span>
    </button>
  </div>
</div>
```

## With triple encapsulation

```html live
<div class="fds-btn-group">
  <div>
    <button class="fds-btn fds-btn--primary fds-btn-group__btn fds-btn-group__btn--first">
      <span class="fds-btn__label">Primary button</span>
    </button>
  </div>
  <div>
    <button class="fds-btn fds-btn--primary fds-btn-group__btn fds-btn-group__btn--inner">
      <span class="fds-btn__label">Primary button</span>
    </button>
  </div>
  <div>
    <button class="fds-btn fds-btn--primary fds-btn--icon fds-btn-group__btn fds-btn-group__btn--last">
      <span class="fds-icon"><i class="fa-regular fa-chevron-down"></i></span>
    </button>
  </div>
</div>
```