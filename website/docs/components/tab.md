---
title: Tab
---

:::warning
Custom javascript in these examples are for demo purposes.
:::

## Types

### Default

```html live
<div class="demo">
  <div role="tablist" class="fds-tablist">
    <button type="button" role="tab" id="tabpanel-1-tab" class="fds-tablist__tab fds-tablist__tab--selected" tabindex="0">
      <span class="fds-tablist__tab-label">Tab label 1</span>
    </button>
    <button type="button" role="tab" id="tabpanel-2-tab" class="fds-tablist__tab" tabindex="-1">
      <span class="fds-tablist__tab-label">Tab label 2</span>
    </button>
    <button type="button" role="tab" id="tabpanel-3-tab" class="fds-tablist__tab" tabindex="-1">
      <span class="fds-tablist__tab-label">Tab label 3</span>
    </button>
    <button type="button" role="tab" id="tabpanel-4-tab" class="fds-tablist__tab" tabindex="-1">
      <span class="fds-tablist__tab-label">Tab label 4</span>
    </button>
  </div>
  <div role="tabpanel" aria-labelledby="tabpanel-1-tab" id="tabpanel-1" tabindex="0" class="fds-tab-content">
    <p class="heading-06">This is Tabel Panel 1</p>
    <p class="body-long-01">Tab 1 Selected</p>
  </div>
  <div role="tabpanel" aria-labelledby="tabpanel-2-tab" id="tabpanel-2" tabindex="-1" class="fds-tab-content" hidden>
    <p class="heading-06">This is Tabel Panel 2</p>
    <p class="body-long-01">Tab 2 Selected</p>
  </div>
  <div role="tabpanel" aria-labelledby="tabpanel-3-tab" id="tabpanel-3" tabindex="-1" class="fds-tab-content" hidden>
    <p class="heading-06">This is Tabel Panel 3</p>
    <p class="body-long-01">Tab 3 Selected</p>
  </div>
  <div role="tabpanel" aria-labelledby="tabpanel-4-tab" id="tabpanel-4" tabindex="-1" class="fds-tab-content" hidden>
    <p class="heading-06">This is Tabel Panel 4</p>
    <p class="body-long-01">Tab 4 Selected</p>
  </div>
</div>
```

### Solid

```html live
<div class="demo">
  <div role="tablist" class="fds-tablist fds-tablist--solid">
    <button type="button" role="tab" id="tabpanel-1-tab" class="fds-tablist__tab fds-tablist__tab--selected" tabindex="0">
      <span class="fds-tablist__tab-label">Tab label 1</span>
    </button>
    <button type="button" role="tab" id="tabpanel-2-tab" class="fds-tablist__tab" tabindex="-1">
      <span class="fds-tablist__tab-label">Tab label 2</span>
    </button>
    <button type="button" role="tab" id="tabpanel-3-tab" class="fds-tablist__tab" tabindex="-1">
      <span class="fds-tablist__tab-label">Tab label 3</span>
    </button>
    <button type="button" role="tab" id="tabpanel-4-tab" class="fds-tablist__tab" tabindex="-1">
      <span class="fds-tablist__tab-label">Tab label 4</span>
    </button>
  </div>
  <div role="tabpanel" aria-labelledby="tabpanel-1-tab" id="tabpanel-1" tabindex="0" class="fds-tab-content">
    <p class="heading-06">This is Tabel Panel 1</p>
    <p class="body-long-01">Tab 1 Selected</p>
  </div>
  <div role="tabpanel" aria-labelledby="tabpanel-2-tab" id="tabpanel-2" tabindex="-1" class="fds-tab-content" hidden>
    <p class="heading-06">This is Tabel Panel 2</p>
    <p class="body-long-01">Tab 2 Selected</p>
  </div>
  <div role="tabpanel" aria-labelledby="tabpanel-3-tab" id="tabpanel-3" tabindex="-1" class="fds-tab-content" hidden>
    <p class="heading-06">This is Tabel Panel 3</p>
    <p class="body-long-01">Tab 3 Selected</p>
  </div>
  <div role="tabpanel" aria-labelledby="tabpanel-4-tab" id="tabpanel-4" tabindex="-1" class="fds-tab-content" hidden>
    <p class="heading-06">This is Tabel Panel 4</p>
    <p class="body-long-01">Tab 4 Selected</p>
  </div>
</div>
```

## Tab with tag

```html live
<div class="demo">
  <div role="tablist" class="fds-tablist">
    <button type="button" role="tab" id="tabpanel-1-tab" class="fds-tablist__tab fds-tablist__tab--selected" tabindex="0">
      <span class="fds-tablist__tab-label">Tab label 1</span>
      <div class="fds-tag fds-tag--interactive fds-tablist__tag">
        <span class="fds-tag__label">58</span>
      </div>
    </button>
    <button type="button" role="tab" id="tabpanel-2-tab" class="fds-tablist__tab" tabindex="-1">
      <span class="fds-tablist__tab-label">Tab label 2</span>
      <div class="fds-tag fds-tag--interactive fds-tablist__tag">
        <span class="fds-tag__label">12</span>
      </div>
    </button>
    <button type="button" role="tab" id="tabpanel-3-tab" class="fds-tablist__tab" tabindex="-1">
      <span class="fds-tablist__tab-label">Tab label 3</span>
      <div class="fds-tag fds-tag--interactive fds-tablist__tag">
        <span class="fds-tag__label">29</span>
      </div>
    </button>
    <button type="button" role="tab" id="tabpanel-4-tab" class="fds-tablist__tab" tabindex="-1">
      <span class="fds-tablist__tab-label">Tab label 4</span>
      <div class="fds-tag fds-tag--interactive fds-tablist__tag">
        <span class="fds-tag__label">7</span>
      </div>
    </button>
  </div>
  <div role="tabpanel" aria-labelledby="tabpanel-1-tab" id="tabpanel-1" tabindex="0" class="fds-tab-content">
    <p class="heading-06">This is Tabel Panel 1</p>
    <p class="body-long-01">Tab 1 Selected</p>
  </div>
  <div role="tabpanel" aria-labelledby="tabpanel-2-tab" id="tabpanel-2" tabindex="-1" class="fds-tab-content" hidden>
    <p class="heading-06">This is Tabel Panel 2</p>
    <p class="body-long-01">Tab 2 Selected</p>
  </div>
  <div role="tabpanel" aria-labelledby="tabpanel-3-tab" id="tabpanel-3" tabindex="-1" class="fds-tab-content" hidden>
    <p class="heading-06">This is Tabel Panel 3</p>
    <p class="body-long-01">Tab 3 Selected</p>
  </div>
  <div role="tabpanel" aria-labelledby="tabpanel-4-tab" id="tabpanel-4" tabindex="-1" class="fds-tab-content" hidden>
    <p class="heading-06">This is Tabel Panel 4</p>
    <p class="body-long-01">Tab 4 Selected</p>
  </div>
</div>
```

## State

### Disabled tab item

```html live
<div class="demo">
  <div role="tablist" class="fds-tablist">
    <button type="button" role="tab" id="tabpanel-1-tab" class="fds-tablist__tab fds-tablist__tab--selected" tabindex="0">
      <span class="fds-tablist__tab-label">Tab label 1</span>
    </button>
    <button type="button" role="tab" id="tabpanel-2-tab" class="fds-tablist__tab" tabindex="-1">
      <span class="fds-tablist__tab-label">Tab label 2</span>
    </button>
    <button type="button" role="tab" id="tabpanel-3-tab" class="fds-tablist__tab fds-tablist__tab--disabled" disabled tabindex="-1">
      <span class="fds-tablist__tab-label">Tab label 3</span>
    </button>
    <button type="button" role="tab" id="tabpanel-4-tab" class="fds-tablist__tab fds-tablist__tab--disabled" disabled tabindex="-1">
      <span class="fds-tablist__tab-label">Tab label 4</span>
    </button>
  </div>
  <div role="tabpanel" aria-labelledby="tabpanel-1-tab" id="tabpanel-1" tabindex="0" class="fds-tab-content">
    <p class="heading-06">This is Tabel Panel 1</p>
    <p class="body-long-01">Tab 1 Selected</p>
  </div>
  <div role="tabpanel" aria-labelledby="tabpanel-2-tab" id="tabpanel-2" tabindex="-1" class="fds-tab-content" hidden>
    <p class="heading-06">This is Tabel Panel 2</p>
    <p class="body-long-01">Tab 2 Selected</p>
  </div>
  <div role="tabpanel" aria-labelledby="tabpanel-3-tab" id="tabpanel-3" tabindex="-1" class="fds-tab-content" hidden>
    <p class="heading-06">This is Tabel Panel 3</p>
    <p class="body-long-01">Tab 3 Selected</p>
  </div>
  <div role="tabpanel" aria-labelledby="tabpanel-4-tab" id="tabpanel-4" tabindex="-1" class="fds-tab-content" hidden>
    <p class="heading-06">This is Tabel Panel 4</p>
    <p class="body-long-01">Tab 4 Selected</p>
  </div>
</div>
```