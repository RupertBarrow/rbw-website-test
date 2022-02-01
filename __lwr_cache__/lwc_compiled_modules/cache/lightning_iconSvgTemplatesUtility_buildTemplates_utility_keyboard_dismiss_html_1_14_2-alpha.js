import _implicitStylesheets from "./keyboard_dismiss.css";

import _implicitScopedStylesheets from "./keyboard_dismiss.scoped.css?scoped=true";

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
      "d": "M48 34.066c1.1 0 2-.9 2-2v-26c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h44zm-42-4v-22h40v22H6z"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M13.665 13.398c0 .8-.7 1.5-1.5 1.5h-.998c-.8 0-1.5-.7-1.5-1.5V12.4c0-.8.7-1.5 1.5-1.5h.998c.8 0 1.5.7 1.5 1.5v.998zM19.402 12.4c0-.801-.7-1.5-1.5-1.5h-.998c-.8 0-1.5.699-1.5 1.5v.998c0 .799.7 1.5 1.5 1.5h.998c.8 0 1.5-.701 1.5-1.5V12.4zM30.878 13.398c0 .8-.698 1.5-1.5 1.5h-.998c-.799 0-1.5-.7-1.5-1.5V12.4c0-.8.701-1.5 1.5-1.5h.998c.802 0 1.5.7 1.5 1.5v.998zM25.14 13.398c0 .8-.699 1.5-1.5 1.5h-.998c-.799 0-1.5-.7-1.5-1.5V12.4c0-.8.701-1.5 1.5-1.5h.998c.801 0 1.5.7 1.5 1.5v.998zM42.354 12.4c0-.801-.699-1.5-1.5-1.5h-.998c-.799 0-1.5.699-1.5 1.5v.998c0 .799.701 1.5 1.5 1.5h.998c.801 0 1.5-.701 1.5-1.5V12.4zM36.615 12.4c0-.801-.699-1.5-1.5-1.5h-.998c-.799 0-1.5.699-1.5 1.5v.998c0 .799.701 1.5 1.5 1.5h.998c.801 0 1.5-.701 1.5-1.5V12.4zM13.665 19.402c0 .8-.7 1.5-1.5 1.5h-.998c-.8 0-1.5-.7-1.5-1.5v-.998c0-.8.7-1.5 1.5-1.5h.998c.8 0 1.5.7 1.5 1.5v.998zM19.402 18.404c0-.801-.7-1.5-1.5-1.5h-.998c-.8 0-1.5.699-1.5 1.5v.998c0 .799.7 1.5 1.5 1.5h.998c.8 0 1.5-.701 1.5-1.5v-.998zM30.878 19.402c0 .8-.698 1.5-1.5 1.5h-.998c-.799 0-1.5-.7-1.5-1.5v-.998c0-.8.701-1.5 1.5-1.5h.998c.802 0 1.5.7 1.5 1.5v.998zM25.14 19.402c0 .8-.699 1.5-1.5 1.5h-.998c-.799 0-1.5-.7-1.5-1.5v-.998c0-.8.701-1.5 1.5-1.5h.998c.801 0 1.5.7 1.5 1.5v.998zM42.354 18.404c0-.801-.699-1.5-1.5-1.5h-.998c-.799 0-1.5.699-1.5 1.5v.998c0 .799.701 1.5 1.5 1.5h.998c.801 0 1.5-.701 1.5-1.5v-.998zM36.615 18.404c0-.801-.699-1.5-1.5-1.5h-.998c-.799 0-1.5.699-1.5 1.5v.998c0 .799.701 1.5 1.5 1.5h.998c.801 0 1.5-.701 1.5-1.5v-.998zM13.665 25.408c0 .801-.7 1.5-1.5 1.5h-.998c-.8 0-1.5-.7-1.5-1.5v-.998c0-.8.7-1.5 1.5-1.5h.998c.8 0 1.5.7 1.5 1.5v.998zM36.615 24.41c0-.801-.7-1.5-1.5-1.5H16.904c-.8 0-1.5.699-1.5 1.5v.998c0 .8.7 1.5 1.5 1.5h18.211c.8 0 1.5-.701 1.5-1.5v-.998zM42.354 24.41c0-.801-.699-1.5-1.5-1.5h-.998c-.799 0-1.5.699-1.5 1.5v.998c0 .8.701 1.5 1.5 1.5h.998c.801 0 1.5-.701 1.5-1.5v-.998zM18.116 37.227h15.792c.447 0 .759.58.4.981l-7.718 9.457c-.266.356-.847.356-1.115 0l-7.807-9.457c-.311-.401-.043-.981.448-.981z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_keyboard_dismiss"
