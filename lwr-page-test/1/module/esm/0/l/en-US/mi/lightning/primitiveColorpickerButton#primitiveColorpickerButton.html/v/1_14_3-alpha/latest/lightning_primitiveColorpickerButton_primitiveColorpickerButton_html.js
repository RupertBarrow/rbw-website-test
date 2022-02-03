import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/primitiveColorpickerButton#primitiveColorpickerButton.css/v/1_14_3-alpha/latest/lightning_primitiveColorpickerButton_primitiveColorpickerButton_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/primitiveColorpickerButton#primitiveColorpickerButton.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_primitiveColorpickerButton_primitiveColorpickerButton_scoped_css?scoped=true.js";

import _lightningPrimitiveIcon from "/1/module/esm/0/l/en-US/mi/lightning/primitiveIcon/v/1_14_3-alpha/latest/lightning_primitiveIcon.js";
import _lightningColorPickerPanel from "/1/module/esm/0/l/en-US/mi/lightning/colorPickerPanel/v/1_14_3-alpha/latest/lightning_colorPickerPanel.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_4/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, d: api_dynamic_text, t: api_text, h: api_element, c: api_custom_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("button", {
    classMap: {
      "slds-button": true,
      "slds-color-picker__summary-button": true,
      "slds-button_icon": true,
      "slds-button_icon-more": true
    },
    attrs: {
      "type": "button",
      "disabled": $cmp.disabled ? "" : null
    },
    key: 0,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleColorPickerToggleClick))
    }
  }, [api_element("span", {
    classMap: {
      "slds-swatch": true
    },
    style: $cmp.colorInputStyle,
    attrs: {
      "data-id": "thumbnail"
    },
    key: 1
  }, [api_element("span", {
    classMap: {
      "slds-assistive-text": true
    },
    key: 2
  }, [api_text(api_dynamic_text($cmp.i18n.a11yTriggerText))])]), api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": "utility:down",
      "svgClass": "slds-button__icon slds-button__icon_small",
      "variant": "bare"
    },
    key: 3
  }, []), api_element("span", {
    classMap: {
      "slds-assistive-text": true,
      "a11y-color-value": true
    },
    key: 4
  }, [api_text(api_dynamic_text($cmp.value))])]), $cmp._isColorPickerPanelOpen ? api_custom_element("lightning-color-picker-panel", _lightningColorPickerPanel, {
    classMap: {
      "color-picker-panel": true
    },
    props: {
      "currentColor": $cmp.value
    },
    key: 5,
    on: {
      "updatecolor": _m1 || ($ctx._m1 = api_bind($cmp.handleUpdateColorEvent))
    }
  }, []) : null];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-primitiveColorpickerButton_primitiveColorpickerButton"
