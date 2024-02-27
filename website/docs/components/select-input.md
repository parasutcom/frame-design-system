---
title: Select Input
---

## Types

### Outline

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="textinput" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <select name="" id="select-input" class="fds-select-input">
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
      <option value="option-4">Option 4</option>
    </select>
    <div class="fds-form-item__suffix fds-select-input__arrow">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-chevron-down"></i>
      </div>
    </div>
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
    <select name="" id="select-input" class="fds-select-input">
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
      <option value="option-4">Option 4</option>
    </select>
    <div class="fds-form-item__suffix fds-select-input__arrow">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-chevron-down"></i>
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
    <label for="textinput" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <select name="" id="select-input" class="fds-select-input fds-select-input--sm">
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
      <option value="option-4">Option 4</option>
    </select>
    <div class="fds-form-item__suffix fds-select-input__arrow">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-chevron-down"></i>
      </div>
    </div>
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
    <select name="" id="select-input" class="fds-select-input">
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
      <option value="option-4">Option 4</option>
    </select>
    <div class="fds-form-item__suffix fds-select-input__arrow">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-chevron-down"></i>
      </div>
    </div>
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
    <select name="" id="select-input" class="fds-select-input fds-select-input--lg">
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
      <option value="option-4">Option 4</option>
    </select>
    <div class="fds-form-item__suffix fds-select-input__arrow">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-chevron-down"></i>
      </div>
    </div>
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
    <select name="" id="select-input" class="fds-select-input">
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
      <option value="option-4">Option 4</option>
    </select>
    <div class="fds-form-item__suffix fds-select-input__arrow">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-chevron-down"></i>
      </div>
    </div>
  </div>
  <div class="fds-form-item__helper-text">Helper text goes here</div>
</div>
```

## With overflow menu

```html live
<div class="fds-overflow-menu">
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <button type="button" class="fds-select-input">
      <span class="fds-select-input__label">Option</span>
    </button>
    <ul class="fds-overflow-menu__options fds-overflow-menu__options--lg" tabindex="-1" role="menu">
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <span class="fds-overflow-menu__option-label">Option 1</span>
        </a>
      </li>
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <span class="fds-overflow-menu__option-label">Option 2</span>
        </a>
      </li>
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <span class="fds-overflow-menu__option-label">Option 3</span>
        </a>
      </li>
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <span class="fds-overflow-menu__option-label">Option 4</span>
        </a>
      </li>
    </ul>
    <div class="fds-form-item__suffix fds-select-input__arrow">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-chevron-down"></i>
      </div>
    </div>
  </div>
</div>
```

## Multiselect

```html live
<div class="fds-overflow-menu">
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <button type="button" class="fds-select-input">
      <div class="fds-multi-select">
        <div class="fds-tag fds-tag--interactive">
          <span class="fds-tag__label">Option 1</span>
          <button class="fds-tag__btn-close">
            <span class="fds-icon fds-tag__icon">
              <i class="fa-light fa-xmark"></i>
            </span>
          </button>
        </div>
        <div class="fds-tag fds-tag--interactive">
          <span class="fds-tag__label">Option 2</span>
          <button class="fds-tag__btn-close">
            <span class="fds-icon fds-tag__icon">
              <i class="fa-light fa-xmark"></i>
            </span>
          </button>
        </div>
      </div> 
      <span class="fds-select-input__label">Option</span>
    </button>
    <ul class="fds-overflow-menu__options fds-overflow-menu__options--lg" tabindex="-1" role="menu">
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <span class="fds-overflow-menu__option-label">Option 1</span>
        </a>
      </li>
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <span class="fds-overflow-menu__option-label">Option 2</span>
        </a>
      </li>
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <span class="fds-overflow-menu__option-label">Option 3</span>
        </a>
      </li>
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <span class="fds-overflow-menu__option-label">Option 4</span>
        </a>
      </li>
    </ul>
    <div class="fds-form-item__suffix fds-select-input__arrow">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-chevron-down"></i>
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
    <select name="" id="select-input" class="fds-select-input">
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
      <option value="option-4">Option 4</option>
    </select>
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon fds-form-item__warning-icon">
        <i class="fa-solid fa-exclamation-triangle"></i>
      </div>
    </div>
    <div class="fds-form-item__suffix fds-select-input__arrow">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-chevron-down"></i>
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
    <select name="" id="select-input" class="fds-select-input">
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
      <option value="option-4">Option 4</option>
    </select>
    <div class="fds-form-item__suffix">
      <div class="fds-form-item__suffix-icon fds-form-item__error-icon">
        <i class="fa-solid fa-exclamation-circle"></i>
      </div>
    </div>
    <div class="fds-form-item__suffix fds-select-input__arrow">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-chevron-down"></i>
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
    <select name="" id="select-input" class="fds-select-input" disabled>
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
      <option value="option-4">Option 4</option>
    </select>
    <div class="fds-form-item__suffix fds-select-input__arrow">
      <div class="fds-form-item__suffix-icon">
        <i class="fa-light fa-chevron-down"></i>
      </div>
    </div>
  </div>
</div>
```