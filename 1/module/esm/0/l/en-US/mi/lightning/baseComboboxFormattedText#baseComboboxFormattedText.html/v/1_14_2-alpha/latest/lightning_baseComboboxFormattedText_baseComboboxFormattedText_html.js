import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FbaseComboboxFormattedText%23baseComboboxFormattedText.css%2Fv%2F1_14_2-alpha/latest/lightning_baseComboboxFormattedText_baseComboboxFormattedText_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FbaseComboboxFormattedText%23baseComboboxFormattedText.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_2-alpha/latest/lightning_baseComboboxFormattedText_baseComboboxFormattedText_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_3/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, d: api_dynamic_text, t: api_text, h: api_element, i: api_iterator, f: api_flatten} = $api;
  return api_flatten([$cmp.hasParts ? api_iterator($cmp.text, function (item) {
    return [item.part.highlight ? api_element("strong", {
      key: api_key(0, item.key)
    }, [api_text(api_dynamic_text(item.part.text))]) : null, !item.part.highlight ? api_text(api_dynamic_text(item.part.text)) : null];
  }) : [], !$cmp.hasParts ? api_text(api_dynamic_text($cmp.text)) : null]);
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-baseComboboxFormattedText_baseComboboxFormattedText"
