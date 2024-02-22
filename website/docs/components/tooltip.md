---
title: Tooltip
---

:::warning
Custom javascript in these examples are for demo purposes.
:::

## Default

```html live
<div class="demo justify-center min-h-200">
  <div class="fds-tooltip fds-tooltip--top">
    <span class="fds-icon" aria-describedby="tooltip">
      <i class="fa-regular fa-circle-info"></i>
    </span>
    <div class="fds-tooltip__container" role="tooltip" id="tooltip">
      <div class="fds-tooltip__content">
        This box shows the maximum amount of text that should be displayed.
      </div>
      <span class="fds-tooltip__caret"></span>
    </div>
  </div>
</div>
```

## With interactive

```html live
<div class="demo justify-center min-h-200">
  <div class="fds-tooltip fds-tooltip--top">
    <span class="fds-icon" aria-describedby="tooltip">
      <i class="fa-regular fa-circle-info"></i>
    </span>
    <div class="fds-tooltip__container" role="tooltip" id="tooltip">
      <div class="fds-tooltip__content">
        Tooltip label
        <button class="fds-tooltip__btn">
          <span class="fds-icon">
            <i class="fa-light fa-copy"></i>
          </span>
        </button>
      </div>
      <span class="fds-tooltip__caret"></span>
    </div>
  </div>
  <div class="fds-tooltip fds-tooltip--top">
    <span class="fds-icon" aria-describedby="tooltip">
      <i class="fa-regular fa-circle-info"></i>
    </span>
    <div class="fds-tooltip__container" role="tooltip" id="tooltip">
      <div class="fds-tooltip__content">
        This box shows the maximum amount of text that should be displayed.
        <a href="#" class="fds-link fds-link--dark fds-link--standalone">
          Link
          <div class="fds-link__icon">
            <span class="fds-icon fds-icon--xs"><i class="fa-regular fa-arrow-up-right-from-square"></i></span>
          </div>
        </a>
      </div>
      <span class="fds-tooltip__caret"></span>
    </div>
  </div>
</div>
```

## Placement

### Top

```html live
<div class="demo justify-center min-h-200">
  <div class="fds-tooltip fds-tooltip--top-start">
    <span class="fds-icon" aria-describedby="tooltip">
      <i class="fa-regular fa-circle-info"></i>
    </span>
    <div class="fds-tooltip__container" role="tooltip" id="tooltip">
      <div class="fds-tooltip__content">
        This box shows the maximum amount of text that should be displayed.
      </div>
      <span class="fds-tooltip__caret"></span>
    </div>
  </div>

  <div class="fds-tooltip fds-tooltip--top">
    <span class="fds-icon" aria-describedby="tooltip">
      <i class="fa-regular fa-circle-info"></i>
    </span>
    <div class="fds-tooltip__container" role="tooltip" id="tooltip">
      <div class="fds-tooltip__content">
        This box shows the maximum amount of text that should be displayed.
      </div>
      <span class="fds-tooltip__caret"></span>
    </div>
  </div>

  <div class="fds-tooltip fds-tooltip--top-end">
    <span class="fds-icon" aria-describedby="tooltip">
      <i class="fa-regular fa-circle-info"></i>
    </span>
    <div class="fds-tooltip__container" role="tooltip" id="tooltip">
      <div class="fds-tooltip__content">
        This box shows the maximum amount of text that should be displayed.
      </div>
      <span class="fds-tooltip__caret"></span>
    </div>
  </div>
</div>
```

### Bottom

```html live
<div class="demo justify-center min-h-200">
  <div class="fds-tooltip fds-tooltip--bottom-start">
    <span class="fds-icon" aria-describedby="tooltip">
      <i class="fa-regular fa-circle-info"></i>
    </span>
    <div class="fds-tooltip__container" role="tooltip" id="tooltip">
      <div class="fds-tooltip__content">
        This box shows the maximum amount of text that should be displayed.
      </div>
      <span class="fds-tooltip__caret"></span>
    </div>
  </div>

  <div class="fds-tooltip fds-tooltip--bottom">
    <span class="fds-icon" aria-describedby="tooltip">
      <i class="fa-regular fa-circle-info"></i>
    </span>
    <div class="fds-tooltip__container" role="tooltip" id="tooltip">
      <div class="fds-tooltip__content">
        This box shows the maximum amount of text that should be displayed.
      </div>
      <span class="fds-tooltip__caret"></span>
    </div>
  </div>

  <div class="fds-tooltip fds-tooltip--bottom-end">
    <span class="fds-icon" aria-describedby="tooltip">
      <i class="fa-regular fa-circle-info"></i>
    </span>
    <div class="fds-tooltip__container" role="tooltip" id="tooltip">
      <div class="fds-tooltip__content">
        This box shows the maximum amount of text that should be displayed.
      </div>
      <span class="fds-tooltip__caret"></span>
    </div>
  </div>
</div>
```

### Right

```html live
<div class="demo justify-center min-h-200">
  <div class="fds-tooltip fds-tooltip--right-start">
    <span class="fds-icon" aria-describedby="tooltip">
      <i class="fa-regular fa-circle-info"></i>
    </span>
    <div class="fds-tooltip__container" role="tooltip" id="tooltip">
      <div class="fds-tooltip__content">
        This box shows the maximum amount of text that should be displayed.
      </div>
      <span class="fds-tooltip__caret"></span>
    </div>
  </div>

  <div class="fds-tooltip fds-tooltip--right">
    <span class="fds-icon" aria-describedby="tooltip">
      <i class="fa-regular fa-circle-info"></i>
    </span>
    <div class="fds-tooltip__container" role="tooltip" id="tooltip">
      <div class="fds-tooltip__content">
        This box shows the maximum amount of text that should be displayed.
      </div>
      <span class="fds-tooltip__caret"></span>
    </div>
  </div>

  <div class="fds-tooltip fds-tooltip--right-end">
    <span class="fds-icon" aria-describedby="tooltip">
      <i class="fa-regular fa-circle-info"></i>
    </span>
    <div class="fds-tooltip__container" role="tooltip" id="tooltip">
      <div class="fds-tooltip__content">
        This box shows the maximum amount of text that should be displayed.
      </div>
      <span class="fds-tooltip__caret"></span>
    </div>
  </div>
</div>
```

### Left

```html live
<div class="demo justify-center min-h-200">
  <div class="fds-tooltip fds-tooltip--left-start">
    <span class="fds-icon" aria-describedby="tooltip">
      <i class="fa-regular fa-circle-info"></i>
    </span>
    <div class="fds-tooltip__container" role="tooltip" id="tooltip">
      <div class="fds-tooltip__content">
        This box shows the maximum amount of text that should be displayed.
      </div>
      <span class="fds-tooltip__caret"></span>
    </div>
  </div>

  <div class="fds-tooltip fds-tooltip--left">
    <span class="fds-icon" aria-describedby="tooltip">
      <i class="fa-regular fa-circle-info"></i>
    </span>
    <div class="fds-tooltip__container" role="tooltip" id="tooltip">
      <div class="fds-tooltip__content">
        This box shows the maximum amount of text that should be displayed.
      </div>
      <span class="fds-tooltip__caret"></span>
    </div>
  </div>

  <div class="fds-tooltip fds-tooltip--left-end">
    <span class="fds-icon" aria-describedby="tooltip">
      <i class="fa-regular fa-circle-info"></i>
    </span>
    <div class="fds-tooltip__container" role="tooltip" id="tooltip">
      <div class="fds-tooltip__content">
        This box shows the maximum amount of text that should be displayed.
      </div>
      <span class="fds-tooltip__caret"></span>
    </div>
  </div>
</div>
```