import _implicitStylesheets from "./timesheet_entry.css";

import _implicitScopedStylesheets from "./timesheet_entry.scoped.css?scoped=true";

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
      "d": "M70.9 20H29.1c-4.3 0-7.8 3.5-7.8 7.8v44.3c0 4.3 3.5 7.8 7.8 7.8h41.7c4.3 0 7.8-3.5 7.8-7.8V27.8c.1-4.3-3.4-7.8-7.7-7.8zm-2.6 47c0 1.4-1.2 2.6-2.6 2.6H34.3c-1.4 0-2.6-1.2-2.6-2.6v-2.6c0-1.4 1.2-2.6 2.6-2.6h31.3c1.4 0 2.6 1.2 2.6 2.6V67zM40.9 50l1.4-1.4c.4-.4 1-.4 1.4 0l3.6 3.6 9-9c.4-.4 1-.4 1.4 0l1.4 1.4c.3.4.3 1.1 0 1.4L48.8 56.5c-.4.4-.9.6-1.4.6-.5 0-1-.2-1.4-.6l-5-5c-.5-.5-.5-1.1-.1-1.5zm27.4-14.3c0 1.4-1.2 2.6-2.6 2.6H34.3c-1.4 0-2.6-1.2-2.6-2.6V33c0-1.4 1.2-2.6 2.6-2.6h31.3c1.4 0 2.6 1.2 2.6 2.6v2.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_timesheet_entry"
