import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
import _tmpl from "/1/module/esm/0/l/en-US/mi/my/formulaire%23formulaire.html/v/0_0_1/latest/my_formulaire_formulaire_html.js";
import { postForm } from '/1/module/esm/0/l/en-US/mi/data/formService/v/0_0_1/latest/data_formService.js';

class InputNameRequired extends LightningElement {
  constructor(...args) {
    super(...args);
    this.person = {};
    this.form = {};
    this.consents = {};
    this.salutationOptions = [{
      label: 'Mr.',
      value: 'Mr'
    }, {
      label: 'Ms.',
      value: 'Ms'
    }, {
      label: 'Mrs.',
      value: 'Mrs'
    }, {
      label: 'Dr.',
      value: 'Dr'
    }, {
      label: 'Prof.',
      value: 'Prof'
    }];
  }

  ///////////////////////////////////////////////////////////////////////
  selectedSalutationHandler(event) {
    this.formData.Salutation = event.detail;
  }

  personChangeHandler(event) {
    const {
      name,
      value
    } = event.target;
    this.person = { ...this.person,
      [name]: value
    };
  }

  contactAddressChangeHandler(event) {
    this.person.MailingStreet = event.target.street;
    this.person.MailingCity = event.target.city;
    this.person.MailingPostalCode = event.target.postalCode;
    this.person.MailingCountry = event.target.country;
    console.log(this.person);
  }

  submitHandler(event) {
    event.preventDefault();
    console.log('### submitHandler : person = ', this.person); // RBW FIXME : temporaire

    this.person.AccountId = '0011x00001W4bkQ';
    this.checkAddress();
    /*
    postForm(this.person)
    .then(response => {
      console.log('### postForm OK', response)
    })
    .catch(error => {
      console.log('### postForm ERROR', error)
    })
    */
  }

  checkAddress() {
    const address = this.template.querySelector('lightning-input-address');

    if (!address.checkValidity()) {
      address.showHelpMessageIfInvalid();
    }
  } /////////////////////////////////////////////////////////////////////////


}

_registerDecorators(InputNameRequired, {
  fields: ["person", "form", "consents", "salutationOptions"]
});

export default _registerComponent(InputNameRequired, {
  tmpl: _tmpl
});