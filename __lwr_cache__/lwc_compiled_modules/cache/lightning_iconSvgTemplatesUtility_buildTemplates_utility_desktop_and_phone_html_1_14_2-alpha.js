import _implicitStylesheets from "./desktop_and_phone.css";

import _implicitScopedStylesheets from "./desktop_and_phone.scoped.css?scoped=true";

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
      "d": "M50 20.5c0-1.2-1-2.2-2.2-2.2H33.7c-1.2 0-2.2 1-2.2 2.2v23.7c0 1.2 1 2.2 2.2 2.2h14.1c1.2 0 2.2-1 2.2-2.2V20.5z"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M46.7 40.2c0 .4-.4.9-.9.9H35.6c-.4 0-.9-.4-.9-.9V23.5c0-.4.4-.9.9-.9h10.2c.4 0 .9.4.9.9v16.7z"
    },
    key: 3,
    svg: true
  }, []), api_element("g", {
    key: 4,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M27.7 29.4H8.4c-.7 0-1.3-.7-1.3-1.3V11.9c0-.7.7-1.3 1.3-1.3h28.1c.7 0 1.3.7 1.3 1.3v2.5h5.1V9c0-1.8-1.6-3.4-3.4-3.4H5.4C3.6 5.6 2 7.2 2 9v22.2c0 1.8 1.6 3.4 3.4 3.4h22.3v-5.2zM27.7 44.2v-3h-1.9c-.5 0-.9-.4-.9-.9v-1.7c0-.5-.4-.9-.9-.9h-3.4c-.5 0-.9.4-.9.9v1.7c0 .5-.4.9-.9.9h-2.6c-1.8 0-3.4 1.6-3.4 3.4v.4c0 .7.7 1.3 1.3 1.3h14.1c-.4-.6-.5-1.3-.5-2.1z"
    },
    key: 5,
    svg: true
  }, [])]), api_element("circle", {
    attrs: {
      "cx": "40.8",
      "cy": "43.8",
      "r": "1.6"
    },
    key: 6,
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_desktop_and_phone"
