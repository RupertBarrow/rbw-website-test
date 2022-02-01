import _implicitStylesheets from "./record_lookup.css";

import _implicitScopedStylesheets from "./record_lookup.scoped.css?scoped=true";

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
      "d": "M17.2 11.6h17.6c.9 0 1.6-.7 1.6-1.6V6.8c0-2.6-2.2-4.8-4.8-4.8H20.4c-2.6 0-4.8 2.2-4.8 4.8V10c0 .9.7 1.6 1.6 1.6z"
    },
    key: 3,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M43.6 6H42c-.5 0-.8.3-.8.8V10c0 3.5-2.9 6.4-6.4 6.4H17.2c-3.5 0-6.4-2.9-6.4-6.4V6.8c0-.5-.3-.8-.8-.8H8.4c-2.6 0-4.8 2.2-4.8 4.8v34.4c0 2.6 2.2 4.8 4.8 4.8h35.2c2.6 0 4.8-2.2 4.8-4.8V10.8c0-2.6-2.2-4.8-4.8-4.8zm-6.1 38.1l-1 1c-.3.3-.7.3-1 0L29 38.6c-1.9 1.3-4.2 2-6.7 1.6-4.2-.6-7.5-4.1-7.9-8.3-.6-5.8 4.3-10.7 10.1-10.1 4.3.4 7.7 3.7 8.3 7.9.4 2.5-.3 4.9-1.6 6.7l6.5 6.5c.1.4.1.8-.2 1.2z"
    },
    key: 4,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M23.5 24.8c-3.5 0-6.3 2.9-6.3 6.3 0 3.5 2.8 6.3 6.3 6.3s6.3-2.8 6.3-6.3-2.8-6.3-6.3-6.3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_record_lookup"
