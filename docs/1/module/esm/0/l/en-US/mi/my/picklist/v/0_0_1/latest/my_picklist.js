import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
import _tmpl from "/1/module/esm/0/l/en-US/mi/my/picklist#picklist.html/v/0_0_1/latest/my_picklist_picklist_html.js";

class SelectComponent extends LightningElement {
  constructor(...args) {
    super(...args);
    this.label = 'select';
    this.placeholder = 'Select';
    this.options = void 0;
    this.required = false;
    this.disabled = false;
  }

  selectionChangeHandler(event) {
    this.dispatchEvent(new CustomEvent('selected', {
      detail: event.target.value
    }));
  }

  displayError(error) {
    this.error = 'Unknown error';

    if (Array.isArray(error.body)) {
      this.error = error.body.map(e => e.message).join(', ');
    } else if (typeof error.body.message === 'string') {
      this.error = error.body.message;
    }
  }

}

_registerDecorators(SelectComponent, {
  publicProps: {
    label: {
      config: 0
    },
    placeholder: {
      config: 0
    },
    options: {
      config: 0
    },
    required: {
      config: 0
    },
    disabled: {
      config: 0
    }
  }
});

export default _registerComponent(SelectComponent, {
  tmpl: _tmpl
});