import _implicitStylesheets from "./toggle.css";

import _implicitScopedStylesheets from "./toggle.scoped.css?scoped=true";

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
      "d": "M20 33.34a13.43 13.43 0 0113-13.43h33.56a13.45 13.45 0 010 26.89H33a13.44 13.44 0 01-13-13.46zm13.44 7.53a7.53 7.53 0 10-7.52-7.53 7.58 7.58 0 007.52 7.53zM20 66.46A13.44 13.44 0 0133 53h33.56a13.45 13.45 0 010 26.89H33a13.43 13.43 0 01-13-13.43zM67.06 57H32.94a9.53 9.53 0 000 19h34.12a9.53 9.53 0 000-19zm-.5 16a6.53 6.53 0 116.52-6.52A6.58 6.58 0 0166.56 73z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_toggle"
