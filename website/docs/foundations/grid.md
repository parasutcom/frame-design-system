---
title: Grid
---

## Gutter modes

### Wide

```html live
<div class="fds-grid-container">
  <div class="fds-row">
    <div class="fds-col-span-3"><div class="inside">1/4</div></div>
    <div class="fds-col-span-3"><div class="inside">2/4</div></div>
    <div class="fds-col-span-3"><div class="inside">3/4</div></div>
    <div class="fds-col-span-3"><div class="inside">4/4</div></div>
  </div>
</div>
```

### Condensed

```html live
<div class="fds-grid-container">
  <div class="fds-row fds-row--condensed">
    <div class="fds-col-span-3"><div class="inside">1/4</div></div>
    <div class="fds-col-span-3"><div class="inside">2/4</div></div>
    <div class="fds-col-span-3"><div class="inside">3/4</div></div>
    <div class="fds-col-span-3"><div class="inside">4/4</div></div>
  </div>
</div>
```

### Narrow

```html live
<div class="fds-grid-container">
  <div class="fds-row fds-row--narrow">
    <div class="fds-col-span-3"><div class="inside">1/4</div></div>
    <div class="fds-col-span-3"><div class="inside">2/4</div></div>
    <div class="fds-col-span-3"><div class="inside">3/4</div></div>
    <div class="fds-col-span-3"><div class="inside">4/4</div></div>
  </div>
</div>
```

## Full width

```html live
<div class="fds-grid-container fds-grid-container--full-width">
  <div class="fds-row">
    <div class="fds-col-span-3"><div class="inside">1/4</div></div>
    <div class="fds-col-span-3"><div class="inside">2/4</div></div>
    <div class="fds-col-span-3"><div class="inside">3/4</div></div>
    <div class="fds-col-span-3"><div class="inside">4/4</div></div>
  </div>
</div>
```

## Responsive

Our grid system adapts to different breakpoints, from Extra small(xs) to Extra extra large(2xl). Each of these breakpoints has its own unique class prefix and margin. Here's how the grid changes across these breakpoints:

|                               | xs `<600px`         | sm `≥600px`            | md `≥900px`            | lg `≥1300px`           | xl `≥1500px`           | 2xl `≥1800px`           |
|-------------------------------|---------------------|------------------------|------------------------|------------------------|------------------------|-------------------------|
| <strong>Class prefix</strong> | `.fds-col-span-{$}` | `.fds-sm:col-span-{$}` | `.fds-md:col-span-{$}` | `.fds-lg:col-span-{$}` | `.fds-xl:col-span-{$}` | `.fds-2xl:col-span-{$}` |
| <strong>Margin</strong>       | 16px                | 16px                   | 24px                   | 40px                   | 48px                   | 48px                    |
|                               |                     |                        |                        |                        |                        |                         |

```html live
<div class="fds-grid-container">
  <div class="fds-row">
    <div class="fds-col-span-6 fds-sm:col-span-6 fds-md:col-span-12 fds-lg:col-span-4 fds-xl:col-span-3">
      <div class="inside">
        <p>Small: span 6 of 12</p>
        <p>Medium: span 12 of 12</p>
        <p>Large: span 4 of 12</p>
        <p>XLarge: span 3 of 12</p>
      </div>
    </div>
    <div class="fds-col-span-6 fds-sm:col-span-6 fds-md:col-span-12 fds-lg:col-span-4 fds-xl:col-span-3">
      <div class="inside">
        <p>Small: span 6 of 12</p>
        <p>Medium: span 12 of 12</p>
        <p>Large: span 4 of 12</p>
        <p>XLarge: span 3 of 12</p>
      </div>
    </div>
    <div class="fds-col-span-6 fds-sm:col-span-6 fds-md:col-span-12 fds-lg:col-span-4 fds-xl:col-span-3">
      <div class="inside">
        <p>Small: span 6 of 12</p>
        <p>Medium: span 12 of 12</p>
        <p>Large: span 4 of 12</p>
        <p>XLarge: span 3 of 12</p>
      </div>
    </div>
    <div class="fds-col-span-6 fds-sm:col-span-6 fds-md:col-span-12 fds-lg:col-span-4 fds-xl:col-span-3">
      <div class="inside">
        <p>Small: span 6 of 12</p>
        <p>Medium: span 12 of 12</p>
        <p>Large: span 4 of 12</p>
        <p>XLarge: span 3 of 12</p>
      </div>
    </div>
  </div>
</div>
```

## Offset columns

```html live
<div class="fds-grid-container">
  <div class="fds-row">
    <div class="fds-col-span-3 fds-col-start-2"><div class="inside">Start 2</div></div>
    <div class="fds-col-span-3 fds-col-start-7"><div class="inside">Start 7</div></div>
    <div class="fds-col-span-3"><div class="inside"></div></div>
    <div class="fds-col-span-3"><div class="inside"></div></div>
  </div>
</div>
```

## Nesting

To implement a nested grid, place a row inside a column and add columns within that row.

```html live
<div class="fds-grid-container">
  <div class="fds-row">
    <div class="fds-col-span-3"><div class="inside"></div></div>
    <div class="fds-col-span-6">
      <div class="fds-row">
        <div class="fds-col-span-4"><div class="inside">Nested</div></div>
        <div class="fds-col-span-4"><div class="inside">Nested</div></div>
        <div class="fds-col-span-4"><div class="inside">Nested</div></div>
      </div>
    </div>
    <div class="fds-col-span-3"><div class="inside"></div></div>
  </div>
</div>
```

## Grid customization

### Adjust dynamic column 

Our grid system is based on a flexible 12-column structure by default, allowing for a wide range of layout possibilities. If needed, you can customize up to a maximum of a 24-column grid to accommodate more complex designs or specific layout requirements.

```html live
<div class="fds-grid-container">
  <div class="fds-row fds-row--5">
    <div class="fds-col-span-1"><div class="inside">1/5</div></div>
    <div class="fds-col-span-3"><div class="inside">3/5</div></div>
    <div class="fds-col-span-1"><div class="inside">1/5</div></div>
  </div>
  <div class="fds-row fds-row--10">
    <div class="fds-col-span-2"><div class="inside">2/10</div></div>
    <div class="fds-col-span-1"><div class="inside">1/10</div></div>
    <div class="fds-col-span-3"><div class="inside">3/10</div></div>
    <div class="fds-col-span-4"><div class="inside">2/10</div></div>
  </div>
</div>
```

### Include vertical padding

Adjust vertical padding to create balanced space above and below columns. This can be done for all columns in a row or individually for each column.

```html live
<div class="demo-vertical">
  <div class="fds-grid-container" style={{width: '100%'}}>
    <div class="fds-row fds-row-padding">
      <div class="fds-col-span-3"><div class="inside">1/4</div></div>
      <div class="fds-col-span-3"><div class="inside">2/4</div></div>
      <div class="fds-col-span-3"><div class="inside">3/4</div></div>
      <div class="fds-col-span-3"><div class="inside">4/4</div></div>
    </div>
  </div>
  
  <div class="fds-grid-container" style={{width: '100%'}}>
    <div class="fds-row">
      <div class="fds-col-span-3 fds-col-padding"><div class="inside">1/4</div></div>
      <div class="fds-col-span-3 fds-col-padding"><div class="inside">2/4</div></div>
      <div class="fds-col-span-3 fds-col-padding"><div class="inside">3/4</div></div>
      <div class="fds-col-span-3 fds-col-padding"><div class="inside">4/4</div></div>
    </div>
  </div>
</div>
```

### Setting column gutter

In our grid system, you can remove the gutter space for an entire row, making all columns fit tightly together. You can also adjust gutters on individual columns, or even remove the gutter from just one side of a column, allowing for precise control over spacing.

```html live
<div class="demo-vertical">
  <div class="fds-grid-container" style={{width: '100%'}}>
    <div class="fds-row fds-no-gutter">
      <div class="fds-col-span-3"><div class="inside">1/4</div></div>
      <div class="fds-col-span-3"><div class="inside">2/4</div></div>
      <div class="fds-col-span-3"><div class="inside">3/4</div></div>
      <div class="fds-col-span-3"><div class="inside">4/4</div></div>
    </div>
  </div>

  <div class="fds-grid-container" style={{width: '100%'}}>
    <div class="fds-row">
      <div class="fds-col-span-3"><div class="inside">1/4</div></div>
      <div class="fds-col-span-3 fds-no-gutter"><div class="inside">2/4</div></div>
      <div class="fds-col-span-3 fds-no-gutter"><div class="inside">3/4</div></div>
      <div class="fds-col-span-3"><div class="inside">4/4</div></div>
    </div>
  </div>

  <div class="fds-grid-container" style={{width: '100%'}}>
    <div class="fds-row">
      <div class="fds-col-span-3 fds-no-gutter--start"><div class="inside">No gutter left side</div></div>
      <div class="fds-col-span-3"><div class="inside">2/4</div></div>
      <div class="fds-col-span-3 fds-no-gutter--end"><div class="inside">No gutter right side</div></div>
      <div class="fds-col-span-3"><div class="inside">4/4</div></div>
    </div>
  </div>
</div>
```