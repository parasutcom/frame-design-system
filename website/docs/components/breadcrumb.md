---
title: Breadcrumb
---

## Types

### Default

```html live
<nav role="navigation" aria-label="breadcrumb">
  <ol class="fds-breadcrumb">
    <li class="fds-breadcrumb__item">
      <a href="#" class="fds-breadcrumb__link">Breadcrumb 1</a>
    </li>
    <li class="fds-breadcrumb__item">
      <a href="#" class="fds-breadcrumb__link">Breadcrumb 2</a>
    </li>
    <li class="fds-breadcrumb__item">
      <a href="#" class="fds-breadcrumb__link fds-breadcrumb__link--current">Breadcrumb 3</a>
    </li>
  </ol>
</nav>
```

### Multiple

```html live
<nav role="navigation" aria-label="breadcrumb">
  <ol class="fds-breadcrumb fds-breadcrumb--multiple">
    <li class="fds-breadcrumb__item">
      <a href="#" class="fds-breadcrumb__link">Breadcrumb 1</a>
    </li>
    <li class="fds-breadcrumb__item">
      <a href="#" class="fds-breadcrumb__link">Breadcrumb 2</a>
    </li>
    <li class="fds-breadcrumb__item">
      <a href="#" class="fds-breadcrumb__link fds-breadcrumb__link--current">Breadcrumb 3</a>
    </li>
  </ol>
</nav>
```

## Size

### Default

```html live
<nav role="navigation" aria-label="breadcrumb">
  <ol class="fds-breadcrumb">
    <li class="fds-breadcrumb__item">
      <a href="#" class="fds-breadcrumb__link">Breadcrumb 1</a>
    </li>
    <li class="fds-breadcrumb__item">
      <a href="#" class="fds-breadcrumb__link">Breadcrumb 2</a>
    </li>
    <li class="fds-breadcrumb__item">
      <a href="#" class="fds-breadcrumb__link fds-breadcrumb__link--current">Breadcrumb 3</a>
    </li>
  </ol>
</nav>
```

### Small

```html live
<nav role="navigation" aria-label="breadcrumb">
  <ol class="fds-breadcrumb fds-breadcrumb--sm">
    <li class="fds-breadcrumb__item">
      <a href="#" class="fds-breadcrumb__link">Breadcrumb 1</a>
    </li>
    <li class="fds-breadcrumb__item">
      <a href="#" class="fds-breadcrumb__link">Breadcrumb 2</a>
    </li>
    <li class="fds-breadcrumb__item">
      <a href="#" class="fds-breadcrumb__link fds-breadcrumb__link--current">Breadcrumb 3</a>
    </li>
  </ol>
</nav>
```

## With overflow menu

```html live
<nav role="navigation" aria-label="breadcrumb">
  <ol class="fds-breadcrumb">
    <li class="fds-breadcrumb__item">
      <a href="#" class="fds-breadcrumb__link">Breadcrumb 1</a>
    </li>
    <li class="fds-breadcrumb__item">
      <div class="fds-overflow-menu fds-overflow-menu--open">
        <button class="fds-btn fds-btn--ghost fds-btn--icon fds-btn--sm">
          <span class="fds-icon fds-btn__icon"><i class="fa-regular fa-ellipsis"></i></span>
        </button>
        <ul class="fds-overflow-menu__options" tabindex="-1" role="menu">
          <li class="fds-overflow-menu__option">
            <a href="#" class="fds-overflow-menu__option-btn">
              <span class="fds-overflow-menu__option-label">Breadcrumb 2</span>
            </a>
          </li>
          <li class="fds-overflow-menu__option">
            <a href="#" class="fds-overflow-menu__option-btn">
              <span class="fds-overflow-menu__option-label">Breadcrumb 3</span>
            </a>
          </li>
          <li class="fds-overflow-menu__option">
            <a href="#" class="fds-overflow-menu__option-btn">
              <span class="fds-overflow-menu__option-label">Breadcrumb 4</span>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li class="fds-breadcrumb__item">
      <a href="#" class="fds-breadcrumb__link fds-breadcrumb__link--current">Breadcrumb 5</a>
    </li>
  </ol>
</nav>
```