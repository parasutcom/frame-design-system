---
title: Modal
---

:::warning
Inline styles and custom javascript in these examples are for demo purposes.
:::


## Size

### Small

```html live
<div class="demo">
  <button class="fds-btn fds-btn--primary" data-open-modal="modal-small">
    <span class="fds-btn__label">Open Modal</span>
  </button>
  <div id="modal-small" class="fds-modal">
    <div class="fds-modal__container fds-modal__container--sm">
      <div class="fds-modal__header">
        <p class="fds-modal__label">Optional label</p>
        <h4 class="fds-modal__heading" style={{ marginBottom: '0' }}>Modal header text</h4>
      </div>

      <div class="fds-modal__message">
        <div role="alert" class="fds-notification fds-notification--warning">
          <div class="fds-notification__content">
            <div class="fds-notification__details">
              <ul class="fds-list fds-list--unordered fds-list--bulleted">
                <li class="fds-list__item">A warning notification message goes here</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="fds-modal__content">
        <p class="body-long-02" style={{ marginBottom: '0' }}>This is a body paragraph text. You can give details or directions about the subject.</p>

        <form>
          <div class="fds-form-item">
            <div class="fds-form-item__label-wrapper">
              <label for="textinput" class="fds-form-item__label">Label</label>
            </div>
            <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
              <input type="text" id="textinput" class="fds-text-input" placeholder="Placeholder text" />
            </div>
            <div class="fds-form-item__helper-text">Helper text goes here</div>
          </div>

          <div class="fds-form-item">
            <div class="fds-form-item__label-wrapper">
              <label for="textinput" class="fds-form-item__label">Label</label>
            </div>
            <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
              <input type="text" id="textinput" class="fds-text-input" placeholder="Placeholder text" />
            </div>
            <div class="fds-form-item__helper-text">Helper text goes here</div>
          </div>
        </form>

        <div class="fds-implication">
          <h5 class="fds-implication__heading">This is an implication text field label</h5>
          <ul class="fds-list fds-list--bulleted" role="list">
            <li class="fds-list__item">This is an implication detail text. Each text line can be 1-2 sentence long like this.</li>
            <li class="fds-list__item">Implication text field should contain up to 3 or 4 list text.</li>
            <li class="fds-list__item">If you need to highlight a word you can make it bold.</li>
            <li class="fds-list__item">You can remove an each text layer if you don’t need it.</li>
          </ul>
        </div>
      </div>

      <div class="fds-modal__footer">
        <button class="fds-btn fds-btn--outline" data-close-modal="modal-small">
          <span class="fds-btn__label">Close modal</span>
        </button>
        <button class="fds-btn fds-btn--primary">
          <span class="fds-btn__label">Primary button</span>
        </button>
      </div>
    </div>
  </div>
</div>
```

### Default

```html live
<div class="demo">
  <button class="fds-btn fds-btn--primary" data-open-modal="modal-default">
    <span class="fds-btn__label">Open Modal</span>
  </button>
  <div id="modal-default" class="fds-modal">
    <div class="fds-modal__container">
      <div class="fds-modal__header">
        <p class="fds-modal__label">Optional label</p>
        <h4 class="fds-modal__heading" style={{ marginBottom: '0' }}>Modal header text</h4>
      </div>

      <div class="fds-modal__message">
        <div role="alert" class="fds-notification fds-notification--warning">
          <div class="fds-notification__content">
            <div class="fds-notification__details">
              <ul class="fds-list fds-list--unordered fds-list--bulleted">
                <li class="fds-list__item">A warning notification message goes here</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="fds-modal__content">
        <p class="body-long-02" style={{ marginBottom: '0' }}>This is a body paragraph text. You can give details or directions about the subject.</p>

        <form>
          <div class="fds-form-item">
            <div class="fds-form-item__label-wrapper">
              <label for="textinput" class="fds-form-item__label">Label</label>
            </div>
            <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
              <input type="text" id="textinput" class="fds-text-input" placeholder="Placeholder text" />
            </div>
            <div class="fds-form-item__helper-text">Helper text goes here</div>
          </div>

          <div class="fds-form-item">
            <div class="fds-form-item__label-wrapper">
              <label for="textinput" class="fds-form-item__label">Label</label>
            </div>
            <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
              <input type="text" id="textinput" class="fds-text-input" placeholder="Placeholder text" />
            </div>
            <div class="fds-form-item__helper-text">Helper text goes here</div>
          </div>
        </form>

        <div class="fds-implication">
          <h5 class="fds-implication__heading">This is an implication text field label</h5>
          <ul class="fds-list fds-list--bulleted" role="list">
            <li class="fds-list__item">This is an implication detail text. Each text line can be 1-2 sentence long like this.</li>
            <li class="fds-list__item">Implication text field should contain up to 3 or 4 list text.</li>
            <li class="fds-list__item">If you need to highlight a word you can make it bold.</li>
            <li class="fds-list__item">You can remove an each text layer if you don’t need it.</li>
          </ul>
        </div>
      </div>

      <div class="fds-modal__footer">
        <button class="fds-btn fds-btn--outline" data-close-modal="modal-default">
          <span class="fds-btn__label">Close modal</span>
        </button>
        <button class="fds-btn fds-btn--primary">
          <span class="fds-btn__label">Primary button</span>
        </button>
      </div>
    </div>
  </div>
</div>
```

### Large

```html live
<div class="demo">
  <button class="fds-btn fds-btn--primary" data-open-modal="modal-large">
    <span class="fds-btn__label">Open Modal</span>
  </button>
  <div id="modal-large" class="fds-modal">
    <div class="fds-modal__container fds-modal__container--lg">
      <div class="fds-modal__header">
        <p class="fds-modal__label">Optional label</p>
        <h4 class="fds-modal__heading" style={{ marginBottom: '0' }}>Modal header text</h4>
      </div>

      <div class="fds-modal__message">
        <div role="alert" class="fds-notification fds-notification--warning">
          <div class="fds-notification__content">
            <div class="fds-notification__details">
              <ul class="fds-list fds-list--unordered fds-list--bulleted">
                <li class="fds-list__item">A warning notification message goes here</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="fds-modal__content">
        <p class="body-long-02" style={{ marginBottom: '0' }}>This is a body paragraph text. You can give details or directions about the subject.</p>

        <form>
          <div class="fds-form-item">
            <div class="fds-form-item__label-wrapper">
              <label for="textinput" class="fds-form-item__label">Label</label>
            </div>
            <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
              <input type="text" id="textinput" class="fds-text-input" placeholder="Placeholder text" />
            </div>
            <div class="fds-form-item__helper-text">Helper text goes here</div>
          </div>

          <div class="fds-form-item">
            <div class="fds-form-item__label-wrapper">
              <label for="textinput" class="fds-form-item__label">Label</label>
            </div>
            <div class="fds-form-item__field-wrapper fds-form-item__field-wrapper--outline">
              <input type="text" id="textinput" class="fds-text-input" placeholder="Placeholder text" />
            </div>
            <div class="fds-form-item__helper-text">Helper text goes here</div>
          </div>
        </form>

        <div class="fds-implication">
          <h5 class="fds-implication__heading">This is an implication text field label</h5>
          <ul class="fds-list fds-list--bulleted" role="list">
            <li class="fds-list__item">This is an implication detail text. Each text line can be 1-2 sentence long like this.</li>
            <li class="fds-list__item">Implication text field should contain up to 3 or 4 list text.</li>
            <li class="fds-list__item">If you need to highlight a word you can make it bold.</li>
            <li class="fds-list__item">You can remove an each text layer if you don’t need it.</li>
          </ul>
        </div>
      </div>

      <div class="fds-modal__footer">
        <button class="fds-btn fds-btn--outline" data-close-modal="modal-large">
          <span class="fds-btn__label">Close modal</span>
        </button>
        <button class="fds-btn fds-btn--primary">
          <span class="fds-btn__label">Primary button</span>
        </button>
      </div>
    </div>
  </div>
</div>
```

