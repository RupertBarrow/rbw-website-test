import _implicitStylesheets from "./yubi_key.css";

import _implicitScopedStylesheets from "./yubi_key.scoped.css?scoped=true";

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
  }, [api_element("g", {
    key: 2,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M38.5 14.1h-37c-.8 0-1.5.7-1.5 1.5v21c0 .8.7 1.5 1.5 1.5h37c.8 0 1.5-.7 1.5-1.5v-21c0-.8-.7-1.5-1.5-1.5zM21 32.2c-3.4 0-6.1-2.7-6.1-6.1S17.6 20 21 20s6.1 2.7 6.1 6.1-2.7 6.1-6.1 6.1z"
    },
    key: 3,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M50.5 18H36c-.8 0-1.5.7-1.5 1.5v13c0 .8.7 1.5 1.5 1.5h14.5c.8 0 1.5-.7 1.5-1.5v-13c0-.8-.7-1.5-1.5-1.5zm-3.4 4c.6 0 1 .4 1 1v1.9H40V22h7.1zm0 8H40v-2.7h8.1V29c0 .6-.4 1-1 1z"
    },
    key: 4,
    svg: true
  }, []), api_element("circle", {
    attrs: {
      "cx": "21",
      "cy": "26.1",
      "r": "1.2"
    },
    key: 5,
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_yubi_key"
