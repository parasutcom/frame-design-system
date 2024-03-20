---
title: Navigation
---

## Types

### Light

```html live
<div class="fds-side-nav">
  <div class="fds-side-nav__header">
    <a class="fds-side-nav__logo">
      <img src="https://mcusercontent.com/542129b0d23244e20a9c0dd7e/images/6448ae70-4e7e-bfff-8eb7-cf06f1b972a5.png" alt="brand_logo" class="fds-side-nav__logo-image" />
    </a>
  </div>
  <div class="fds-side-nav__content">
    <ul class="fds-side-nav__items fds-side-nav__items--top">
      <li class="fds-side-nav__item">
        <a class="fds-side-nav__link">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-newspaper"></i>
          </div>
          <span class="fds-side-nav__link-text">Parent item</span>
        </a>
      </li>
      <li class="fds-side-nav__item">
        <button class="fds-side-nav__link fds-side-nav__link--has-submenu">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-shopping-cart"></i>
          </div>
          <span class="fds-side-nav__link-text">Parent item</span>
          <div class="fds-side-nav__link-icon fds-side-nav__submenu-icon">
            <i class="fa-regular fa-chevron-down"></i>
          </div>
        </button>
        <ul class="fds-side-nav__submenu">
          <li class="fds-side-nav__submenu-item">
            <a class="fds-side-nav__link">
              <span class="fds-side-nav__link-text">Child item</span>
            </a>
          </li>
          <li class="fds-side-nav__submenu-item">
            <a class="fds-side-nav__link">
              <span class="fds-side-nav__link-text">Child item</span>
            </a>
          </li>
          <li class="fds-side-nav__submenu-item">
            <a class="fds-side-nav__link">
              <span class="fds-side-nav__link-text">Child item</span>
            </a>
          </li>
          <li class="fds-side-nav__submenu-item">
            <a class="fds-side-nav__link">
              <span class="fds-side-nav__link-text">Child item</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="fds-side-nav__item">
        <button class="fds-side-nav__link fds-side-nav__link--has-submenu">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-money-bill-wave"></i>
          </div>
          <span class="fds-side-nav__link-text">Parent item</span>
          <div class="fds-side-nav__link-icon fds-side-nav__submenu-icon">
            <i class="fa-regular fa-chevron-down"></i>
          </div>
        </button>
        <ul class="fds-side-nav__submenu">
          <li class="fds-side-nav__submenu-item">
            <a class="fds-side-nav__link">
              <span class="fds-side-nav__link-text">Child item</span>
            </a>
          </li>
          <li class="fds-side-nav__submenu-item">
            <a class="fds-side-nav__link">
              <span class="fds-side-nav__link-text">Child item</span>
            </a>
          </li>
          <li class="fds-side-nav__submenu-item">
            <a class="fds-side-nav__link">
              <span class="fds-side-nav__link-text">Child item</span>
            </a>
          </li>
          <li class="fds-side-nav__submenu-item">
            <a class="fds-side-nav__link">
              <span class="fds-side-nav__link-text">Child item</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="fds-side-nav__item">
        <a class="fds-side-nav__link">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-wallet"></i>
          </div>
          <span class="fds-side-nav__link-text">Parent item</span>
        </a>
      </li>
      <li class="fds-side-nav__item">
        <a class="fds-side-nav__link">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-cubes-stacked"></i>
          </div>
          <span class="fds-side-nav__link-text">Parent item</span>
        </a>
      </li>
    </ul>
    <ul class="fds-side-nav__items fds-side-nav__items--bottom">
      <li class="fds-side-nav__item">
        <a class="fds-side-nav__link">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-grid-2-plus"></i>
          </div>
          <span class="fds-side-nav__link-text">Parent item</span>
        </a>
      </li>
      <li class="fds-side-nav__item">
        <a class="fds-side-nav__link">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-store"></i>
          </div>
          <span class="fds-side-nav__link-text">Parent item</span>
        </a>
      </li>
      <li class="fds-side-nav__item">
        <a class="fds-side-nav__link">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-cog"></i>
          </div>
          <span class="fds-side-nav__link-text">Parent item</span>
        </a>
      </li>
      <li class="fds-side-nav__item">
        <a class="fds-side-nav__link" id="collapse-link">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-arrow-left-to-line"></i>
          </div>
          <span class="fds-side-nav__link-text">Collapse menu</span>
        </a>
      </li>
    </ul>
  </div>
</div>
```

### Dark

```html live
<div class="fds-side-nav fds-side-nav--dark">
  <div class="fds-side-nav__header">
    <a class="fds-side-nav__logo">
      <img src="https://mcusercontent.com/542129b0d23244e20a9c0dd7e/images/6448ae70-4e7e-bfff-8eb7-cf06f1b972a5.png" alt="brand_logo" class="fds-side-nav__logo-image" />
    </a>
  </div>
  <div class="fds-side-nav__content">
    <ul class="fds-side-nav__items fds-side-nav__items--top">
      <li class="fds-side-nav__item">
        <a class="fds-side-nav__link">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-newspaper"></i>
          </div>
          <span class="fds-side-nav__link-text">Parent item</span>
        </a>
      </li>
      <li class="fds-side-nav__item">
        <button class="fds-side-nav__link fds-side-nav__link--has-submenu">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-shopping-cart"></i>
          </div>
          <span class="fds-side-nav__link-text">Parent item</span>
          <div class="fds-side-nav__link-icon fds-side-nav__submenu-icon">
            <i class="fa-regular fa-chevron-down"></i>
          </div>
        </button>
        <ul class="fds-side-nav__submenu">
          <li class="fds-side-nav__submenu-item">
            <a class="fds-side-nav__link">
              <span class="fds-side-nav__link-text">Child item</span>
            </a>
          </li>
          <li class="fds-side-nav__submenu-item">
            <a class="fds-side-nav__link">
              <span class="fds-side-nav__link-text">Child item</span>
            </a>
          </li>
          <li class="fds-side-nav__submenu-item">
            <a class="fds-side-nav__link">
              <span class="fds-side-nav__link-text">Child item</span>
            </a>
          </li>
          <li class="fds-side-nav__submenu-item">
            <a class="fds-side-nav__link">
              <span class="fds-side-nav__link-text">Child item</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="fds-side-nav__item">
        <button class="fds-side-nav__link fds-side-nav__link--has-submenu">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-money-bill-wave"></i>
          </div>
          <span class="fds-side-nav__link-text">Parent item</span>
          <div class="fds-side-nav__link-icon fds-side-nav__submenu-icon">
            <i class="fa-regular fa-chevron-down"></i>
          </div>
        </button>
        <ul class="fds-side-nav__submenu">
          <li class="fds-side-nav__submenu-item">
            <a class="fds-side-nav__link">
              <span class="fds-side-nav__link-text">Child item</span>
            </a>
          </li>
          <li class="fds-side-nav__submenu-item">
            <a class="fds-side-nav__link">
              <span class="fds-side-nav__link-text">Child item</span>
            </a>
          </li>
          <li class="fds-side-nav__submenu-item">
            <a class="fds-side-nav__link">
              <span class="fds-side-nav__link-text">Child item</span>
            </a>
          </li>
          <li class="fds-side-nav__submenu-item">
            <a class="fds-side-nav__link">
              <span class="fds-side-nav__link-text">Child item</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="fds-side-nav__item">
        <a class="fds-side-nav__link">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-wallet"></i>
          </div>
          <span class="fds-side-nav__link-text">Parent item</span>
        </a>
      </li>
      <li class="fds-side-nav__item">
        <a class="fds-side-nav__link">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-cubes-stacked"></i>
          </div>
          <span class="fds-side-nav__link-text">Parent item</span>
        </a>
      </li>
    </ul>
    <ul class="fds-side-nav__items fds-side-nav__items--bottom">
      <li class="fds-side-nav__item">
        <a class="fds-side-nav__link">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-grid-2-plus"></i>
          </div>
          <span class="fds-side-nav__link-text">Parent item</span>
        </a>
      </li>
      <li class="fds-side-nav__item">
        <a class="fds-side-nav__link">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-store"></i>
          </div>
          <span class="fds-side-nav__link-text">Parent item</span>
        </a>
      </li>
      <li class="fds-side-nav__item">
        <a class="fds-side-nav__link">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-cog"></i>
          </div>
          <span class="fds-side-nav__link-text">Parent item</span>
        </a>
      </li>
      <li class="fds-side-nav__item">
        <a class="fds-side-nav__link" id="collapse-link">
          <div class="fds-side-nav__link-icon">
            <i class="fa-duotone fa-arrow-left-to-line"></i>
          </div>
          <span class="fds-side-nav__link-text">Collapse menu</span>
        </a>
      </li>
    </ul>
  </div>
</div>
```