---
title: List
---

## Types

### Unordered

#### Dashed

```html live
<ul class="fds-list fds-list--dashed" role="list">
  <li class="fds-list__item">Unordered dashed list item</li>
  <li class="fds-list__item">Unordered dashed list item</li>
  <li class="fds-list__item">Unordered dashed list item</li>
  <li class="fds-list__item">Unordered dashed list item</li>
</ul>
```

#### Bulleted

```html live
<ul class="fds-list fds-list--bulleted" role="list">
  <li class="fds-list__item">Unordered bulleted list item</li>
  <li class="fds-list__item">Unordered bulleted list item</li>
  <li class="fds-list__item">Unordered bulleted list item</li>
  <li class="fds-list__item">Unordered bulleted list item</li>
</ul>
```

### Ordered

#### Lettered

```html live
<ol class="fds-list fds-list--lettered" role="list">
  <li class="fds-list__item">Ordered lettered list item</li>
  <li class="fds-list__item">Ordered lettered list item</li>
  <li class="fds-list__item">Ordered lettered list item</li>
  <li class="fds-list__item">Ordered lettered list item</li>
</ol>
```

#### Numbered

```html live
<ol class="fds-list fds-list--number" role="list">
  <li class="fds-list__item">Ordered number list item</li>
  <li class="fds-list__item">Ordered number list item</li>
  <li class="fds-list__item">Ordered number list item</li>
  <li class="fds-list__item">Ordered number list item</li>
</ol>
```

## Unordered list nested

```html live
<div class="demo">
  <ul class="fds-list fds-list--dashed" role="list">
    <li class="fds-list__item">Unordered dashed list item
      <ul class="fds-list fds-list--bulleted fds-list--nested">
        <li class="fds-list__item">Unordered bulleted list subitem</li>
        <li class="fds-list__item">Unordered bulleted list subitem</li>
        <li class="fds-list__item">Unordered bulleted list subitem</li>
      </ul>
    </li>
    <li class="fds-list__item">Unordered dashed list item</li>
    <li class="fds-list__item">Unordered dashed list item</li>
    <li class="fds-list__item">Unordered dashed list item</li>
  </ul>

  <ul class="fds-list fds-list--bulleted">
    <li class="fds-list__item">Unordered bulleted list item
      <ul class="fds-list fds-list--dashed fds-list--nested">
        <li class="fds-list__item">Unordered dashed list subitem</li>
        <li class="fds-list__item">Unordered dashed list subitem</li>
        <li class="fds-list__item">Unordered dashed list subitem</li>
      </ul>
    </li>
    <li class="fds-list__item">Unordered bulleted list item</li>
    <li class="fds-list__item">Unordered bulleted list item</li>
    <li class="fds-list__item">Unordered bulleted list item</li>
  </ul>
</div>
```

## Ordered list nested

```html live
<div class="demo">
  <ol class="fds-list fds-list--lettered">
    <li class="fds-list__item">Ordered lettered list item
      <ol class="fds-list fds-list--number fds-list--nested">
        <li class="fds-list__item">Ordered number list subitem</li>
        <li class="fds-list__item">Ordered number list subitem</li>
        <li class="fds-list__item">Ordered number list subitem</li>
      </ol>
    </li>
    <li class="fds-list__item">Ordered lettered list item</li>
    <li class="fds-list__item">Ordered lettered list item</li>
    <li class="fds-list__item">Ordered lettered list item</li>
  </ol>

  <ol class="fds-list fds-list--number">
    <li class="fds-list__item">Ordered number list item
      <ol class="fds-list fds-list--lettered fds-list--nested">
        <li class="fds-list__item">Ordered lettered list subitem</li>
        <li class="fds-list__item">Ordered lettered list subitem</li>
        <li class="fds-list__item">Ordered lettered list subitem</li>
      </ol>
    </li>
    <li class="fds-list__item">Ordered number list item</li>
    <li class="fds-list__item">Ordered number list item</li>
    <li class="fds-list__item">Ordered number list item</li>
  </ol>
</div>
```

