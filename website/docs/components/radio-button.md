---
title: Radio Button
---

## Group

### Vertical

```html live
<fieldset class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-radio-button-group">
    <div class="fds-radio-button">
      <input type="radio" class="fds-radio-button__input" name="fds-radio-vertical" id="radio-1" checked />
      <label for="radio-1" class="fds-radio-button__label">
        <span class="fds-radio-button__label-mark"></span>
        <span class="fds-radio-button__label-text">Radio button label</span>
      </label>
    </div>
    <div class="fds-radio-button">
      <input type="radio" class="fds-radio-button__input" name="fds-radio-vertical" id="radio-2" />
      <label for="radio-2" class="fds-radio-button__label">
        <span class="fds-radio-button__label-mark"></span>
        <span class="fds-radio-button__label-text">Radio button label</span>
      </label>
    </div>
  </div>
</fieldset>
```

### Horizontal

```html live
<fieldset class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-radio-button-group fds-radio-button-group--horizontal">
    <div class="fds-radio-button">
      <input type="radio" class="fds-radio-button__input" name="fds-radio-horizontal" id="radio-3" checked />
      <label for="radio-3" class="fds-radio-button__label">
        <span class="fds-radio-button__label-mark"></span>
        <span class="fds-radio-button__label-text">Radio button label</span>
      </label>
    </div>
    <div class="fds-radio-button">
      <input type="radio" class="fds-radio-button__input" name="fds-radio-horizontal" id="radio-4" />
      <label for="radio-4" class="fds-radio-button__label">
        <span class="fds-radio-button__label-mark"></span>
        <span class="fds-radio-button__label-text">Radio button label</span>
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
    <label class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-radio-button-group">
    <div class="fds-radio-button">
      <input type="radio" class="fds-radio-button__input" name="fds-radio-item-helper-text" id="radio-5" checked />
      <label for="radio-5" class="fds-radio-button__label">
        <span class="fds-radio-button__label-mark"></span>
        <div class="fds-radio-button__inner-wrapper">
          <span class="fds-radio-button__label-text">Radio button label</span>
          <div class="fds-form-item__helper-text">Helper text goes here</div>
        </div>
      </label>
    </div>
    <div class="fds-radio-button">
      <input type="radio" class="fds-radio-button__input" name="fds-radio-item-helper-text" id="radio-6" />
      <label for="radio-6" class="fds-radio-button__label">
        <span class="fds-radio-button__label-mark"></span>
        <div class="fds-radio-button__inner-wrapper">
          <span class="fds-radio-button__label-text">Radio button label</span>
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
    <label class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-radio-button-group fds-radio-button-group--horizontal">
    <div class="fds-radio-button">
      <input type="radio" class="fds-radio-button__input" name="fds-radio-group-helper-text" id="radio-7" checked />
      <label for="radio-7" class="fds-radio-button__label">
        <span class="fds-radio-button__label-mark"></span>
        <span class="fds-radio-button__label-text">Radio button label</span>
      </label>
    </div>
    <div class="fds-radio-button">
      <input type="radio" class="fds-radio-button__input" name="fds-radio-group-helper-text" id="radio-8" />
      <label for="radio-8" class="fds-radio-button__label">
        <span class="fds-radio-button__label-mark"></span>
        <span class="fds-radio-button__label-text">Radio button label</span>
      </label>
    </div>
  </div>
  <div class="fds-form-item__helper-text">Helper text goes here</div>
</fieldset>
```

## State

### Disabled

```html live
<fieldset class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-radio-button-group">
    <div class="fds-radio-button">
      <input type="radio" class="fds-radio-button__input" name="fds-radio-disabled" id="radio-9" checked disabled />
      <label for="radio-9" class="fds-radio-button__label">
        <span class="fds-radio-button__label-mark"></span>
        <span class="fds-radio-button__label-text">Radio button label</span>
      </label>
    </div>
    <div class="fds-radio-button">
      <input type="radio" class="fds-radio-button__input" name="fds-radio-disabled" id="radio-10" disabled />
      <label for="radio-10" class="fds-radio-button__label">
        <span class="fds-radio-button__label-mark"></span>
        <span class="fds-radio-button__label-text">Radio button label</span>
      </label>
    </div>
  </div>
</fieldset>
```