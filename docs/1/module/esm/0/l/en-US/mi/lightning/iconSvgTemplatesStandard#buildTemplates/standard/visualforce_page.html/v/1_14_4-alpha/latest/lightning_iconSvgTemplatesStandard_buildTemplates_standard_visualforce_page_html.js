import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/visualforce_page.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_visualforce_page_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/visualforce_page.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_visualforce_page_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M55.4 53.6c-.6 0-1.2-.5-1.2-1.2v-7.3c0-.6.5-1.2 1.2-1.2h7.5c.6 0 1.2.5 1.2 1.2v7.3c0 .6-.5 1.2-1.2 1.2h-7.5zM58.6 57.9l-4.3 4.7c-.3.3-.3.7 0 1l4.3 4.7c.3.3.8.3 1.1 0l4.3-4.7c.3-.3.3-.7 0-1l-4.3-4.7c-.3-.3-.8-.3-1.1 0z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M36.4 45.6l3.8-2.2c.3-.2.8-.2 1.1 0l3.8 2.2c.3.2.6.6.6 1v4.3c0 .4-.2.8-.6 1l-3.8 2.2c-.3.2-.8.2-1.1 0l-3.8-2.2c-.3-.2-.6-.6-.6-1v-4.3c0-.4.2-.8.6-1z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M73.8 20H26.2c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2V26.2c0-3.4-2.8-6.2-6.2-6.2zm0 51.7c0 1.2-.9 2.1-2.1 2.1H28.3c-1.1 0-2.1-.9-2.1-2.1V38.2h47.6v33.5zm0-39.5H26.2v-3.9c0-1.2.9-2.1 2.1-2.1h43.4c1.1 0 2.1.9 2.1 2.1v3.9z"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "cx": "40.7",
    "cy": "63",
    "r": "4.9"
  },
  key: 6,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3), api_element("path", stc4), api_element("circle", stc5)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_visualforce_page"
}
