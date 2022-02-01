import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./lookupAddress.html";

/* eslint-disable @lwc/lwc/no-api-reassignments */
import lang from '@salesforce/i18n/lang';
import { toHighlightParts } from './highlight';
import { classSet } from 'lightning/utils';
import { normalizeVariant, VARIANT, debounce } from 'lightning/inputUtils';
import { registerMessageHandler, unregisterMessageHandler, createMessage, postMessage } from 'lightning/messageDispatcher';
import { normalizeBoolean, synchronizeAttrs } from 'lightning/utilsPrivate';
import { buildMapSourceUrl } from 'lightning/mapUtils';
import { INTERNAL_GOOGLE_LOGO, POWERED_BY_GOOGLE } from './googleLogo';
import { getLocation } from './location';
const DEFAULT_TYPES = ['geocode'];
const DEBOUNCE_PERIOD = 250;
const EVENT_NAME = {
  INITIALIZE_PLACE_API: 'initialize',
  QUERY_PLACE_AUTOCOMPLETE: 'queryAddress',
  QUERY_PLACE_DETAIL: 'selectAddress',
  PLACE_AUTOCOMPLETE: 'force:showAddressSuggestions',
  PLACE_DETAIL: 'force:saveAddressLookup',
  PLACE_API_READY: 'place-api-ready'
};

class LightningLookupAddress extends LightningElement {
  constructor(...args) {
    super(...args);
    this.label = void 0;
    this.inputText = '';
    this.placeholder = void 0;
    this._inputIconName = 'utility:search';
    this._items = void 0;
    this._showActivityIndicator = void 0;
    this._variant = void 0;
    this._disabled = void 0;
    this._isLoaded = false;
    this._googleLogoUrl = void 0;
    this._googleLogoText = POWERED_BY_GOOGLE;
    this._labelForId = void 0;
    this.placeIconName = 'utility:checkin';
    this.apiDomain = `*`;
    this.apiSrc = buildMapSourceUrl({
      resource: 'placeApi',
      locale: lang
    });
  }

  connectedCallback() {
    this._items = [];
    this._dispatchId = registerMessageHandler(event => {
      this.handleMessage(event);
    });
    this._debouncedTextInput = debounce(text => {
      this._requestSuggestions(text);
    }, DEBOUNCE_PERIOD);
  }

  disconnectedCallback() {
    if (this._dispatchId) {
      unregisterMessageHandler(this._dispatchId);
    }
  }

  get variant() {
    return this._variant || VARIANT.STANDARD;
  }

  set variant(value) {
    this._variant = normalizeVariant(value);
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = normalizeBoolean(value);

    if (this._disabled && this._dropdownVisible) {
      this.closeDropdown();
    }
  }

  get isLabelHidden() {
    return this.variant === VARIANT.LABEL_HIDDEN;
  }

  get computedLabelClass() {
    return classSet('slds-form-element__label').add({
      'slds-assistive-text': this.isLabelHidden
    }).toString();
  }

  renderedCallback() {
    const label = this.template.querySelector('label');

    if (label) {
      synchronizeAttrs(label, {
        for: this._labelForId
      });
      label.setAttribute('for', this._labelForId);
    }
  }

  handleComboboxReady(e) {
    this._labelForId = e.detail.id;
  }

  handleMessage(data) {
    this._showActivityIndicator = false;

    if (!this._googleLogoUrl) {
      this._googleLogoUrl = INTERNAL_GOOGLE_LOGO;
    }

    if (data.event === EVENT_NAME.PLACE_AUTOCOMPLETE) {
      this._processAutoComplete(data.arguments.addresses);
    } else if (data.event === EVENT_NAME.PLACE_DETAIL) {
      this.dispatchChangeEvent(data.arguments);
    } else if (data.event === EVENT_NAME.PLACE_API_READY) {
      this._isLoaded = true;
    }
  }

  _requestSuggestions(matchString) {
    if (matchString) {
      this._showActivityIndicator = true;
      this.sendMessage(EVENT_NAME.QUERY_PLACE_AUTOCOMPLETE, {
        matchString
      });
    } else {
      this._items = [];
    }
  }

  handleTextInput(evt) {
    this.inputText = evt.detail.text;

    this._debouncedTextInput(evt.detail.text);
  }

  handleIframeLoad(event) {
    this._handler = event.detail.callbacks.postToWindow;
    getLocation().then(location => {
      this.sendMessage(EVENT_NAME.INITIALIZE_PLACE_API, {
        types: DEFAULT_TYPES,
        location
      });
    });
  }

  sendMessage(event, params) {
    if (this._handler) {
      const message = createMessage(this._dispatchId, event, params || {});
      postMessage(this._handler, message, '*');
    }
  }

  handleSelect(evt) {
    const {
      value
    } = evt.detail;

    if (value) {
      this._showActivityIndicator = true;
      this.sendMessage(EVENT_NAME.QUERY_PLACE_DETAIL, {
        addressCmpId: this._dispatchId,
        placeId: value
      });
    }
  }

  _processAutoComplete(suggestions) {
    this._showActivityIndicator = false;
    this._items = [];

    if (suggestions) {
      this._items = suggestions.map(suggestion => {
        const mainText = suggestion.structured_formatting.main_text;
        const secondaryText = suggestion.structured_formatting.secondary_text;
        const matchedSubstrings = suggestion.structured_formatting.main_text_matched_substrings;
        const parts = toHighlightParts(mainText, matchedSubstrings);
        return {
          type: 'option-card',
          text: parts,
          iconName: this.placeIconName,
          subText: secondaryText,
          value: suggestion.place_id
        };
      });
    }
  }

  dispatchChangeEvent(address) {
    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        address
      }
    }));
  }

}

_registerDecorators(LightningLookupAddress, {
  publicProps: {
    label: {
      config: 0
    },
    inputText: {
      config: 0
    },
    placeholder: {
      config: 0
    },
    variant: {
      config: 3
    },
    disabled: {
      config: 3
    }
  },
  track: {
    _inputIconName: 1,
    _items: 1,
    _showActivityIndicator: 1,
    _variant: 1,
    _disabled: 1,
    _isLoaded: 1
  },
  fields: ["_googleLogoUrl", "_googleLogoText", "_labelForId", "placeIconName", "apiDomain", "apiSrc"]
});

export default _registerComponent(LightningLookupAddress, {
  tmpl: _tmpl
});