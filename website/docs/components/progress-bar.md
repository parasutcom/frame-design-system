---
title: Progress Bar
---

:::warning
Inline styles in these examples are for demo purposes.
:::

## Size

### Default

```html live
<div class="fds-progress-bar">
  <div
    class="fds-progress-bar__track"
    role="progressbar"
    aria-labelledby="progress-bar-5"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="50"
  >
    <div class="fds-progress-bar__value" style={{ width: '50%' }}></div>
  </div>
</div>
```

### Small

```html live
<div class="fds-progress-bar fds-progress-bar--sm">
  <div
    class="fds-progress-bar__track"
    role="progressbar"
    aria-labelledby="progress-bar-5"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="50"
  >
    <div class="fds-progress-bar__value" style={{ width: '50%' }}></div>
  </div>
</div>
```

### Large

```html live
<div class="fds-progress-bar fds-progress-bar--lg">
  <div
    class="fds-progress-bar__track"
    role="progressbar"
    aria-labelledby="progress-bar-5"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="50"
  >
    <div class="fds-progress-bar__value" style={{ width: '50%' }}></div>
  </div>
</div>
```

## With label

```html live
<div class="fds-progress-bar">
  <div class="fds-progress-bar__label-wrapper">
    <label for="progress-bar-5" class="fds-progress-bar__label"
      >Process Label</label
    >
    <div class="fds-progress-bar__counter">50%</div>
  </div>
  <div
    class="fds-progress-bar__track"
    role="progressbar"
    aria-labelledby="progress-bar-5"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="50"
  >
    <div class="fds-progress-bar__value" style={{ width: '50%' }}></div>
  </div>
</div>
```
