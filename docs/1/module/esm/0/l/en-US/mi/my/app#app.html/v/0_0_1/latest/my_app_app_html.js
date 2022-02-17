import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/my/app%23app.css/v/0_0_1/latest/my_app_app_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/my/app%23app.scoped.css?scoped=true/v/0_0_1/latest/my_app_app_scoped_css?scoped=true.js";

import _myFormulaire from "/1/module/esm/0/l/en-US/mi/my/formulaire/v/0_0_1/latest/my_formulaire.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element} = $api;
  return [api_element("div", {
    key: 0
  }, [api_custom_element("my-formulaire", _myFormulaire, {
    key: 1
  }, [])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "my-app_app"
