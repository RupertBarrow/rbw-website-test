import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fsymbols.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_symbols_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fsymbols.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_symbols_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M33.5 28l1-4h3l-1 4h-3zm-.75 3h3L35 34h3l.75-3H42v-3h-2.5l1-4h3v-3h-2.25l.75-3h-3l-.75 3h-3l.75-3h-3l-.75 3H29v3h2.5l-1 4H27v3h2.75L29 34h3l.75-3zM4 6h44a2 2 0 012 2v36a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm19.837 20.81c.609-.446 1.096-.84 1.464-1.186.38-.357.708-.797.985-1.319.284-.536.425-1.156.425-1.855 0-.897-.226-1.703-.677-2.411-.45-.707-1.087-1.262-1.905-1.663-.813-.4-1.745-.598-2.794-.598-1.24 0-2.32.232-3.237.698-.913.464-1.726 1.144-2.437 2.036l-.149.187 2.084 1.817.165-.187c.51-.58 1.022-1.009 1.537-1.287.504-.273 1.109-.41 1.817-.41.674 0 1.197.177 1.58.528.38.347.568.808.568 1.4 0 .483-.144.882-.432 1.21-.316.357-.805.775-1.466 1.249-.746.522-1.315 1.008-1.704 1.459-.415.48-.622 1.084-.622 1.802V29h3.14v-.28c0-.316.114-.592.35-.84.265-.28.701-.637 1.308-1.07zM10 18v11h3V18h-3zm1.5 16.5a2 2 0 100-4 2 2 0 000 4zm9 0a2 2 0 100-4 2 2 0 000 4z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_symbols"
}
