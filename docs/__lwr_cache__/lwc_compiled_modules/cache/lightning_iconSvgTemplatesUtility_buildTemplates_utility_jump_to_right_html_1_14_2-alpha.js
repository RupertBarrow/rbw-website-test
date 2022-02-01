import _implicitStylesheets from "./jump_to_right.css";

import _implicitScopedStylesheets from "./jump_to_right.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
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
      "d": "M30.4 11.3L44 24.8a1.57 1.57 0 010 2.2L30.4 40.5a1.57 1.57 0 01-2.2 0L26 38.3a1.57 1.57 0 010-2.2l9.4-9.1a1.57 1.57 0 000-2.2l-9.3-9.1a1.57 1.57 0 010-2.2l2.2-2.2a1.66 1.66 0 012.1 0z"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M12.3 11.3l13.8 13.5a1.57 1.57 0 010 2.2L12.3 40.5a1.57 1.57 0 01-2.2 0l-2.2-2.2a1.57 1.57 0 010-2.2l9.4-9.1a1.57 1.57 0 000-2.2L8 15.7a1.57 1.57 0 010-2.2l2.2-2.2a1.66 1.66 0 012.1 0z"
    },
    key: 3,
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_jump_to_right"
