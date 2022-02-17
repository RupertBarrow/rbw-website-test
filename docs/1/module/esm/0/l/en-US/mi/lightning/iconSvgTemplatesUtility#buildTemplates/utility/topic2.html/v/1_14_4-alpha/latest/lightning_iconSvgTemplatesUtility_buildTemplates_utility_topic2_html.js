import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/topic2.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_topic2_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/topic2.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_topic2_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M49.2 13.3h-6.5l2.8-10.7v-.2c0-.4-.3-.8-.8-.8h-5.2c-.4 0-.7.3-.8.7l-2.8 11.1h-13l2.8-10.7v-.3c0-.4-.3-.8-.8-.8h-5.2c-.4 0-.7.3-.8.7l-2.9 11H8.8c-.4 0-.7.2-.8.6l-1.3 4.9v.2c0 .4.3.8.8.8h6.8l-3.2 12.5h-7c-.4 0-.7.2-.8.6L2 37.6v.2c0 .4.3.8.8.8h6.6L6.6 49.5v.2c0 .4.3.8.8.8h5.2c.4 0 .7-.2.8-.7l2.9-11.2h12.9l-2.8 10.8v.2c0 .4.3.8.8.8h5.2c.4 0 .7-.2.8-.7L36 38.5h7.1c.4 0 .7-.2.8-.7l1.3-4.9v-.2c0-.4-.3-.8-.8-.8h-6.7L41 19.4h6.9c.4 0 .7-.2.8-.7l1.3-4.9v-.2s-.4-.3-.8-.3zm-18.3 19H18l3.2-12.5h12.9l-3.2 12.5z"
  },
  key: 2,
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
  }, [api_element("g", stc0, [api_element("path", stc1)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_topic2"
}
