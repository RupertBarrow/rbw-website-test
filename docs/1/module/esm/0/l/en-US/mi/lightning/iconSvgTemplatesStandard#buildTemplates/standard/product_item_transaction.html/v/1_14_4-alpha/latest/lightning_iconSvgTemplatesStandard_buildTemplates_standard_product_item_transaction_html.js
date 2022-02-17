import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/product_item_transaction.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_product_item_transaction_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/product_item_transaction.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_product_item_transaction_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "x": "19",
    "y": "18.92",
    "width": "60",
    "height": "16",
    "rx": "4",
    "ry": "4"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "x": "19",
    "y": "40.92",
    "width": "27",
    "height": "16",
    "rx": "4",
    "ry": "4"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "x": "19",
    "y": "62.92",
    "width": "27",
    "height": "16",
    "rx": "4",
    "ry": "4"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M64.95 72.49a1.45 1.45 0 002.1 0l11.5-11.4a1.45 1.45 0 000-2.1L67 47.49a1.45 1.45 0 00-2.1 0l-2.1 2.1a1.45 1.45 0 000 2.1l3.6 3.6a1 1 0 01-.7 1.7H53.6a1.63 1.63 0 00-1.6 1.5v3A1.71 1.71 0 0053.6 63h12.15a1 1 0 01.7 1.7l-3.6 3.6a1.45 1.45 0 000 2.1z"
  },
  key: 5,
  svg: true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("rect", stc1), api_element("rect", stc2), api_element("rect", stc3), api_element("path", stc4)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_product_item_transaction"
}
