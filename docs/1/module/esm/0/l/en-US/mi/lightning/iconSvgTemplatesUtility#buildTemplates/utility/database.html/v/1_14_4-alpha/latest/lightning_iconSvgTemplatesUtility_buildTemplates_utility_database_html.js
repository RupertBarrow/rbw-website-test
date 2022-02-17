import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/database.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_database_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/database.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_database_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M45.4 9c0-3.8-8.7-6.9-19.4-6.9S6.6 5.2 6.6 9v2.4c0 3.8 8.7 6.9 19.4 6.9s19.4-3.1 19.4-6.9V9z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M6.6 17c0 3 8.7 5.4 19.4 5.4S45.4 20 45.4 17v4.9c0 3.8-8.7 6.9-19.4 6.9S6.6 25.7 6.6 21.9V17z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M6.6 17c0 3 8.7 5.4 19.4 5.4S45.4 20 45.4 17v4.9c0 3.8-8.7 6.9-19.4 6.9S6.6 25.7 6.6 21.9V17z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M6.6 27.5c0 3 8.7 5.4 19.4 5.4s19.4-2.4 19.4-5.4v4.9c0 3.8-8.7 6.9-19.4 6.9s-19.4-3-19.4-6.8v-5z"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M6.6 38.1c0 3 8.7 5.4 19.4 5.4s19.4-2.4 19.4-5.4V43c0 3.8-8.7 6.9-19.4 6.9S6.6 46.8 6.6 43v-4.9z"
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
      "viewBox": "0 0 52 52"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("path", stc4), api_element("path", stc5)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_database"
}
