import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/my/formulaire#formulaire.css/v/0_0_1/latest/my_formulaire_formulaire_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/my/formulaire#formulaire.scoped.css?scoped=true/v/0_0_1/latest/my_formulaire_formulaire_scoped_css?scoped=true.js";

import _myPicklist from "/1/module/esm/0/l/en-US/mi/my/picklist/v/0_0_1/latest/my_picklist.js";
import _lightningInput from "/1/module/esm/0/l/en-US/mi/lightning/input/v/1_14_4-alpha/latest/lightning_input.js";
import _lightningInputAddress from "/1/module/esm/0/l/en-US/mi/lightning/inputAddress/v/1_14_4-alpha/latest/lightning_inputAddress.js";
import _lightningButton from "/1/module/esm/0/l/en-US/mi/lightning/button/v/1_14_4-alpha/latest/lightning_button.js";
import _lightningCard from "/1/module/esm/0/l/en-US/mi/lightning/card/v/1_14_4-alpha/latest/lightning_card.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {t: api_text, h: api_element, b: api_bind, c: api_custom_element} = $api;
  const {_m0, _m1, _m2, _m3, _m4} = $ctx;
  return [api_custom_element("lightning-card", _lightningCard, {
    props: {
      "variant": "Narrow",
      "title": "Vos coordonnées",
      "iconName": "standard:contact"
    },
    key: 0
  }, [api_element("p", {
    attrs: {
      "slot": "actions"
    },
    key: 1
  }, [api_text("Actions")]), api_element("div", {
    key: 2
  }, [api_custom_element("my-picklist", _myPicklist, {
    props: {
      "options": $cmp.salutationOptions,
      "label": "Salutation"
    },
    key: 3,
    on: {
      "selected": _m0 || ($ctx._m0 = api_bind($cmp.selectedSalutationHandler))
    }
  }, []), api_custom_element("lightning-input", _lightningInput, {
    props: {
      "label": "Prénom",
      "name": "Firstname",
      "value": $cmp.person.Firstname,
      "required": true
    },
    key: 4,
    on: {
      "keyup": _m1 || ($ctx._m1 = api_bind($cmp.personChangeHandler))
    }
  }, []), api_custom_element("lightning-input", _lightningInput, {
    props: {
      "label": "Nom",
      "name": "Lastname",
      "value": $cmp.person.Lastname,
      "required": true
    },
    key: 5,
    on: {
      "keyup": _m2 || ($ctx._m2 = api_bind($cmp.personChangeHandler))
    }
  }, [])]), api_custom_element("lightning-input-address", _lightningInputAddress, {
    props: {
      "addressLabel": "Adresse",
      "addressLookupPlaceholder": "Tapez votre adresse ici ...",
      "streetLabel": "Rue",
      "street": $cmp.person.MailingStreet,
      "cityLabel": "Ville",
      "city": $cmp.person.MailingCity,
      "countryLabel": "Pays",
      "country": $cmp.person.MailingCountry,
      "provinceLabel": "Région",
      "province": " ",
      "postalCodeLabel": "Code postal",
      "postalCode": $cmp.person.MailingPostalCode,
      "required": true,
      "fieldLevelHelp": "Saisissez le début de votre adresse, et la recherche fera le reste pour vous : sélectionnez votre adresse parmi celles proposées",
      "showAddressLookup": true
    },
    key: 6,
    on: {
      "change": _m3 || ($ctx._m3 = api_bind($cmp.contactAddressChangeHandler))
    }
  }, []), api_custom_element("lightning-button", _lightningButton, {
    attrs: {
      "slot": "footer"
    },
    props: {
      "variant": "brand",
      "label": "Enregistrer"
    },
    key: 7,
    on: {
      "click": _m4 || ($ctx._m4 = api_bind($cmp.submitHandler))
    }
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
tmpl.stylesheetToken = "my-formulaire_formulaire"
