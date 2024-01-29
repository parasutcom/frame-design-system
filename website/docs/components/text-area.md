---
title: Text Area
---

## Types

### Outline

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textarea" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <textarea name="textarea" id="textarea" class="fds-text-area" placeholder="Placeholder text"></textarea>
  </div>
</div>
```

### Outline white

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textarea" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline-white">
    <textarea name="textarea" id="textarea" class="fds-text-area" placeholder="Placeholder text"></textarea>
  </div>
</div>
```

## Size

### Small

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textarea" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <textarea name="textarea" id="textarea" class="fds-text-area fds-text-area--sm" placeholder="Placeholder text"></textarea>
  </div>
</div>
```

### Default

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textarea" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <textarea name="textarea" id="textarea" class="fds-text-area" placeholder="Placeholder text"></textarea>
  </div>
</div>
```

### Large

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textarea" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <textarea name="textarea" id="textarea" class="fds-text-area fds-text-area--lg" placeholder="Placeholder text"></textarea>
  </div>
</div>
```

## With helper text

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textarea" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <textarea name="textarea" id="textarea" class="fds-text-area" placeholder="Placeholder text"></textarea>
  </div>
  <div class="fds-form-item__helper-text">Helper text goes here</div>
</div>
```

## With counter

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textarea" class="fds-form-item__label">Label</label>
    <div class="fds-form-item__counter">54/100</div>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <textarea name="textarea" id="textarea" class="fds-text-area" placeholder="Placeholder text"></textarea>
  </div>
</div>
```

## States

### Warning

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textarea" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline" data-warning="true">
    <textarea name="" id="textarea" class="fds-text-area" placeholder="Placeholder text"></textarea>
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon fds-form-item__warning-icon">
        <i class="fa-solid fa-exclamation-triangle"></i>
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
    <label for="textarea" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline" data-invalid="true">
    <textarea name="" id="textarea" class="fds-text-area" placeholder="Placeholder text"></textarea>
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon fds-form-item__error-icon">
        <i class="fa-solid fa-exclamation-circle"></i>
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
    <label for="textarea" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline" data-disabled="true">
    <textarea name="" id="textarea" class="fds-text-area" placeholder="Placeholder text" disabled></textarea>
  </div>
</div>
```