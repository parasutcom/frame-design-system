---
title: Notification
---

## Types

### Toast

```html live
<div class="fds-notification fds-notification--toast fds-notification--information" role="alert">
  <div class="fds-icon">
    <i class="fa-solid fa-circle"></i>
  </div>
  <div class="fds-notification__content">
    <div class="fds-notification__title">Informational notification</div>
    <div class="fds-notification__details">
      <p class="fds-notification__message">An info notification message goes here</p>
    </div>
  </div>
</div>
```

### Line

```html live
<div class="fds-notification fds-notification--information" role="alert">
  <div class="fds-icon">
    <i class="fa-solid fa-circle"></i>
  </div>
  <div class="fds-notification__content">
    <div class="fds-notification__title">Informational notification</div>
    <div class="fds-notification__details">
      <ul class="fds-list fds-list--bulleted" role="list">
        <li class="fds-list__item">An info notification message goes here</li>
        <li class="fds-list__item">An info notification message goes here</li>
      </ul>
    </div>
  </div>
</div>
```

### App

```html live
<div class="fds-notification fds-notification--information fds-notification--inline" role="alert">
  <div class="fds-icon">
    <i class="fa-solid fa-circle"></i>
  </div>
  <div class="fds-notification__content">
    <div class="fds-notification__title">Informational notification</div>
    <div class="fds-notification__details">
      <p class="fds-notification__message">An info notification message goes here</p>
    </div>
  </div>
</div>
```

## Status

### Information

```html live
<div class="fds-notification fds-notification--information" role="alert">
  <div class="fds-icon">
    <i class="fa-solid fa-circle"></i>
  </div>
  <div class="fds-notification__content">
    <div class="fds-notification__title">Informational notification</div>
    <div class="fds-notification__details">
      <ul class="fds-list fds-list--bulleted" role="list">
        <li class="fds-list__item">An info notification message goes here</li>
        <li class="fds-list__item">An info notification message goes here</li>
      </ul>
    </div>
  </div>
</div>
```

### Success

```html live
<div class="fds-notification fds-notification--success" role="alert">
  <div class="fds-icon">
    <i class="fa-solid fa-circle-check"></i>
  </div>
  <div class="fds-notification__content">
    <div class="fds-notification__title">Success notification</div>
    <div class="fds-notification__details">
      <ul class="fds-list fds-list--bulleted" role="list">
        <li class="fds-list__item">A success notification message goes here</li>
        <li class="fds-list__item">A success notification message goes here</li>
      </ul>
    </div>
  </div>
</div>
```

### Warning

```html live
<div class="fds-notification fds-notification--warning" role="alert">
  <div class="fds-icon">
    <i class="fa-solid fa-triangle-exclamation"></i>
  </div>
  <div class="fds-notification__content">
    <div class="fds-notification__title">Warning notification</div>
    <div class="fds-notification__details">
      <ul class="fds-list fds-list--bulleted" role="list">
        <li class="fds-list__item">A warning notification message goes here</li>
        <li class="fds-list__item">A warning notification message goes here</li>
      </ul>
    </div>
  </div>
</div>
```

### Error

```html live
<div class="fds-notification fds-notification--error" role="alert">
  <div class="fds-icon">
    <i class="fa-solid fa-circle-minus"></i>
  </div>
  <div class="fds-notification__content">
    <div class="fds-notification__title">Error notification</div>
    <div class="fds-notification__details">
      <ul class="fds-list fds-list--bulleted" role="list">
        <li class="fds-list__item">An error notification message goes here</li>
        <li class="fds-list__item">An error notification message goes here</li>
      </ul>
    </div>
  </div>
</div>
```

## Dissmis notification

```html live
<div class="demo-vertical">
  <div class="fds-notification fds-notification--toast fds-notification--information" role="alert">
    <div class="fds-icon">
      <i class="fa-solid fa-circle"></i>
    </div>
    <div class="fds-notification__content">
      <div class="fds-notification__title">Informational notification</div>
      <div class="fds-notification__details">
        <p class="fds-notification__message">An info notification message goes here</p>
      </div>
    </div>
    <button class="fds-notification__btn-close">
      <span class="fds-icon">
        <i class="fa-light fa-xmark"></i>
      </span>
    </button>
  </div>

  <div class="fds-notification fds-notification--information" role="alert">
    <div class="fds-icon">
      <i class="fa-solid fa-circle"></i>
    </div>
    <div class="fds-notification__content">
      <div class="fds-notification__title">Informational notification</div>
      <div class="fds-notification__details">
        <ul class="fds-list fds-list--bulleted" role="list">
          <li class="fds-list__item">An info notification message goes here</li>
          <li class="fds-list__item">An info notification message goes here</li>
        </ul>
      </div>
    </div>
    <button class="fds-notification__btn-close">
      <span class="fds-icon">
        <i class="fa-light fa-xmark"></i>
      </span>
    </button>
  </div>

  <div class="fds-notification fds-notification--information fds-notification--inline" role="alert">
    <div class="fds-icon">
      <i class="fa-solid fa-circle"></i>
    </div>
    <div class="fds-notification__content">
      <div class="fds-notification__title">Informational notification</div>
      <div class="fds-notification__details">
        <p class="fds-notification__message">An info notification message goes here</p>
      </div>
    </div>
    <button class="fds-notification__btn-close">
      <span class="fds-icon">
        <i class="fa-light fa-xmark"></i>
      </span>
    </button>
  </div>
</div>
```
