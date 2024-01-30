---
title: File Uploader Input
---

## Types

### Default

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="file-input-default" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-input-file-uploader">
    <input type="file" class="fds-file-uploader__input" id="file-input-default" />
    <div class="fds-input-file-uploader__zone">
      <div class="fds-input-file-uploader__inner-wrapper">
        <span class="fds-input-file-uploader__placeholder">No file selected</span>
        <span class="fds-input-file-uploader__assistive-text">Upload or drag here</span>
      </div>
      <button class="fds-btn fds-btn--outline fds-btn--sm">
        <span class="fds-btn__label">Browse file</span>
      </button>
    </div>
  </div>
  <div class="fds-form-item__helper-text">Helper text goes here</div>
</div>
```

### Filled

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="file-input-filled" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-input-file-uploader">
    <input type="file" class="fds-file-uploader__input" id="file-input-filled" />
    <div class="fds-file-uploader__item-container">
      <div class="fds-file-uploader__item">
        <div class="fds-badge">
          <span class="fds-icon fds-icon--xl">
            <i class="fa-regular fa-file"></i>
          </span>
        </div>
        <div class="fds-file-uploader__item-info">
          <p class="fds-file-uploader__item-name">fisfatura_uzunisims...</p>
          <span class="fds-file-uploader__item-size">1.28KB</span>
        </div>
        <div class="fds-file-uploader__item-actions">
          <button class="fds-btn fds-btn--ghost fds-btn--icon fds-btn--sm">
            <span class="fds-icon"><i class="fa-regular fa-magnifying-glass"></i></span>
          </button>
          <button class="fds-btn fds-btn--ghost fds-btn--icon fds-btn--sm">
            <span class="fds-icon"><i class="fa-regular fa-trash-can"></i></span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="fds-form-item__helper-text">Helper text goes here</div>
</div>
```

## States

### Dragging

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="file-input-drag" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-input-file-uploader fds-input-file-uploader--dragging">
    <input type="file" class="fds-file-uploader__input" id="file-input-drag" />
    <div class="fds-input-file-uploader__overlay">
      <span class="fds-input-file-uploader__placeholder">Drop here</span>
    </div>
    <div class="fds-input-file-uploader__zone">
      <div class="fds-input-file-uploader__inner-wrapper">
        <span class="fds-input-file-uploader__placeholder">No file selected</span>
        <span class="fds-input-file-uploader__assistive-text">Upload or drag here</span>
      </div>
      <button class="fds-btn fds-btn--outline fds-btn--sm">
        <span class="fds-btn__label">Browse file</span>
      </button>
    </div>
  </div>
  <div class="fds-form-item__helper-text">Helper text goes here</div>
</div>
```

### Busy

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="file-input-busy" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-input-file-uploader fds-input-file-uploader--busy">
    <input type="file" class="fds-file-uploader__input" id="file-input-busy" />
    <div class="fds-input-file-uploader__busy">
      <div role="status" aria-label="Loading process" class="fds-spinner fds-spinner--sm fds-spinner--primary">
        <span class="fds-icon fds-spinner__icon">
          <i class="fa-regular fa-spinner-third"></i>
        </span>
      </div>
      <p class="fds-input-file-uploader__item-name">fisfatura_uzunisims...</p>
      <button class="fds-input-file-uploader__btn-close">
        <span class="fds-icon">
          <i class="fa-light fa-xmark"></i>
        </span>
      </button>
    </div>
    <div class="fds-input-file-uploader__zone">
      <div class="fds-input-file-uploader__inner-wrapper">
        <span class="fds-input-file-uploader__placeholder">No file selected</span>
        <span class="fds-input-file-uploader__assistive-text">Upload or drag here</span>
      </div>
      <button class="fds-btn fds-btn--outline fds-btn--sm">
        <span class="fds-btn__label">Browse file</span>
      </button>
    </div>
  </div>
  <div class="fds-form-item__helper-text">Helper text goes here</div>
</div>
```

### Invalid

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="file-input-invalid" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-input-file-uploader fds-input-file-uploader--invalid">
    <input type="file" class="fds-file-uploader__input" id="file-input-invalid" />
    <div class="fds-input-file-uploader__zone">
      <div class="fds-input-file-uploader__inner-wrapper">
        <span class="fds-input-file-uploader__placeholder">No file selected</span>
        <span class="fds-input-file-uploader__assistive-text">Upload or drag here</span>
      </div>
      <button class="fds-btn fds-btn--outline fds-btn--sm">
        <span class="fds-btn__label">Browse file</span>
      </button>
      <div class="fds-input-file-uploader__error-icon">
        <span class="fds-icon">
          <i class="fa-solid fa-exclamation-circle"></i>
        </span>
      </div>
    </div>
  </div>
  <div class="fds-form-item__helper-text fds-form-item__helper-text--invalid">Error message goes here</div>
</div>
```

### Disabled

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="file-input-disabled" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-input-file-uploader fds-input-file-uploader--disabled">
    <input type="file" class="fds-file-uploader__input" id="file-input-disabled" disabled />
    <div class="fds-input-file-uploader__zone">
      <div class="fds-input-file-uploader__inner-wrapper">
        <span class="fds-input-file-uploader__placeholder">No file selected</span>
        <span class="fds-input-file-uploader__assistive-text">Upload or drag here</span>
      </div>
      <button class="fds-btn fds-btn--outline fds-btn--sm fds-btn--disabled" disabled>
        <span class="fds-btn__label">Browse file</span>
      </button>
    </div>
  </div>
  <div class="fds-form-item__helper-text">Helper text goes here</div>
</div>
```

### Filled disabled

```html live
<div class="fds-form-item">
  <div class="fds-form-item__label-wrapper">
    <label for="file-input-filled-disabled" class="fds-form-item__label">Label</label>
  </div>
  <div class="fds-input-file-uploader fds-input-file-uploader--disabled">
    <input type="file" class="fds-file-uploader__input" id="file-input-filled-disabled" />
    <div class="fds-file-uploader__item-container">
      <div class="fds-file-uploader__item">
        <div class="fds-badge">
          <span class="fds-icon fds-icon--xl">
            <i class="fa-regular fa-file"></i>
          </span>
        </div>
        <div class="fds-file-uploader__item-info">
          <p class="fds-file-uploader__item-name">fisfatura_uzunisims...</p>
          <span class="fds-file-uploader__item-size">1.28KB</span>
        </div>
        <div class="fds-file-uploader__item-actions">
          <button class="fds-btn fds-btn--ghost fds-btn--icon fds-btn--sm fds-btn--disabled" disabled>
            <span class="fds-icon"><i class="fa-regular fa-magnifying-glass"></i></span>
          </button>
          <button class="fds-btn fds-btn--ghost fds-btn--icon fds-btn--sm fds-btn--disabled" disabled>
            <span class="fds-icon"><i class="fa-regular fa-trash-can"></i></span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="fds-form-item__helper-text">Helper text goes here</div>
</div>
```