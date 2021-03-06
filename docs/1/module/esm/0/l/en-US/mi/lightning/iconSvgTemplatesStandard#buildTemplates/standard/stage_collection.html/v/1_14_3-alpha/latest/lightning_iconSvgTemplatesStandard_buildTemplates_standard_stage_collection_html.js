import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/stage_collection.css/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_stage_collection_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/stage_collection.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_stage_collection_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_4/latest/lwc.js";
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
  }, [api_element("circle", {
    attrs: {
      "cx": "49.8",
      "cy": "50",
      "r": "4.2"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M75.9 45.8c-1.5 0-2.9.8-3.6 2.1h-4.5c-1.1-9-8.7-15.9-17.9-15.9S33.1 38.9 32 47.8h-4.3c-.7-1.2-2.1-2.1-3.6-2.1-2.3 0-4.2 1.9-4.2 4.2s1.9 4.2 4.2 4.2c1.5 0 2.8-.8 3.6-1.9h4.4C33.2 61.1 40.8 68 49.9 68c9.1 0 16.7-6.9 17.8-15.7h4.5c.8 1.2 2.1 1.9 3.6 1.9 2.3 0 4.2-1.9 4.2-4.2s-1.8-4.2-4.1-4.2zM49.9 62c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_stage_collection"
