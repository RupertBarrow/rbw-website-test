import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FbaseCombobox%23baseCombobox.css%2Fv%2F1_14_4-alpha/latest/lightning_baseCombobox_baseCombobox_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FbaseCombobox%23baseCombobox.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_baseCombobox_baseCombobox_scoped_css?scoped=true.js";

import _lightningIcon from "/1/module/esm/0/l/en-US/mi/lightning%2Ficon%2Fv%2F1_14_4-alpha/latest/lightning_icon.js";
import _lightningPrimitiveIcon from "/1/module/esm/0/l/en-US/mi/lightning%2FprimitiveIcon%2Fv%2F1_14_4-alpha/latest/lightning_primitiveIcon.js";
import _lightningBaseComboboxItem from "/1/module/esm/0/l/en-US/mi/lightning%2FbaseComboboxItem%2Fv%2F1_14_4-alpha/latest/lightning_baseComboboxItem.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  "role": "none"
};
const stc1 = {
  "slds-icon_container": true,
  "slds-combobox__input-entity-icon": true
};
const stc2 = {
  classMap: {
    "slds-truncate": true
  },
  key: 5
};
const stc3 = {
  classMap: {
    "slds-input__icon-group": true,
    "slds-input__icon-group_right": true
  },
  key: 6
};
const stc4 = {
  "slds-button": true,
  "slds-button_icon": true,
  "slds-input__icon": true,
  "slds-input__icon_right": true
};
const stc5 = {
  props: {
    "iconName": "utility:close",
    "variant": "bare",
    "svgClass": "slds-button__icon"
  },
  key: 8
};
const stc6 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 9
};
const stc7 = {
  classMap: {
    "slds-input__icon-group": true,
    "slds-input__icon-group_right": true
  },
  key: 10
};
const stc8 = {
  classMap: {
    "slds-spinner": true,
    "slds-spinner_brand": true,
    "slds-spinner_x-small": true,
    "slds-input__spinner": true
  },
  attrs: {
    "role": "status"
  },
  key: 11
};
const stc9 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 12
};
const stc10 = {
  classMap: {
    "slds-spinner__dot-a": true
  },
  key: 13
};
const stc11 = {
  classMap: {
    "slds-spinner__dot-b": true
  },
  key: 14
};
const stc12 = {
  "slds-input__icon": true,
  "slds-input__icon_right": true
};
const stc13 = {
  "slds-media": true,
  "slds-listbox__option": true,
  "slds-media_center": true
};
const stc14 = {
  classMap: {
    "slds-listbox__item": true
  },
  attrs: {
    "role": "presentation"
  },
  key: 19
};
const stc15 = {
  classMap: {
    "slds-media": true,
    "slds-listbox__option": true,
    "slds-listbox__option_plain": true,
    "slds-media_small": true
  },
  attrs: {
    "role": "presentation"
  },
  key: 20
};
const stc16 = {
  "slds-listbox__item": true
};
const stc17 = {
  "role": "presentation"
};
const stc18 = {
  classMap: {
    "slds-listbox__item": true
  },
  attrs: {
    "role": "presentation"
  },
  key: 24
};
const stc19 = {
  classMap: {
    "slds-align_absolute-center": true,
    "slds-p-top_medium": true
  },
  key: 25
};
const stc20 = {
  classMap: {
    "slds-spinner": true,
    "slds-spinner_x-small": true,
    "slds-spinner_inline": true
  },
  attrs: {
    "role": "status"
  },
  key: 26
};
const stc21 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 27
};
const stc22 = {
  classMap: {
    "slds-spinner__dot-a": true
  },
  key: 28
};
const stc23 = {
  classMap: {
    "slds-spinner__dot-b": true
  },
  key: 29
};
const stc24 = {
  classMap: {
    "slds-align_absolute-center": true
  },
  key: 30
};
const stc25 = {
  "slds-inline-logo": true
};
const stc26 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, gid: api_scoped_id, h: api_element, d: api_dynamic_text, t: api_text, k: api_key, i: api_iterator, f: api_flatten} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9, _m10, _m11, _m12, _m13, _m14, _m15, _m16, _m17} = $ctx;
  return [api_element("div", {
    className: $cmp.computedDropdownTriggerClass,
    key: 0,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleTriggerClick))
    }
  }, [api_element("div", {
    className: $cmp.computedFormElementClass,
    attrs: stc0,
    key: 1
  }, [$cmp.hasInputPill ? api_custom_element("lightning-icon", _lightningIcon, {
    classMap: stc1,
    props: {
      "iconName": $cmp.inputPill.iconName,
      "alternativeText": $cmp.inputPill.iconAlternativeText,
      "size": "x-small"
    },
    key: 2
  }) : null, !$cmp.isUserInputDisabled ? api_element("input", {
    className: $cmp.computedInputClass,
    attrs: {
      "id": api_scoped_id("combobox-input"),
      "type": "text",
      "role": "combobox",
      "aria-expanded": $cmp.computedAriaExpanded,
      "aria-haspopup": "listbox",
      "required": $cmp.required ? "" : null,
      "readonly": $cmp._inputAriaReadOnly ? "" : null,
      "autocomplete": $cmp.autocomplete,
      "data-value": $cmp.computedInputValue,
      "name": $cmp.name,
      "placeholder": $cmp.computedPlaceholder,
      "maxlength": $cmp.inputMaxlength,
      "disabled": $cmp.disabled ? "" : null,
      "aria-readonly": $cmp._inputAriaReadOnly,
      "aria-autocomplete": $cmp.computedAriaAutocomplete,
      "aria-owns": api_scoped_id("dropdown-element"),
      "aria-label": $cmp.inputLabel
    },
    props: {
      "value": $cmp.computedInputValue
    },
    key: 3,
    on: {
      "focus": _m1 || ($ctx._m1 = api_bind($cmp.handleFocus)),
      "select": _m2 || ($ctx._m2 = api_bind($cmp.handleInputSelect)),
      "change": _m3 || ($ctx._m3 = api_bind($cmp.handleTextChange)),
      "input": _m4 || ($ctx._m4 = api_bind($cmp.handleInput)),
      "keydown": _m5 || ($ctx._m5 = api_bind($cmp.handleInputKeyDown)),
      "blur": _m6 || ($ctx._m6 = api_bind($cmp.handleBlur))
    }
  }) : null, $cmp.isUserInputDisabled ? api_element("button", {
    className: $cmp.computedInputClass,
    attrs: {
      "id": api_scoped_id("combobox-button"),
      "type": "button",
      "aria-expanded": $cmp.computedAriaExpanded,
      "aria-haspopup": "listbox",
      "name": $cmp.name,
      "data-value": $cmp.computedInputValue,
      "disabled": $cmp.disabled ? "" : null,
      "aria-label": $cmp.computedButtonTriggerAriaLabel
    },
    key: 4,
    on: {
      "focus": _m7 || ($ctx._m7 = api_bind($cmp.handleFocus)),
      "keydown": _m8 || ($ctx._m8 = api_bind($cmp.handleInputKeyDown)),
      "blur": _m9 || ($ctx._m9 = api_bind($cmp.handleBlur))
    }
  }, [api_element("span", stc2, [$cmp.computedInputValue ? api_text(api_dynamic_text($cmp.computedInputValue)) : null, !$cmp.computedInputValue ? api_text(api_dynamic_text($cmp.computedPlaceholder)) : null])]) : null, $cmp.hasInputPill ? api_element("div", stc3, [api_element("button", {
    classMap: stc4,
    attrs: {
      "type": "button",
      "title": $cmp.i18n.pillCloseButtonAlternativeText
    },
    key: 7,
    on: {
      "click": _m10 || ($ctx._m10 = api_bind($cmp.handlePillRemove))
    }
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc5), api_element("span", stc6, [api_text(api_dynamic_text($cmp.i18n.pillCloseButtonAlternativeText))])])]) : null, !$cmp.hasInputPill ? api_element("div", stc7, [$cmp.showInputActivityIndicator ? api_element("div", stc8, [api_element("span", stc9, [api_text(api_dynamic_text($cmp.i18n.loadingText))]), api_element("div", stc10), api_element("div", stc11)]) : null, $cmp.inputIconName ? api_custom_element("lightning-icon", _lightningIcon, {
    classMap: stc12,
    props: {
      "alternativeText": $cmp.inputIconAlternativeText,
      "iconName": $cmp.inputIconName,
      "size": $cmp.inputIconSize
    },
    key: 15
  }) : null]) : null]), api_element("div", {
    className: $cmp.computedDropdownClass,
    attrs: {
      "id": api_scoped_id("dropdown-element"),
      "data-dropdown-element": "",
      "role": "listbox"
    },
    key: 16,
    on: {
      "scroll": _m11 || ($ctx._m11 = api_bind($cmp.handleListboxScroll)),
      "mousedown": _m12 || ($ctx._m12 = api_bind($cmp.handleDropdownMouseDown)),
      "mouseup": _m13 || ($ctx._m13 = api_bind($cmp.handleDropdownMouseUp)),
      "mouseleave": _m14 || ($ctx._m14 = api_bind($cmp.handleDropdownMouseLeave)),
      "click": _m15 || ($ctx._m15 = api_bind($cmp.handleOptionClick))
    }
  }, $cmp._hasDropdownOpened ? api_flatten([api_iterator($cmp._items, function (item) {
    return [!item.items ? api_custom_element("lightning-base-combobox-item", _lightningBaseComboboxItem, {
      classMap: stc13,
      attrs: {
        "data-item-id": item.id,
        "data-value": item.value
      },
      props: {
        "role": "option",
        "item": item,
        "id": api_scoped_id(item.id),
        "ariaChecked": item.checked
      },
      key: api_key(17, item.value),
      on: {
        "mouseenter": _m16 || ($ctx._m16 = api_bind($cmp.handleOptionMouseEnter))
      }
    }) : null, item.items ? api_element("ul", {
      attrs: {
        "role": "group",
        "aria-label": item.label
      },
      key: api_key(18, item.label)
    }, api_flatten([item.label ? api_element("li", stc14, [api_element("div", stc15, [api_element("h3", {
      attrs: {
        "role": "presentation",
        "title": item.label
      },
      key: 21
    }, [api_text(api_dynamic_text(item.label))])])]) : null, api_iterator(item.items, function (groupItem) {
      return api_element("li", {
        classMap: stc16,
        attrs: stc17,
        key: api_key(22, groupItem.value)
      }, [api_custom_element("lightning-base-combobox-item", _lightningBaseComboboxItem, {
        classMap: stc13,
        attrs: {
          "data-item-id": groupItem.id,
          "data-value": groupItem.value
        },
        props: {
          "role": "option",
          "item": groupItem,
          "id": api_scoped_id(groupItem.id),
          "ariaChecked": groupItem.checked
        },
        key: 23,
        on: {
          "mouseenter": _m17 || ($ctx._m17 = api_bind($cmp.handleOptionMouseEnter))
        }
      })]);
    })])) : null];
  }), $cmp.showDropdownActivityIndicator ? api_element("div", stc18, [api_element("div", stc19, [api_element("div", stc20, [api_element("span", stc21, [api_text(api_dynamic_text($cmp.i18n.loadingText))]), api_element("div", stc22), api_element("div", stc23)])])]) : null, $cmp.showAttribution ? api_element("div", stc24, [api_element("img", {
    classMap: stc25,
    attrs: {
      "src": $cmp.attributionLogoUrl,
      "alt": $cmp.attributionLogoAssistiveText,
      "title": $cmp.attributionLogoAssistiveText
    },
    key: 31
  })]) : null]) : stc26)])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "lightning-baseCombobox_baseCombobox"
}
