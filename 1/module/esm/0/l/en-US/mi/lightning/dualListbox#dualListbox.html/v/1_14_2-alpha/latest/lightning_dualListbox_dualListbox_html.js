import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/dualListbox#dualListbox.css/v/1_14_2-alpha/latest/lightning_dualListbox_dualListbox_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/dualListbox#dualListbox.scoped.cssscoped=true/v/1_14_2-alpha/latest/lightning_dualListbox_dualListbox_scoped_css?scoped=true.js";

import _lightningHelptext from "/1/module/esm/0/l/en-US/mi/lightning/helptext/v/1_14_2-alpha/latest/lightning_helptext.js";
import _lightningSpinner from "/1/module/esm/0/l/en-US/mi/lightning/spinner/v/1_14_2-alpha/latest/lightning_spinner.js";
import _lightningButtonIcon from "/1/module/esm/0/l/en-US/mi/lightning/buttonIcon/v/1_14_2-alpha/latest/lightning_buttonIcon.js";
import _lightningIcon from "/1/module/esm/0/l/en-US/mi/lightning/icon/v/1_14_2-alpha/latest/lightning_icon.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_3/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, t: api_text, h: api_element, d: api_dynamic_text, c: api_custom_element, b: api_bind, k: api_key, ti: api_tab_index, i: api_iterator} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9} = $ctx;
  return [api_element("div", {
    attrs: {
      "role": "group",
      "aria-labelledby": api_scoped_id("group-label")
    },
    key: 0
  }, [api_element("div", {
    className: $cmp.computedGroupLabelClass,
    attrs: {
      "id": api_scoped_id("group-label")
    },
    key: 1
  }, [$cmp.required ? api_element("abbr", {
    classMap: {
      "slds-required": true
    },
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 2
  }, [api_text("*")]) : null, api_text(api_dynamic_text($cmp.label))]), $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp
    },
    key: 3
  }, []) : null, api_element("div", {
    classMap: {
      "slds-form-element__control": true
    },
    key: 4
  }, [api_element("div", {
    classMap: {
      "slds-dueling-list": true
    },
    key: 5,
    on: {
      "focusin": _m0 || ($ctx._m0 = api_bind($cmp.handleFocus)),
      "focusout": _m1 || ($ctx._m1 = api_bind($cmp.handleBlur))
    }
  }, [api_element("div", {
    classMap: {
      "slds-assistive-text": true
    },
    attrs: {
      "id": api_scoped_id("assertive-thing"),
      "aria-live": "assertive"
    },
    key: 6
  }, []), api_element("div", {
    classMap: {
      "slds-assistive-text": true
    },
    attrs: {
      "id": api_scoped_id("keyboard-interacton")
    },
    key: 7
  }, [api_text(api_dynamic_text($cmp.i18n.componentAssistiveText))]), api_element("div", {
    className: $cmp.computedLeftColumnClass,
    key: 8
  }, [api_element("span", {
    classMap: {
      "slds-form-element__label": true
    },
    attrs: {
      "id": api_scoped_id("source-list-label")
    },
    key: 9
  }, [api_text(api_dynamic_text($cmp.sourceLabel))]), api_element("div", {
    className: $cmp.computedListboxContainerClass,
    style: $cmp.computedColumnStyle,
    key: 10
  }, [api_element("ul", {
    classMap: {
      "slds-listbox": true,
      "slds-listbox_vertical": true
    },
    attrs: {
      "data-source-list": "",
      "id": api_scoped_id("source-list"),
      "aria-describedby": api_scoped_id("keyboard-interacton"),
      "aria-labelledby": api_scoped_id("source-list-label"),
      "aria-multiselectable": "true",
      "role": "listbox",
      "aria-disabled": $cmp.ariaDisabled
    },
    key: 11
  }, api_iterator($cmp.computedSourceList, function (option, index) {
    return api_element("li", {
      classMap: {
        "slds-listbox__item": true
      },
      attrs: {
        "role": "presentation"
      },
      key: api_key(12, option.value)
    }, [api_element("div", {
      className: option.classList,
      attrs: {
        "aria-selected": option.selected,
        "role": "option",
        "tabindex": api_tab_index(option.tabIndex),
        "data-index": index,
        "data-value": option.value,
        "data-type": $cmp.computedSourceListId
      },
      key: 13,
      on: {
        "click": _m2 || ($ctx._m2 = api_bind($cmp.handleOptionClick)),
        "keydown": _m3 || ($ctx._m3 = api_bind($cmp.handleOptionKeyDown))
      }
    }, [api_element("span", {
      classMap: {
        "slds-media__body": true
      },
      key: 14
    }, [api_element("span", {
      classMap: {
        "slds-truncate": true
      },
      attrs: {
        "title": option.label
      },
      key: 15
    }, [api_text(api_dynamic_text(option.label))])])])]);
  }))]), $cmp.showActivityIndicator ? api_element("div", {
    key: 16
  }, [api_custom_element("lightning-spinner", _lightningSpinner, {
    props: {
      "size": "small",
      "variant": "brand",
      "alternativeText": $cmp.i18n.loadingText
    },
    key: 17
  }, [])]) : null]), api_element("div", {
    classMap: {
      "slds-dueling-list__column": true
    },
    key: 18
  }, [api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    props: {
      "iconName": "utility:right",
      "variant": "container",
      "disabled": $cmp.moveButtonsDisabled,
      "title": $cmp.addButtonLabel,
      "alternativeText": $cmp.addButtonLabel
    },
    key: 19,
    on: {
      "click": _m4 || ($ctx._m4 = api_bind($cmp.handleRightButtonClick))
    }
  }, []), api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    props: {
      "iconName": "utility:left",
      "variant": "container",
      "disabled": $cmp.moveButtonsDisabled,
      "title": $cmp.removeButtonLabel,
      "alternativeText": $cmp.removeButtonLabel
    },
    key: 20,
    on: {
      "click": _m5 || ($ctx._m5 = api_bind($cmp.handleLeftButtonClick))
    }
  }, [])]), api_element("div", {
    classMap: {
      "slds-dueling-list__column": true,
      "slds-dueling-list__column_responsive": true
    },
    key: 21
  }, [api_element("span", {
    classMap: {
      "slds-form-element__label": true
    },
    attrs: {
      "id": api_scoped_id("selected-list-label")
    },
    key: 22
  }, [api_text(api_dynamic_text($cmp.selectedLabel))]), api_element("div", {
    className: $cmp.computedListboxContainerClass,
    style: $cmp.computedColumnStyle,
    key: 23
  }, [api_element("ul", {
    classMap: {
      "slds-listbox": true,
      "slds-listbox_vertical": true
    },
    attrs: {
      "data-selected-list": "",
      "id": api_scoped_id("selected-list"),
      "aria-describedby": api_scoped_id("keyboard-interacton"),
      "aria-labelledby": api_scoped_id("selected-list-label"),
      "aria-multiselectable": "true",
      "role": "listbox",
      "aria-disabled": $cmp.ariaDisabled
    },
    key: 24
  }, api_iterator($cmp.computedSelectedList, function (option, index) {
    return api_element("li", {
      classMap: {
        "slds-listbox__item": true
      },
      attrs: {
        "role": "presentation"
      },
      key: api_key(25, option.value)
    }, [api_element("div", {
      className: option.classList,
      attrs: {
        "aria-selected": option.selected,
        "role": "option",
        "tabindex": api_tab_index(option.tabIndex),
        "data-index": index,
        "data-value": option.value,
        "data-type": $cmp.computedSelectedListId
      },
      key: 26,
      on: {
        "click": _m6 || ($ctx._m6 = api_bind($cmp.handleOptionClick)),
        "keydown": _m7 || ($ctx._m7 = api_bind($cmp.handleOptionKeyDown))
      }
    }, [api_element("span", {
      classMap: {
        "slds-media__body": true
      },
      key: 27
    }, [api_element("span", {
      classMap: {
        "slds-truncate": true
      },
      attrs: {
        "title": option.label
      },
      key: 28
    }, [api_text(api_dynamic_text(option.label))])]), option.isLocked ? api_element("span", {
      classMap: {
        "slds-media__figure": true,
        "slds-media__figure_reverse": true
      },
      key: 29
    }, [api_custom_element("lightning-icon", _lightningIcon, {
      props: {
        "iconName": "utility:lock",
        "size": "x-small",
        "alternativeText": $cmp.computedLockAssistiveText
      },
      key: 30
    }, [])]) : null])]);
  }))])]), !$cmp.disableReordering ? api_element("div", {
    classMap: {
      "slds-dueling-list__column": true
    },
    key: 31
  }, [api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    props: {
      "iconName": "utility:up",
      "variant": "container",
      "disabled": $cmp.disabled,
      "title": $cmp.upButtonLabel,
      "alternativeText": $cmp.upButtonLabel
    },
    key: 32,
    on: {
      "click": _m8 || ($ctx._m8 = api_bind($cmp.handleUpButtonClick))
    }
  }, []), api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    props: {
      "iconName": "utility:down",
      "variant": "container",
      "disabled": $cmp.disabled,
      "title": $cmp.downButtonLabel,
      "alternativeText": $cmp.downButtonLabel
    },
    key: 33,
    on: {
      "click": _m9 || ($ctx._m9 = api_bind($cmp.handleDownButtonClick))
    }
  }, [])]) : null])]), $cmp.errorMessage ? api_element("span", {
    classMap: {
      "slds-has-error": true,
      "slds-form-element__help": true
    },
    attrs: {
      "id": api_scoped_id("error-message"),
      "aria-live": "assertive"
    },
    key: 34
  }, [api_text(api_dynamic_text($cmp.errorMessage))]) : null])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-dualListbox_dualListbox"
