import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/shift_pattern_entry.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_shift_pattern_entry_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/shift_pattern_entry.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_shift_pattern_entry_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M27.4 2A1.58 1.58 0 0129 3.6v11.2a3.89 3.89 0 004.2 4.2h11.2a1.58 1.58 0 011.6 1.6v24.6a4.87 4.87 0 01-4.8 4.8H10.8A4.87 4.87 0 016 45.2V6.8A4.87 4.87 0 0110.8 2h16.6zm8.79 38.66H26.8a.93.93 0 00-.93.93v2.65a.93.93 0 00.93.93h9.39a.93.93 0 00.93-.93v-2.65a.93.93 0 00-.93-.93zm0-10.79H15.73a.93.93 0 00-.93.93v6.32a.93.93 0 00.93.93h20.46a.93.93 0 00.93-.93V30.8a.93.93 0 00-.93-.93zM25.12 22.8h-9.39a.93.93 0 00-.93.93v2.65a.93.93 0 00.93.93h9.39a.93.93 0 00.93-.93v-2.65a.93.93 0 00-.93-.93zM34.2 2a1.4 1.4 0 01.9.3l10.6 10.6a1.4 1.4 0 01.3.9 1.2 1.2 0 01-1.1 1.2h-8.5a3.5 3.5 0 01-3.4-3.4V3.1A1.2 1.2 0 0134.2 2z"
  },
  key: 2,
  svg: true
};
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
  }, [api_element("g", stc0, [api_element("path", stc1)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_shift_pattern_entry"
}
