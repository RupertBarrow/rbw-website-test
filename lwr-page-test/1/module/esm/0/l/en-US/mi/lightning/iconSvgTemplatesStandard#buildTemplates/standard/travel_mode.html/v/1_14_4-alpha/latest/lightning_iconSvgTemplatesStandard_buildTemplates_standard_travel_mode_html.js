import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Ftravel_mode.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_travel_mode_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Ftravel_mode.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_travel_mode_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M20 20h60v60H20z",
    "fill-rule": "evenodd"
  },
  key: 3,
  svg: true
};
const stc2 = {
  attrs: {
    "mask": "url(#pwa)"
  },
  key: 4,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M53.77 72.12C54 59.88 62.25 50 72.49 50a22.49 22.49 0 01-18.66 22.12M27.49 50C37.75 50 46 59.88 46.16 72.12A22.5 22.5 0 0127.49 50M50 27.51a22.44 22.44 0 0121.12 15H28.88a22.44 22.44 0 0121.12-15M50 20a30 30 0 1030 30 30 30 0 00-30-30",
    "fill-rule": "evenodd"
  },
  key: 5,
  svg: true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, h: api_element} = $api;
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
  }, [api_element("g", stc0, [api_element("mask", {
    attrs: {
      "id": api_scoped_id("pwa"),
      "height": "60",
      "maskUnits": "userSpaceOnUse",
      "width": "60",
      "x": "20",
      "y": "20"
    },
    key: 2,
    svg: true
  }, [api_element("path", stc1)]), api_element("g", stc2, [api_element("path", stc3)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_travel_mode"
}
