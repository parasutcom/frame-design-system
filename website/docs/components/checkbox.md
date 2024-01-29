---
title: Checkbox
---

## Single

```html live
<div class="fds-checkbox">
  <input type="checkbox" class="fds-checkbox__input" name="checkbox-single" id="checkbox-single" />
  <label for="checkbox-single" class="fds-checkbox__label">
    <span class="fds-checkbox__label-mark"></span>
    <span class="fds-checkbox__label-text">Checkbox Label</span>
  </label>
</div>
```

## Group

### Vertical

```html live
<fieldset class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="checkbox" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-checkbox-group">
    <div class="fds-checkbox">
      <input type="checkbox" class="fds-checkbox__input" name="checkbox-vertical" id="checkbox-vertical-1" />
      <label for="checkbox-vertical-1" class="fds-checkbox__label">
        <span class="fds-checkbox__label-mark"></span>
        <span class="fds-checkbox__label-text">Checkbox Label</span>
      </label>
    </div>
    <div class="fds-checkbox">
      <input type="checkbox" class="fds-checkbox__input" name="checkbox-vertical" id="checkbox-vertical-2" />
      <label for="checkbox-vertical-2" class="fds-checkbox__label">
        <span class="fds-checkbox__label-mark"></span>
        <span class="fds-checkbox__label-text">Checkbox Label</span>
      </label>
    </div>
  </div>
</fieldset>
```

### Horizontal

```html live
<fieldset class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="checkbox" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-checkbox-group fds-checkbox-group--horizontal">
    <div class="fds-checkbox">
      <input type="checkbox" class="fds-checkbox__input" name="checkbox-horizontal" id="checkbox-horizontal-1" />
      <label for="checkbox-horizontal-1" class="fds-checkbox__label">
        <span class="fds-checkbox__label-mark"></span>
        <span class="fds-checkbox__label-text">Checkbox Label</span>
      </label>
    </div>
    <div class="fds-checkbox">
      <input type="checkbox" class="fds-checkbox__input" name="checkbox-horizontal" id="checkbox-horizontal-2" />
      <label for="checkbox-horizontal-2" class="fds-checkbox__label">
        <span class="fds-checkbox__label-mark"></span>
        <span class="fds-checkbox__label-text">Checkbox Label</span>
      </label>
    </div>
  </div>
</fieldset>
```

## With helper text

### Item helper text

```html live
<fieldset class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="checkbox" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-checkbox-group">
    <div class="fds-checkbox">
      <input type="checkbox" class="fds-checkbox__input" name="checkbox-item-helper-text" id="checkbox-item-1" />
      <label for="checkbox-item-1" class="fds-checkbox__label">
        <span class="fds-checkbox__label-mark"></span>
        <div class="fds-checkbox__inner-wrapper">
          <span class="fds-checkbox__label-text">Checkbox label</span>
          <div class="fds-form-item__helper-text">Helper text goes here</div>
        </div>
      </label>
    </div>
    <div class="fds-checkbox">
      <input type="checkbox" class="fds-checkbox__input" name="checkbox-item-helper-text" id="checkbox-item-2" />
      <label for="checkbox-item-2" class="fds-checkbox__label">
        <span class="fds-checkbox__label-mark"></span>
        <div class="fds-checkbox__inner-wrapper">
          <span class="fds-checkbox__label-text">Checkbox label</span>
          <div class="fds-form-item__helper-text">Helper text goes here</div>
        </div>
      </label>
    </div>
  </div>
</fieldset>
```

### Group helper text

```html live
<fieldset class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="checkbox" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-checkbox-group">
    <div class="fds-checkbox">
      <input type="checkbox" class="fds-checkbox__input" name="checkbox-group-helper-text" id="checkbox-item-3" />
      <label for="checkbox-item-3" class="fds-checkbox__label">
        <span class="fds-checkbox__label-mark"></span>
        <span class="fds-checkbox__label-text">Checkbox Label</span>
      </label>
    </div>
    <div class="fds-checkbox">
      <input type="checkbox" class="fds-checkbox__input" name="checkbox-group-helper-text" id="checkbox-item-4" />
      <label for="checkbox-item-4" class="fds-checkbox__label">
        <span class="fds-checkbox__label-mark"></span>
        <span class="fds-checkbox__label-text">Checkbox Label</span>
      </label>
    </div>
  </div>
  <div class="fds-form-item__helper-text">Helper text goes here</div>
</fieldset>
```

## Indeterminate

```html live
<fieldset class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="checkbox" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-checkbox-group">
    <div class="fds-checkbox">
      <input type="checkbox" class="fds-checkbox__input" name="checkbox-indeterminate" id="checkbox-indeterminate-1" />
      <label for="checkbox-indeterminate-1" class="fds-checkbox__label">
        <span class="fds-checkbox__label-mark"></span>
        <span class="fds-checkbox__label-text">Checkbox Label</span>
      </label>
    </div>
    <div class="fds-checkbox">
      <input type="checkbox" class="fds-checkbox__input" name="checkbox-indeterminate" id="checkbox-indeterminate-2" />
      <label for="checkbox-indeterminate-2" class="fds-checkbox__label">
        <span class="fds-checkbox__label-mark"></span>
        <span class="fds-checkbox__label-text">Checkbox Label</span>
      </label>
    </div>
  </div>
</fieldset>
```

## States

### Checked

```html live
<fieldset class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="checkbox" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-checkbox-group">
    <div class="fds-checkbox">
      <input type="checkbox" class="fds-checkbox__input" name="checkbox-checked" id="checkbox-checked-1" checked />
      <label for="checkbox-checked-1" class="fds-checkbox__label">
        <span class="fds-checkbox__label-mark"></span>
        <span class="fds-checkbox__label-text">Checkbox Label</span>
      </label>
    </div>
    <div class="fds-checkbox">
      <input type="checkbox" class="fds-checkbox__input" name="checkbox-checked" id="checkbox-checked-2" checked />
      <label for="checkbox-checked-2" class="fds-checkbox__label">
        <span class="fds-checkbox__label-mark"></span>
        <span class="fds-checkbox__label-text">Checkbox Label</span>
      </label>
    </div>
  </div>
</fieldset>
```

### Disabled

```html live
<fieldset class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="checkbox" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-checkbox-group">
    <div class="fds-checkbox">
      <input type="checkbox" class="fds-checkbox__input" name="checkbox-disabled" id="checkbox-disabled-1" disabled />
      <label for="checkbox-disabled-1" class="fds-checkbox__label">
        <span class="fds-checkbox__label-mark"></span>
        <span class="fds-checkbox__label-text">Checkbox Label</span>
      </label>
    </div>
    <div class="fds-checkbox">
      <input type="checkbox" class="fds-checkbox__input" name="checkbox-disabled" id="checkbox-disabled-2" disabled />
      <label for="checkbox-disabled-2" class="fds-checkbox__label">
        <span class="fds-checkbox__label-mark"></span>
        <span class="fds-checkbox__label-text">Checkbox Label</span>
      </label>
    </div>
  </div>
</fieldset>
```

### Checked disabled

```html live
<fieldset class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="checkbox" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-checkbox-group">
    <div class="fds-checkbox">
      <input type="checkbox" class="fds-checkbox__input" name="checkbox-checked-disabled" id="checkbox-checked-disabled-1" checked disabled />
      <label for="checkbox-checked-disabled-1" class="fds-checkbox__label">
        <span class="fds-checkbox__label-mark"></span>
        <span class="fds-checkbox__label-text">Checkbox Label</span>
      </label>
    </div>
    <div class="fds-checkbox">
      <input type="checkbox" class="fds-checkbox__input" name="checkbox-checked-disabled" id="checkbox-checked-disabled-2" checked disabled />
      <label for="checkbox-checked-disabled-2" class="fds-checkbox__label">
        <span class="fds-checkbox__label-mark"></span>
        <span class="fds-checkbox__label-text">Checkbox Label</span>
      </label>
    </div>
  </div>
</fieldset>
```