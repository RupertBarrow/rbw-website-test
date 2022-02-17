import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FcolorPickerPanel%23colorPickerPanel.css%2Fv%2F1_14_3-alpha/latest/lightning_colorPickerPanel_colorPickerPanel_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FcolorPickerPanel%23colorPickerPanel.scoped.css?scoped=true%2Fv%2F1_14_3-alpha/latest/lightning_colorPickerPanel_colorPickerPanel_scoped_css?scoped=true.js";

import _lightningColorPickerCustom from "/1/module/esm/0/l/en-US/mi/lightning%2FcolorPickerCustom%2Fv%2F1_14_3-alpha/latest/lightning_colorPickerCustom.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_4/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, b: api_bind, c: api_custom_element, h: api_element, d: api_dynamic_text, t: api_text} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [api_element("section", {
    classMap: {
      "slds-popover": true,
      "slds-color-picker__selector": true,
      "slds-show": true,
      "slds-is-absolute": true
    },
    attrs: {
      "role": "dialog",
      "aria-label": "Choose a color",
      "aria-describedby": api_scoped_id("dialog-body-id")
    },
    key: 0,
    on: {
      "updateselectedcolor": _m0 || ($ctx._m0 = api_bind($cmp.handleUpdateSelectedColor)),
      "keydown": _m1 || ($ctx._m1 = api_bind($cmp.handleKeydown))
    }
  }, [api_element("div", {
    classMap: {
      "slds-popover__body": true
    },
    attrs: {
      "id": api_scoped_id("dialog-body-id")
    },
    key: 1
  }, [api_custom_element("lightning-color-picker-custom", _lightningColorPickerCustom, {
    props: {
      "currentColor": $cmp.currentColor
    },
    key: 2
  }, [])]), api_element("footer", {
    classMap: {
      "slds-popover__footer": true
    },
    key: 3
  }, [api_element("div", {
    classMap: {
      "slds-color-picker__selector-footer": true
    },
    key: 4
  }, [api_element("button", {
    classMap: {
      "slds-button": true,
      "slds-button_neutral": true
    },
    attrs: {
      "name": "cancel"
    },
    key: 5,
    on: {
      "click": _m2 || ($ctx._m2 = api_bind($cmp.handleCancelClick))
    }
  }, [api_text(api_dynamic_text($cmp.i18n.cancelButton))]), api_element("button", {
    classMap: {
      "slds-button": true,
      "slds-button_brand": true
    },
    attrs: {
      "name": "done"
    },
    key: 6,
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.handleDoneClick))
    }
  }, [api_text(api_dynamic_text($cmp.i18n.doneButton))])])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-colorPickerPanel_colorPickerPanel"
