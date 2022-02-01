import _implicitStylesheets from "./selling_model.css";

import _implicitScopedStylesheets from "./selling_model.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
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
  }, [api_element("g", {
    key: 1,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M73.41 27.84h-2V25.2a3.29 3.29 0 00-3.26-3.32h-1.1a3.29 3.29 0 00-3.3 3.28v2.67h-9.9V25.2a3.31 3.31 0 00-3.29-3.32h-1.12a3.31 3.31 0 00-3.29 3.32v2.64H35.9V25.2a3.29 3.29 0 00-3.26-3.32H31.5a3.3 3.3 0 00-3.29 3.31v2.64h-1.62A6.61 6.61 0 0020 34.46v37a6.61 6.61 0 006.59 6.63h46.82a6.61 6.61 0 006.59-6.6v-37a6.61 6.61 0 00-6.58-6.64zm-33.55 38H34.3V43h5.56zm8 0h-3.81V43h3.86zm9.33 0h-5.52V43h5.57zm8.46 0h-3.83V43h3.88z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_selling_model"
