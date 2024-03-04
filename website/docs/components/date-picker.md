---
title: Date Picker
---

:::warning
Custom javascript in these examples are for demo purposes.
:::

## Types

### Outline

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="date-input" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <input type="text" id="date-input" class="fds-text-input" data-target="date-picker" placeholder="gg/aa/yyyy" />
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-calendar-days"></i>
      </div>
    </div>
  </div>
</div>
```

### Outline white

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="date-input-outline-white" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline-white">
    <input type="text" id="date-input-outline-white" class="fds-text-input" data-target="date-picker" placeholder="gg/aa/yyyy" />
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-calendar-days"></i>
      </div>
    </div>
  </div>
</div>
```

## Size

### Small

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="date-input-sm" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <input type="text" id="date-input-sm" class="fds-text-input fds-text-input--sm" data-target="date-picker" placeholder="gg/aa/yyyy" />
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-calendar-days"></i>
      </div>
    </div>
  </div>
</div>
```

### Default

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="date-input-default" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <input type="text" id="date-input-default" class="fds-text-input" data-target="date-picker" placeholder="gg/aa/yyyy" />
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-calendar-days"></i>
      </div>
    </div>
  </div>
</div>
```

### Large

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="date-input-lg" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <input type="text" id="date-input-lg" class="fds-text-input fds-text-input--lg" data-target="date-picker" placeholder="gg/aa/yyyy" />
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-calendar-days"></i>
      </div>
    </div>
  </div>
</div>
```

## With helper text

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="date-input-helper-text" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <input type="text" id="date-input-helper-text" class="fds-text-input" data-target="date-picker" placeholder="gg/aa/yyyy" />
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-calendar-days"></i>
      </div>
    </div>
  </div>
  <div class="fds-form-item__helper-text">Helper text goes here</div>
</div>
```

## Range picker

```html live
<div class="fds-form-item">
  <div class="fds-date-picker">
    <div class="fds-date-picker-wrapper">
      <div class="fds-form-item__label-wrapper">
        <label for="date-range" class="fds-form-item__label">Label</label>
      </div>
      <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
        <input type="text" id="date-range" class="fds-text-input" data-target="date-picker" placeholder="gg/aa/yyyy" />
        <div class="fds-form-item__suffix">
          <div class="fds-form-item__suffix-icon">
            <i class="fa-light fa-calendar-days"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="fds-date-picker-wrapper">
      <div class="fds-form-item__label-wrapper">
        <label for="date-range" class="fds-form-item__label">Label</label>
      </div>
      <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
        <input type="text" id="date-range" class="fds-text-input" data-target="date-picker" placeholder="gg/aa/yyyy" />
        <div class="fds-form-item__suffix">
          <div class="fds-form-item__suffix-icon">
            <i class="fa-light fa-calendar-days"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="fds-form-item__helper-text">Helper text goes here</div>
</div>
```

## Time

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="time-input" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <input type="time" id="time-input" class="fds-text-input fds-time-input" />
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-clock"></i>
      </div>
    </div>
  </div>
</div>
```

## States

### Warning

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="date-input-warning" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline" data-warning="true">
    <input type="text" id="date-input-warning" class="fds-text-input" data-target="date-picker" placeholder="gg/aa/yyyy" />
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon fds-form-item__warning-icon">
        <i class="fa-solid fa-exclamation-triangle"></i>
      </div>
    </div>
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-calendar-days"></i>
      </div>
    </div>
  </div>
  <div class="fds-form-item__helper-text">Warning message goes here</div>
</div>
```

### Invalid

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="date-input-invalid" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline" data-invalid="true">
    <input type="text" id="date-input-invalid" class="fds-text-input" data-target="date-picker" placeholder="gg/aa/yyyy" />
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon fds-form-item__error-icon">
        <i class="fa-solid fa-exclamation-circle"></i>
      </div>
    </div>
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-calendar-days"></i>
      </div>
    </div>
  </div>
  <div class="fds-form-item__helper-text">Error message goes here</div>
</div>
```

### Disabled

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="date-input-disabled" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline" data-disabled="true">
    <input type="text" id="date-input-disabled" class="fds-text-input" data-target="date-picker" placeholder="gg/aa/yyyy" disabled />
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-calendar-days"></i>
      </div>
    </div>
  </div>
</div>
```