import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/reassign.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_reassign_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/reassign.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_reassign_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M23.2 10.2C18.1 5.1 10 3.5 2.9 5.7c-.3 0-.7.5-.7 1.3v3.9c0 .8.7 1 1.1.9 5.4-2.2 12-1.2 16.3 3.3l1.1 1.1c.6.6.1 1.7-.7 1.7h-7.8c-.8 0-1.5.6-1.5 1.5v3c0 .8.6 1.5 1.5 1.5l19.2.2c.8 0 1.5-.6 1.5-1.5L33 3.5c0-.8-.6-1.5-1.5-1.5h-3c-.8 0-1.6.6-1.6 1.4l-.1 7.9c0 .8-1.1 1.3-1.7.7.1.1-1.9-1.8-1.9-1.8z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M3.5 27.8h3c.8 0 1.5.7 1.5 1.5v13.2c0 .8.7 1.5 1.5 1.5h33c.8 0 1.5-.7 1.5-1.5V16.9c0-.8-.7-1.5-1.5-1.5h-4c-.8 0-1.5-.7-1.5-1.5v-3c0-.8.7-1.5 1.5-1.5H46c2.2 0 4 1.8 4 4V46c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4V29.3c0-.8.7-1.5 1.5-1.5z"
  },
  key: 3,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_reassign"
}
