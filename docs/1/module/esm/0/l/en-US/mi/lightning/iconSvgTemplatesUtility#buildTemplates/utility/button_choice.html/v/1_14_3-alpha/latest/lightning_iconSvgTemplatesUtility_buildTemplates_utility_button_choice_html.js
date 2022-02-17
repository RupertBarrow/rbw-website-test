import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/button_choice.css/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_button_choice_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/button_choice.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_button_choice_scoped_css?scoped=true.js";

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
  }, [api_element("path", {
    attrs: {
      "d": "M31.998 12c1.468-.001 3 1.133 3 4.135V26c0 1.513 1.38 2.111 1.98 2.311L43.8 30.8c2.9 1.1 4.7 4.2 3.9 7.4l-3.2 10.4c-.2.8-.9 1.4-1.8 1.4H26.6c-.8 0-1.5-.4-1.8-1.1L18.365 33.96c-.421-.978-.143-1.765.835-2.361 1.8-1.3 4.5.04 5.6 1.94l1.616 2.203c.636 1.208 2.584 1.208 2.584-.592V16.135C29 13.133 30.53 12 31.998 12zM46 2c2.2 0 4 1.8 4 4v15c0 1.882-1.819 4.003-4 4h-5.99C39 25 39 24.188 39 24.06V15.5c0-3.845-1.981-7.5-7-7.5s-7 3.188-7 7.5v8.56a.96.96 0 01-1.012.94H6c-2.2 0-4-1.8-4-4V6c0-2.2 1.8-4 4-4z"
    },
    key: 2,
    svg: true
  }, [])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_button_choice"
