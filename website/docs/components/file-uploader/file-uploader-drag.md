---
title: File Uploader Drag
---

## Types

### Default

```html live
<div class="fds-file-uploader">
  <input type="file" class="fds-file-uploader__input" id="file-uploader-default" />
  <div class="fds-file-uploader__dropzone">
    <div class="fds-badge">
      <span class="fds-icon fds-icon--xl">
        <i class="fa-regular fa-upload"></i>
      </span>
    </div>
    <span class="fds-file-uploader__placeholder">Drag or select your file</span>
    <span class="fds-file-uploader__placeholder">or</span>
    <button type="button" class="fds-btn fds-btn--outline fds-btn--sm">
      <span class="fds-btn__label">Browse file</span>
    </button>
  </div>
</div>
```

### Filled

```html live
<div class="fds-file-uploader">
  <input type="file" class="fds-file-uploader__input" id="file-uploader-filled" />
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
        <button class="fds-btn fds-btn--ghost fds-btn--sm">
          <span class="fds-btn__label">Remove</span>
        </button>
        <button class="fds-btn fds-btn--outline fds-btn--sm">
          <span class="fds-btn__label">Change file</span>
        </button>
      </div>
    </div>
  </div>
</div>
```

## States

### Dragging

```html live
<div class="fds-file-uploader fds-file-uploader--dragging">
  <input type="file" class="fds-file-uploader__input" id="file-uploader-dragging" />
  <div class="fds-file-uploader__overlay">
    <div class="fds-badge">
      <span class="fds-icon fds-icon--xl">
        <i class="fa-regular fa-upload"></i>
      </span>
    </div>
    <span class="fds-file-uploader__placeholder">Drop here</span>
  </div>
  <div class="fds-file-uploader__dropzone">
    <div class="fds-badge">
      <span class="fds-icon fds-icon--xl">
        <i class="fa-regular fa-upload"></i>
      </span>
    </div>
    <span class="fds-file-uploader__placeholder">Drag or select your file</span>
    <span class="fds-file-uploader__placeholder">or</span>
    <button class="fds-btn fds-btn--outline fds-btn--sm">
      <span class="fds-btn__label">Browse file</span>
    </button>
  </div>
</div>
```

### Busy

```html live
<div class="fds-file-uploader fds-file-uploader--busy">
  <input type="file" class="fds-file-uploader__input" id="file-uploader-busy" />
  <div class="fds-file-uploader__busy">
    <div role="status" aria-label="Loading process" class="fds-spinner fds-spinner--primary">
      <span class="fds-icon fds-icon--4xl fds-spinner__icon">
        <i class="fa-regular fa-spinner-third"></i>
      </span>
      <div class="fds-spinner__label">Uploading...</div>
    </div>
  </div>
  <div class="fds-file-uploader__dropzone">
    <div class="fds-badge">
      <span class="fds-icon fds-icon--xl">
        <i class="fa-regular fa-bank"></i>
      </span>
    </div>
    <span class="fds-file-uploader__placeholder">Drag or select your file</span>
    <span class="fds-file-uploader__placeholder">or</span>
    <button class="fds-btn fds-btn--outline fds-btn--sm">
      <span class="fds-btn__label">Browse file</span>
    </button>
  </div>
</div>
```

### Invalid

```html live
<div class="fds-file-uploader fds-file-uploader--invalid">
  <input type="file" class="fds-file-uploader__input" id="file-uploader-invalid" />
  <div class="fds-file-uploader__dropzone">
    <div class="fds-badge">
      <span class="fds-icon fds-icon--xl">
        <i class="fa-regular fa-bank"></i>
      </span>
    </div>
    <span class="fds-file-uploader__placeholder">Drag or select your file</span>
    <span class="fds-file-uploader__placeholder">or</span>
    <button class="fds-btn fds-btn--outline fds-btn--sm">
      <span class="fds-btn__label">Browse file</span>
    </button>
  </div>
</div>
```

### Disabled

```html live
<div class="fds-file-uploader fds-file-uploader--disabled">
  <input type="file" class="fds-file-uploader__input" id="file-uploader-disabled" disabled />
  <div class="fds-file-uploader__dropzone">
    <div class="fds-badge">
      <span class="fds-icon fds-icon--xl">
        <i class="fa-regular fa-bank"></i>
      </span>
    </div>
    <span class="fds-file-uploader__placeholder">Drag or select your file</span>
    <span class="fds-file-uploader__placeholder">or</span>
    <button class="fds-btn fds-btn--outline fds-btn--sm fds-btn--disabled">
      <span class="fds-btn__label">Browse file</span>
    </button>
  </div>
</div>
```

### Filled disabled

```html live
<div class="fds-file-uploader fds-file-uploader--disabled"> 
  <input type="file" class="fds-file-uploader__input" id="file-uploader-filled-disabled" disabled />
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
        <button class="fds-btn fds-btn--ghost fds-btn--sm fds-btn--disabled" disabled>
          <span class="fds-btn__label">Remove</span>
        </button>
        <button class="fds-btn fds-btn--outline fds-btn--sm fds-btn--disabled" disabled>
          <span class="fds-btn__label">Change file</span>
        </button>
      </div>
    </div>
  </div>
</div>
```