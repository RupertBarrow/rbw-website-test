import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
import _tmpl from "/1/module/esm/0/l/en-US/mi/lightning/primitiveIframe#primitiveIframe.html/v/1_14_4-alpha/latest/lightning_primitiveIframe_primitiveIframe_html.js";
import { registerDomain, unregisterDomain } from '/1/module/esm/0/l/en-US/mi/lightning/messageDispatcher/v/1_14_4-alpha/latest/lightning_messageDispatcher.js';
/**
 * Class representing primitive iframe.
 * @extends Element
 */

class LightningPrimitiveIframe extends LightningElement {
  constructor(...args) {
    super(...args);
    this.src = void 0;
    this.domain = void 0;
    this.width = '100%';
    this.height = '100%';
    this.frameStyle = '';
    this.title = void 0;
    this.language = document.documentElement.lang || null;
  }

  connectedCallback() {
    registerDomain(this.src);
  }

  disconnectedCallback() {
    unregisterDomain(this.src);
  }

  handleContentLoad() {
    const iframeload = new CustomEvent('iframeload', {
      detail: {
        callbacks: {
          postToWindow: this.postToWindow.bind(this)
        }
      }
    });
    this.contentWindow = this.template.querySelector('iframe').contentWindow;
    this.dispatchEvent(iframeload);
  }

  postToWindow(message) {
    if (this.contentWindow) {
      this.contentWindow.postMessage(message, this.domain);
    }
  }

}

_registerDecorators(LightningPrimitiveIframe, {
  publicProps: {
    src: {
      config: 0
    },
    domain: {
      config: 0
    },
    width: {
      config: 0
    },
    height: {
      config: 0
    },
    frameStyle: {
      config: 0
    },
    title: {
      config: 0
    }
  },
  publicMethods: ["postToWindow"],
  fields: ["language"]
});

export default _registerComponent(LightningPrimitiveIframe, {
  tmpl: _tmpl
});