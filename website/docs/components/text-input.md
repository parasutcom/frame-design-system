---
title: Text Input
---

## Types

### Outline

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textinput" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <input type="text" id="textinput" class="fds-text-input" placeholder="Placeholder text" />
  </div>
</div>
```

### Outline white

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textinput" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline-white">
    <input type="text" id="textinput" class="fds-text-input" placeholder="Placeholder text" />
  </div>
</div>
```

## Size

### Small

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textinput" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <input type="text" id="textinput" class="fds-text-input fds-text-input--sm" placeholder="Placeholder text" />
  </div>
</div>
```

### Default

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textinput" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <input type="text" id="textinput" class="fds-text-input" placeholder="Placeholder text" />
  </div>
</div>
```

### Large

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textinput" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <input type="text" id="textinput" class="fds-text-input fds-text-input--lg" placeholder="Placeholder text" />
  </div>
</div>
```

## Amount

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textinput" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <input type="text" id="textinput" class="fds-text-input fds-text-input--amount" placeholder="0,00" />
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-regular fa-turkish-lira"></i>
      </div>
    </div>
  </div>
</div>
```

## Password

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="passwordinput" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <input type="password" id="passwordinput" class="fds-text-input" placeholder="Password placeholder" />
    <button type="button" class="fds-text-input__visibility-toggle">
      <span class="fds-text-input__visibility-toggle-icon">
        <i class="fa-regular fa-eye"></i>
      </span>
    </button>
  </div>
</div>
```

## With helper text

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textinput" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <input type="text" id="textinput" class="fds-text-input" placeholder="Placeholder text" />
  </div>
  <div class="fds-form-item__helper-text">Helper text goes here</div>
</div>
```

## With counter

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textinput" class="fds-form-item__label">Label</label>
    <div class="fds-form-item__counter">54/100</div>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <input type="text" id="textinput" class="fds-text-input" placeholder="Placeholder text" />
  </div>
</div>
```

## Prefix text

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textinput" class="fds-form-item__label">IBAN</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <div class="fds-form-item__prefix">
      <div class="fds-form-item__prefix-text">TR</div>
    </div>
    <input type="text" id="textinput" class="fds-text-input" placeholder="79 0013 4000 0000 0186 12" />
  </div>
</div>
```

## Suffix icon

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textinput" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <input type="tel" id="textinput" class="fds-text-input" placeholder="örn. 0(555) 555 55 55" />
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-regular fa-phone"></i>
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
    <label for="textinput" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline" data-warning="true">
    <input type="text" id="textinput" class="fds-text-input" placeholder="Placeholder text" />
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
    <label for="textinput" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline" data-invalid="true">
    <input type="text" id="textinput" class="fds-text-input" placeholder="Placeholder text" />
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
    <label for="textinput" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline" data-disabled="true">
    <input type="text" id="textinput" class="fds-text-input" placeholder="Placeholder text" disabled />
  </div>
</div>
```