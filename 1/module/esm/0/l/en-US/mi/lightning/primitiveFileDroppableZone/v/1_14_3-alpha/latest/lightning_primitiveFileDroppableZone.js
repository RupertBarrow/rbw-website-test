import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_4/latest/lwc.js";
import _tmpl from "/1/module/esm/0/l/en-US/mi/lightning/primitiveFileDroppableZone#primitiveFileDroppableZone.html/v/1_14_3-alpha/latest/lightning_primitiveFileDroppableZone_primitiveFileDroppableZone_html.js";
import { normalizeBoolean } from '/1/module/esm/0/l/en-US/mi/lightning/utilsPrivate/v/1_14_3-alpha/latest/lightning_utilsPrivate.js';

class LightningPrimitiveFileDroppableZone extends LightningElement {
  get disabled() {
    return this._disabled || false;
  }

  set disabled(value) {
    this._disabled = normalizeBoolean(value);
  }

  get multiple() {
    return this._multiple || false;
  }

  set multiple(value) {
    this._multiple = normalizeBoolean(value);
  }

  constructor() {
    super();
    this._disabled = void 0;
    this._multiple = void 0;
    this.template.addEventListener('dragover', this.allowDrop.bind(this));
    this.template.addEventListener('dragleave', this.handleDragLeave.bind(this));
    this.template.addEventListener('drop', this.handleOnDrop.bind(this));
  }

  connectedCallback() {
    this.classList.add('slds-file-selector__dropzone');
  }

  setDragOver(dragOver) {
    this.classList.toggle('slds-has-drag-over', dragOver);
  }

  handleDragLeave() {
    this.setDragOver(false);
  }

  handleOnDrop(event) {
    event.preventDefault();
    this.setDragOver(false);

    if (this.disabled) {
      event.stopPropagation();
      return;
    }

    if (!this.meetsMultipleCriteria(event)) {
      event.stopPropagation();
    }
  }

  allowDrop(event) {
    event.preventDefault();

    if (!this.disabled) {
      this.setDragOver(true);
    }
  }

  meetsMultipleCriteria(dragEvent) {
    const files = dragEvent.dataTransfer.files;
    return !(files.length > 1 && !this.multiple);
  }

}

_registerDecorators(LightningPrimitiveFileDroppableZone, {
  publicProps: {
    disabled: {
      config: 3
    },
    multiple: {
      config: 3
    }
  },
  track: {
    _disabled: 1,
    _multiple: 1
  }
});

export default _registerComponent(LightningPrimitiveFileDroppableZone, {
  tmpl: _tmpl
});