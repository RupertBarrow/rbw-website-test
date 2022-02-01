import _implicitStylesheets from "./colorPickerCustom.css";

import _implicitScopedStylesheets from "./colorPickerCustom.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, d: api_dynamic_text, t: api_text, h: api_element, b: api_bind} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9} = $ctx;
  return [api_element("div", {
    classMap: {
      "slds-color-picker__custom": true
    },
    key: 0
  }, [api_element("p", {
    classMap: {
      "slds-assistive-text": true
    },
    attrs: {
      "id": api_scoped_id("color-picker-instructions")
    },
    key: 1
  }, [api_text(api_dynamic_text($cmp.i18n.colorPickerInstructions))]), api_element("div", {
    classMap: {
      "slds-m-bottom_small": true
    },
    style: $cmp.gradientStyle,
    attrs: {
      "data-id": "color-gradient"
    },
    key: 2,
    on: {
      "mousedown": _m0 || ($ctx._m0 = api_bind($cmp.handleMouseDown))
    }
  }, [api_element("canvas", {
    attrs: {
      "width": $cmp.canvasRect.x,
      "height": $cmp.canvasRect.y
    },
    key: 3
  }, []), api_element("a", {
    classMap: {
      "slds-color-picker__range-indicator": true
    },
    styleDecls: [["position", "absolute", false], ["display", "inline", false]],
    attrs: {
      "data-id": "color-anchor",
      "href": "javascript:void(0)",
      "aria-live": "assertive",
      "aria-atomic": "true",
      "aria-describedby": api_scoped_id("color-picker-instructions")
    },
    key: 4,
    on: {
      "mousedrag": _m1 || ($ctx._m1 = api_bind($cmp.handlePreventDefault)),
      "mousedown": _m2 || ($ctx._m2 = api_bind($cmp.handlePreventDefault)),
      "keydown": _m3 || ($ctx._m3 = api_bind($cmp.handleKeydown))
    }
  }, [api_element("span", {
    classMap: {
      "slds-assistive-text": true
    },
    key: 5
  }, [api_text(api_dynamic_text($cmp.computedSaturationAndBrightness))])])]), api_element("div", {
    classMap: {
      "slds-color-picker__hue-and-preview": true
    },
    key: 6
  }, [api_element("label", {
    classMap: {
      "slds-assistive-text": true
    },
    attrs: {
      "for": api_scoped_id("rainbow")
    },
    key: 7
  }, [api_text(api_dynamic_text($cmp.i18n.hueInput))]), api_element("input", {
    classMap: {
      "slds-color-picker__hue-slider": true
    },
    attrs: {
      "data-id": "hue-slider",
      "type": "range",
      "min": "0",
      "max": "360",
      "id": api_scoped_id("rainbow")
    },
    props: {
      "value": $cmp._hueValue
    },
    key: 8,
    on: {
      "mousedown": _m4 || ($ctx._m4 = api_bind($cmp.handleDrag)),
      "change": _m5 || ($ctx._m5 = api_bind($cmp.onChange))
    }
  }, []), api_element("span", {
    classMap: {
      "slds-swatch": true
    },
    style: $cmp.thumbnailStyle,
    attrs: {
      "data-id": "color-preview"
    },
    key: 9
  }, [api_element("span", {
    classMap: {
      "slds-assistive-text": true
    },
    attrs: {
      "aria-hidden": "true"
    },
    key: 10
  }, [api_text(api_dynamic_text($cmp._hex))])])]), api_element("div", {
    classMap: {
      "slds-color-picker__custom-inputs": true
    },
    key: 11
  }, [api_element("div", {
    classMap: {
      "slds-form-element": true,
      "slds-color-picker__input-custom-hex": true
    },
    key: 12
  }, [api_element("label", {
    classMap: {
      "slds-form-element__label": true
    },
    attrs: {
      "for": api_scoped_id("input")
    },
    key: 13
  }, [api_text(api_dynamic_text($cmp.i18n.hexLabel))]), api_element("div", {
    classMap: {
      "slds-form-element__control": true
    },
    key: 14
  }, [api_element("input", {
    classMap: {
      "slds-input": true
    },
    attrs: {
      "data-primary-input": "",
      "type": "text",
      "id": api_scoped_id("input"),
      "minlength": "4",
      "maxlength": "7",
      "pattern": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",
      "placeholder": "#FFFFFF"
    },
    props: {
      "value": $cmp._hex
    },
    key: 15,
    on: {
      "change": _m6 || ($ctx._m6 = api_bind($cmp.handleHexChange))
    }
  }, [])])]), api_element("div", {
    classMap: {
      "slds-form-element": true
    },
    key: 16
  }, [api_element("label", {
    classMap: {
      "slds-form-element__label": true
    },
    attrs: {
      "for": api_scoped_id("red")
    },
    key: 17
  }, [api_element("abbr", {
    attrs: {
      "title": $cmp.i18n.redAbbr
    },
    key: 18
  }, [api_text(api_dynamic_text($cmp.i18n.rInput))])]), api_element("div", {
    classMap: {
      "slds-form-element__control": true
    },
    key: 19
  }, [api_element("input", {
    classMap: {
      "slds-input": true
    },
    attrs: {
      "type": "text",
      "id": api_scoped_id("red"),
      "data-color-name": "red",
      "placeholder": "255"
    },
    props: {
      "value": $cmp._rgb.red
    },
    key: 20,
    on: {
      "change": _m7 || ($ctx._m7 = api_bind($cmp.handleRgbChange))
    }
  }, [])])]), api_element("div", {
    classMap: {
      "slds-form-element": true
    },
    key: 21
  }, [api_element("label", {
    classMap: {
      "slds-form-element__label": true
    },
    attrs: {
      "for": api_scoped_id("green")
    },
    key: 22
  }, [api_element("abbr", {
    attrs: {
      "title": $cmp.i18n.greenAbbr
    },
    key: 23
  }, [api_text(api_dynamic_text($cmp.i18n.gInput))])]), api_element("div", {
    classMap: {
      "slds-form-element__control": true
    },
    key: 24
  }, [api_element("input", {
    classMap: {
      "slds-input": true
    },
    attrs: {
      "type": "text",
      "id": api_scoped_id("green"),
      "data-color-name": "green",
      "placeholder": "255"
    },
    props: {
      "value": $cmp._rgb.green
    },
    key: 25,
    on: {
      "change": _m8 || ($ctx._m8 = api_bind($cmp.handleRgbChange))
    }
  }, [])])]), api_element("div", {
    classMap: {
      "slds-form-element": true
    },
    key: 26
  }, [api_element("label", {
    classMap: {
      "slds-form-element__label": true
    },
    attrs: {
      "for": api_scoped_id("blue")
    },
    key: 27
  }, [api_element("abbr", {
    attrs: {
      "title": $cmp.i18n.blueAbbr
    },
    key: 28
  }, [api_text(api_dynamic_text($cmp.i18n.bInput))])]), api_element("div", {
    classMap: {
      "slds-form-element__control": true
    },
    key: 29
  }, [api_element("input", {
    classMap: {
      "slds-input": true
    },
    attrs: {
      "type": "text",
      "id": api_scoped_id("blue"),
      "data-color-name": "blue",
      "placeholder": "255"
    },
    props: {
      "value": $cmp._rgb.blue
    },
    key: 30,
    on: {
      "change": _m9 || ($ctx._m9 = api_bind($cmp.handleRgbChange))
    }
  }, [])])])]), $cmp._errorMessage ? api_element("div", {
    classMap: {
      "slds-form-element__help": true
    },
    attrs: {
      "aria-live": "assertive"
    },
    key: 31
  }, [api_text(api_dynamic_text($cmp._errorMessage))]) : null])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-colorPickerCustom_colorPickerCustom"
