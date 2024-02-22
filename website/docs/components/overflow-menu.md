---
title: Overflow Menu
---

:::warning
Inline styles and custom javascript in these examples are for demo purposes.
:::

## Trigger types

### Button

```html live
<div class="fds-overflow-menu">
  <button class="fds-btn fds-btn--sm fds-btn--secondary fds-btn--icon">
    <span class="fds-icon">
      <i class="fa-regular fa-ellipsis-vertical"></i>
    </span>
  </button>
  <ul class="fds-overflow-menu__options" tabindex="-1" role="menu">
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Edit</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Download</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Add to Favourites</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Move to Project Archive for Long-Term Storage</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option fds-overflow-menu__option--disabled" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Archive</span>
      </a>
    </li>
    <li class="fds-overflow-menu__seperator"></li>
    <li class="fds-overflow-menu__option fds-overflow-menu__option--destructive" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Delete</span>
      </a>
    </li>
  </ul>
</div>
```

### Input

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
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <span class="fds-overflow-menu__option-label">Option 5</span>
        </a>
      </li>
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <span class="fds-overflow-menu__option-label">Option 6</span>
        </a>
      </li>
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <span class="fds-overflow-menu__option-label">Option 7</span>
        </a>
      </li>
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <span class="fds-overflow-menu__option-label">Option 8</span>
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

## Placement

### Left

```html live
<div class="fds-overflow-menu">
  <button class="fds-btn fds-btn--sm fds-btn--secondary fds-btn--icon">
    <span class="fds-icon">
      <i class="fa-regular fa-ellipsis-vertical"></i>
    </span>
  </button>
  <ul class="fds-overflow-menu__options" tabindex="-1" role="menu">
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Edit</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Download</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Add to Favourites</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Move to Project Archive for Long-Term Storage</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option fds-overflow-menu__option--disabled" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Archive</span>
      </a>
    </li>
    <li class="fds-overflow-menu__seperator"></li>
    <li class="fds-overflow-menu__option fds-overflow-menu__option--destructive" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Delete</span>
      </a>
    </li>
  </ul>
</div>
```

### Right

```html live
<div class="fds-overflow-menu fds-overflow-menu--right" style={{ textAlign: 'right' }}>
  <button class="fds-btn fds-btn--sm fds-btn--secondary fds-btn--icon">
    <span class="fds-icon">
      <i class="fa-regular fa-ellipsis-vertical"></i>
    </span>
  </button>
  <ul class="fds-overflow-menu__options" tabindex="-1" role="menu">
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Edit</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Download</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Add to Favourites</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Move to Project Archive for Long-Term Storage</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option fds-overflow-menu__option--disabled" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Archive</span>
      </a>
    </li>
    <li class="fds-overflow-menu__seperator"></li>
    <li class="fds-overflow-menu__option fds-overflow-menu__option--destructive" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Delete</span>
      </a>
    </li>
  </ul>
</div>
```

## Item types

### Label

```html live
<div class="fds-overflow-menu">
  <button class="fds-btn fds-btn--sm fds-btn--secondary fds-btn--icon">
    <span class="fds-icon">
      <i class="fa-regular fa-ellipsis-vertical"></i>
    </span>
  </button>
  <ul class="fds-overflow-menu__options" tabindex="-1" role="menu">
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Edit</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Download</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Add to Favourites</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Move to Project Archive for Long-Term Storage</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option fds-overflow-menu__option--disabled" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Archive</span>
      </a>
    </li>
    <li class="fds-overflow-menu__seperator"></li>
    <li class="fds-overflow-menu__option fds-overflow-menu__option--destructive" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Delete</span>
      </a>
    </li>
  </ul>
</div>
```

### Checkbox

```html live
<div class="fds-overflow-menu">
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <button type="button" class="fds-select-input">
      <span class="fds-select-input__label">Option</span>
    </button>
    <ul class="fds-overflow-menu__options fds-overflow-menu__options--lg" tabindex="-1" role="menu">
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <div class="fds-checkbox">
            <input type="checkbox" class="fds-checkbox__input" name="checkbox-1" id="checkbox-1" />
            <label for="checkbox-1" class="fds-checkbox__label">
              <span class="fds-checkbox__label-mark"></span>
              <span class="fds-checkbox__label-text">Checkbox Label 1</span>
            </label>
          </div>
        </a>
      </li>
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <div class="fds-checkbox">
            <input type="checkbox" class="fds-checkbox__input" name="checkbox-2" id="checkbox-2" />
            <label for="checkbox-2" class="fds-checkbox__label">
              <span class="fds-checkbox__label-mark"></span>
              <span class="fds-checkbox__label-text">Checkbox Label 2</span>
            </label>
          </div>
        </a>
      </li>
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <div class="fds-checkbox">
            <input type="checkbox" class="fds-checkbox__input" name="checkbox-3" id="checkbox-3" />
            <label for="checkbox-3" class="fds-checkbox__label">
              <span class="fds-checkbox__label-mark"></span>
              <span class="fds-checkbox__label-text">Checkbox Label 3</span>
            </label>
          </div>
        </a>
      </li>
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <div class="fds-checkbox">
            <input type="checkbox" class="fds-checkbox__input" name="checkbox-4" id="checkbox-4" />
            <label for="checkbox-4" class="fds-checkbox__label">
              <span class="fds-checkbox__label-mark"></span>
              <span class="fds-checkbox__label-text">Checkbox Label 4</span>
            </label>
          </div>
        </a>
      </li>
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <div class="fds-checkbox">
            <input type="checkbox" class="fds-checkbox__input" name="checkbox-5" id="checkbox-5" />
            <label for="checkbox-5" class="fds-checkbox__label">
              <span class="fds-checkbox__label-mark"></span>
              <span class="fds-checkbox__label-text">Checkbox Label 5</span>
            </label>
          </div>
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

### Tag

```html live
<div class="fds-overflow-menu">
  <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
    <button type="button" class="fds-select-input">
      <span class="fds-select-input__label">Option</span>
    </button>
    <ul class="fds-overflow-menu__options fds-overflow-menu__options--lg" tabindex="-1" role="menu">
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <div class="fds-tag fds-tag--interactive">
            <span class="fds-tag__label">Tag label 1</span>
          </div>
        </a>
      </li>
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <div class="fds-tag fds-tag--interactive">
            <span class="fds-tag__label">Tag label 2</span>
          </div>
        </a>
      </li>
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <div class="fds-tag fds-tag--interactive">
            <span class="fds-tag__label">Tag label 3</span>
          </div>
        </a>
      </li>
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <div class="fds-tag fds-tag--interactive">
            <span class="fds-tag__label">Tag label 4</span>
          </div>
        </a>
      </li>
      <li class="fds-overflow-menu__option" role="none">
        <a class="fds-overflow-menu__option-btn">
          <div class="fds-tag fds-tag--interactive">
            <span class="fds-tag__label">Tag label 5</span>
          </div>
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

## Item with icon

### Left side

```html live
<div class="fds-overflow-menu">
  <button class="fds-btn fds-btn--sm fds-btn--secondary fds-btn--icon">
    <span class="fds-icon">
      <i class="fa-regular fa-ellipsis-vertical"></i>
    </span>
  </button>
  <ul class="fds-overflow-menu__options" tabindex="-1" role="menu">
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-icon fds-overflow-menu__option-prefix-icon">
          <i class="fa-regular fa-pen-to-square"></i>
        </span>
        <span class="fds-overflow-menu__option-label">Edit</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-icon fds-overflow-menu__option-prefix-icon">
          <i class="fa-regular fa-download"></i>
        </span>
        <span class="fds-overflow-menu__option-label">Download</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-icon fds-overflow-menu__option-prefix-icon">
          <i class="fa-regular fa-star"></i>
        </span>
        <span class="fds-overflow-menu__option-label">Add to Favourites</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-icon fds-overflow-menu__option-prefix-icon">
          <i class="fa-regular fa-share"></i>
        </span>
        <span class="fds-overflow-menu__option-label">Move to Project Archive for Long-Term Storage</span>
      </a>
    </li>
    <li class="fds-overflow-menu__option fds-overflow-menu__option--disabled" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-icon fds-overflow-menu__option-prefix-icon">
          <i class="fa-regular fa-box-archive"></i>
        </span>
        <span class="fds-overflow-menu__option-label">Archive</span>
      </a>
    </li>
    <li class="fds-overflow-menu__seperator"></li>
    <li class="fds-overflow-menu__option fds-overflow-menu__option--destructive" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-icon fds-overflow-menu__option-prefix-icon">
          <i class="fa-regular fa-trash"></i>
        </span>
        <span class="fds-overflow-menu__option-label">Delete</span>
      </a>
    </li>
  </ul>
</div>
```

### Right side

```html live
<div class="fds-overflow-menu">
  <button class="fds-btn fds-btn--sm fds-btn--secondary fds-btn--icon">
    <span class="fds-icon">
      <i class="fa-regular fa-ellipsis-vertical"></i>
    </span>
  </button>
  <ul class="fds-overflow-menu__options" tabindex="-1" role="menu">
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Edit</span>
        <span class="fds-icon fds-overflow-menu__option-suffix-icon">
          <i class="fa-regular fa-chevron-right"></i>
        </span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Download</span>
        <span class="fds-icon fds-overflow-menu__option-suffix-icon">
          <i class="fa-regular fa-chevron-right"></i>
        </span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Add to Favourites</span>
        <span class="fds-icon fds-overflow-menu__option-suffix-icon">
          <i class="fa-regular fa-chevron-right"></i>
        </span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Move to Project Archive for Long-Term Storage</span>
        <span class="fds-icon fds-overflow-menu__option-suffix-icon">
          <i class="fa-regular fa-chevron-right"></i>
        </span>
      </a>
    </li>
    <li class="fds-overflow-menu__option fds-overflow-menu__option--disabled" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Archive</span>
        <span class="fds-icon fds-overflow-menu__option-suffix-icon">
          <i class="fa-regular fa-chevron-right"></i>
        </span>
      </a>
    </li>
    <li class="fds-overflow-menu__seperator"></li>
    <li class="fds-overflow-menu__option fds-overflow-menu__option--destructive" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-overflow-menu__option-label">Delete</span>
        <span class="fds-icon fds-overflow-menu__option-suffix-icon">
          <i class="fa-regular fa-chevron-right"></i>
        </span>
      </a>
    </li>
  </ul>
</div>
```

### Both side

```html live
<div class="fds-overflow-menu">
  <button class="fds-btn fds-btn--sm fds-btn--secondary fds-btn--icon">
    <span class="fds-icon">
      <i class="fa-regular fa-ellipsis-vertical"></i>
    </span>
  </button>
  <ul class="fds-overflow-menu__options" tabindex="-1" role="menu">
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-icon fds-overflow-menu__option-prefix-icon">
          <i class="fa-regular fa-pen-to-square"></i>
        </span>
        <span class="fds-overflow-menu__option-label">Edit</span>
        <span class="fds-icon fds-overflow-menu__option-suffix-icon">
          <i class="fa-regular fa-chevron-right"></i>
        </span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-icon fds-overflow-menu__option-prefix-icon">
          <i class="fa-regular fa-download"></i>
        </span>
        <span class="fds-overflow-menu__option-label">Download</span>
        <span class="fds-icon fds-overflow-menu__option-suffix-icon">
          <i class="fa-regular fa-chevron-right"></i>
        </span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-icon fds-overflow-menu__option-prefix-icon">
          <i class="fa-regular fa-star"></i>
        </span>
        <span class="fds-overflow-menu__option-label">Add to Favourites</span>
        <span class="fds-icon fds-overflow-menu__option-suffix-icon">
          <i class="fa-regular fa-chevron-right"></i>
        </span>
      </a>
    </li>
    <li class="fds-overflow-menu__option" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-icon fds-overflow-menu__option-prefix-icon">
          <i class="fa-regular fa-share"></i>
        </span>
        <span class="fds-overflow-menu__option-label">Move to Project Archive for Long-Term Storage</span>
        <span class="fds-icon fds-overflow-menu__option-suffix-icon">
          <i class="fa-regular fa-chevron-right"></i>
        </span>
      </a>
    </li>
    <li class="fds-overflow-menu__option fds-overflow-menu__option--disabled" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-icon fds-overflow-menu__option-prefix-icon">
          <i class="fa-regular fa-box-archive"></i>
        </span>
        <span class="fds-overflow-menu__option-label">Archive</span>
        <span class="fds-icon fds-overflow-menu__option-suffix-icon">
          <i class="fa-regular fa-chevron-right"></i>
        </span>
      </a>
    </li>
    <li class="fds-overflow-menu__seperator"></li>
    <li class="fds-overflow-menu__option fds-overflow-menu__option--destructive" role="none">
      <a class="fds-overflow-menu__option-btn">
        <span class="fds-icon fds-overflow-menu__option-prefix-icon">
          <i class="fa-regular fa-trash"></i>
        </span>
        <span class="fds-overflow-menu__option-label">Delete</span>
        <span class="fds-icon fds-overflow-menu__option-suffix-icon">
          <i class="fa-regular fa-chevron-right"></i>
        </span>
      </a>
    </li>
  </ul>
</div>
```

## Grouping with headings

```html live
<div class="fds-overflow-menu">
  <button class="fds-btn fds-btn--sm fds-btn--secondary fds-btn--icon">
    <span class="fds-icon">
      <i class="fa-regular fa-ellipsis-vertical"></i>
    </span>
  </button>
  <ul class="fds-overflow-menu__options" tabindex="-1" role="menu">
    <li class="fds-overflow-menu__header">
      <span>Group A</span>
    </li>
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
    <li class="fds-overflow-menu__seperator"></li>
     <li class="fds-overflow-menu__header">
      <span>Group B</span>
    </li>
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
  </ul>
</div>
```