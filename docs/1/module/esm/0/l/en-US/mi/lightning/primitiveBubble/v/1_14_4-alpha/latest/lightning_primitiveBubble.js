import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
import _tmpl from "/1/module/esm/0/l/en-US/mi/lightning%2FprimitiveBubble#primitiveBubble.html%2Fv%2F1_14_4-alpha/latest/lightning_primitiveBubble_primitiveBubble_html.js";
import { classSet } from '/1/module/esm/0/l/en-US/mi/lightning%2Futils%2Fv%2F1_14_4-alpha/latest/lightning_utils.js';
import { classListMutation } from '/1/module/esm/0/l/en-US/mi/lightning%2FutilsPrivate%2Fv%2F1_14_4-alpha/latest/lightning_utilsPrivate.js';
const DEFAULT_ALIGN = {
  horizontal: 'left',
  vertical: 'bottom'
};

class LightningPrimitiveBubble extends LightningElement {
  constructor(...args) {
    super(...args);
    this.state = {
      visible: false,
      contentId: ''
    };
    this.divElement = void 0;
  }

  get contentId() {
    return this.state.contentId;
  }

  set contentId(value) {
    this.state.contentId = value;

    if (this.state.inDOM) {
      this.divEl.setAttribute('id', this.state.contentId);
    }
  }

  connectedCallback() {
    this.updateClassList();
    this.setAttribute('role', 'tooltip');
    this.state.inDOM = true;
  }

  disconnectedCallback() {
    this.state.inDOM = false;
  }

  renderedCallback() {
    // set content manually once rendered
    // - this is required to avoid the content update being in the wrong 'tick'
    this.setContentManually();
    this.setIdManually();
  }

  set content(value) {
    this.state.content = value;

    if (this.state.inDOM) {
      this.setContentManually();
    }
  }

  get content() {
    return this.state.content || '';
  }

  get align() {
    return this.state.align || DEFAULT_ALIGN;
  }

  set align(value) {
    this.state.align = value;
    this.updateClassList();
  }

  get visible() {
    return this.state.visible;
  }

  set visible(value) {
    this.state.visible = value;
    this.updateClassList();
  }

  setIdManually() {
    this.setAttribute('id', this.state.contentId);
  } // manually set the content value


  setContentManually() {
    /* manipulate DOM directly */
    this.template.querySelector('.slds-popover__body').textContent = this.state.content;
  } // compute class value for this bubble


  updateClassList() {
    const classes = classSet('slds-popover').add('slds-popover_tooltip'); // show or hide bubble

    classes.add({
      'slds-rise-from-ground': this.visible,
      'slds-fall-into-ground': !this.visible
    }); // apply the proper nubbin CSS class

    const {
      horizontal,
      vertical
    } = this.align;
    classes.add({
      'slds-nubbin_top-left': horizontal === 'left' && vertical === 'top',
      'slds-nubbin_top-right': horizontal === 'right' && vertical === 'top',
      'slds-nubbin_bottom-left': horizontal === 'left' && vertical === 'bottom',
      'slds-nubbin_bottom-right': horizontal === 'right' && vertical === 'bottom',
      'slds-nubbin_bottom': horizontal === 'center' && vertical === 'bottom',
      'slds-nubbin_top': horizontal === 'center' && vertical === 'top',
      'slds-nubbin_left': horizontal === 'left' && vertical === 'center',
      'slds-nubbin_right': horizontal === 'right' && vertical === 'center'
    });
    classListMutation(this.classList, classes);
  }

  handleMouseLeave() {
    this.visible = false;
  }

}

_registerDecorators(LightningPrimitiveBubble, {
  publicProps: {
    contentId: {
      config: 3
    },
    content: {
      config: 3
    },
    align: {
      config: 3
    },
    visible: {
      config: 3
    }
  },
  track: {
    state: 1
  },
  fields: ["divElement"]
});

export default _registerComponent(LightningPrimitiveBubble, {
  tmpl: _tmpl
});