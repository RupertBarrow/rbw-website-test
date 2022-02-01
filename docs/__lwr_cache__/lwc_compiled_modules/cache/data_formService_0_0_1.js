const URL = 'http://localhost:3002/api/form/'; //const URL = 'https://rapido-forms-node-proxy--dev.herokuapp.com/api/form'

export const postForm = person => {
  console.log('### postForm ... ');
  let body = {
    Person__c: JSON.stringify(person)
  };
  return fetch(URL, postRequest(body)).then(response => checkError(response)).then(response => {
    console.log('... OK');
    return response.data;
  }).catch(error => {
    console.log('### TECHNICAL ERROR postForm() : ', error, JSON.stringify(error));
    throw new Error('Error posting form : ' + error);
  });
};

function checkError(response) {
  if (response.ok) {
    return response.json();
  } else {
    console.log('### APPLICATION ERROR postForm() : ', response.Status, response.StatusText);
    throw Error(response.statusText);
  }
}

function postRequest(body) {
  return {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };
}