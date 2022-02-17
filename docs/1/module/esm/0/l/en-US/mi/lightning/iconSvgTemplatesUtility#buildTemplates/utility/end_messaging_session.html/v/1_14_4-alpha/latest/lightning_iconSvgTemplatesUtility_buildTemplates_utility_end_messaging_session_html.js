import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/end_messaging_session.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_end_messaging_session_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/end_messaging_session.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_end_messaging_session_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M24.6 40.6c0-2.8.7-5.4 2-7.7h-2.3c-.5 0-.8-.3-.8-.8v-9.2c0-.5.3-.8.8-.8h9.2c.5 0 .8.3.8.8v3c1.9-.8 4.1-1.3 6.3-1.3 1.5 0 2.9.2 4.2.6.2-1.1.3-2.2.3-3.3-.1-11-9.6-19.8-21.5-19.8S2.2 10.9 2.2 21.7c0 3.4 1 6.6 2.6 9.5.3.4.4 1 .2 1.5l-2.8 7.6c-.3.7.4 1.3 1.2 1.2l7.7-3c.4-.2 1-.1 1.5.2 3.2 1.8 7.1 2.9 11.2 2.9h.8v-1zM12.8 12.2c0-.5.3-.8.8-.8h19.9c.5 0 .8.3.8.8v4.6c0 .5-.4.8-.9.8H13.6c-.5 0-.8-.3-.8-.8v-4.6zM19 32.1c0 .5-.4.8-.9.8h-4.6c-.5 0-.8-.3-.8-.8v-9.2c0-.5.3-.8.8-.8h4.7c.5 0 .8.3.8.8v9.2z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M31.8 34.6l6 6-6 6c-.6.6-.6 1.6 0 2.1l.7.7c.6.6 1.6.6 2.1 0l6-6 6 6c.6.6 1.6.6 2.1 0l.7-.7c.6-.6.6-1.6 0-2.1l-6-6 6-6c.6-.6.6-1.6 0-2.1l-.7-.7c-.6-.6-1.6-.6-2.1 0l-6 6-6-6c-.6-.6-1.6-.6-2.1 0l-.7.7c-.6.6-.6 1.6 0 2.1z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_end_messaging_session"
}
