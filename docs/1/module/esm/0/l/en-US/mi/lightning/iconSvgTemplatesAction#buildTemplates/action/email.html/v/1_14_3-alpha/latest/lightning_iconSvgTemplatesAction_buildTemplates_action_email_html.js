import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesAction#buildTemplates/action/email.css/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_email_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesAction#buildTemplates/action/email.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_email_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_4/latest/lwc.js";
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
  }, [api_element("g", {
    key: 1,
    svg: true
  }, [api_element("g", {
    key: 2,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M24.9 30.1c.6.6 1.5.6 2.1 0l22.6-21c.5-.8.4-2.1-1.2-2.1l-44.8.1c-1.2 0-2.2 1.1-1.3 2.1l22.6 20.9z"
    },
    key: 3,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M50 17.3c0-1-1.2-1.6-2-.9L30.3 32.7c-1.2 1.1-2.7 1.7-4.3 1.7s-3.1-.6-4.3-1.6L4.1 16.4c-.8-.7-2-.2-2 .9C2 21.8 2 34 2 40c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V17.3z"
    },
    key: 4,
    svg: true
  }, [])])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_email"
