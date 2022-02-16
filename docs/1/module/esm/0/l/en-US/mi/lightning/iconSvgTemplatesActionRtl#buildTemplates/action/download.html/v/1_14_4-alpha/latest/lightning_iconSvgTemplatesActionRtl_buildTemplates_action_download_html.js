import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesActionRtl%23buildTemplates%2Faction%2Fdownload.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesActionRtl_buildTemplates_action_download_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesActionRtl%23buildTemplates%2Faction%2Fdownload.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesActionRtl_buildTemplates_action_download_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
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
    "d": "M48.5 31h-3c-.8 0-1.5.7-1.5 1.5v10c0 .8-.7 1.5-1.5 1.5h-33c-.8 0-1.5-.7-1.5-1.5v-10c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5V46c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V32.5c0-.8-.7-1.5-1.5-1.5z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M25 37.6c.6.6 1.5.6 2.1 0l13.5-13.5c.6-.6.6-1.5 0-2.1l-2.1-2.1c-.6-.6-1.5-.6-2.1 0l-5.6 5.6c-.6.6-1.7.2-1.7-.7V3.5C29 2.7 28.2 2 27.5 2h-3c-.8 0-1.5.7-1.5 1.5v21.2c0 .9-1.1 1.3-1.7.7l-5.6-5.6c-.6-.6-1.5-.6-2.1 0L11.5 22c-.6.6-.6 1.5 0 2.1L25 37.6z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_download"
}
