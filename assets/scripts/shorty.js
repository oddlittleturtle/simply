//Create URL via Short.io
//https://developers.short.io/reference#linkspost

const options = {
  method: 'POST',
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
  body: JSON.stringify({allowDuplicates: false})
};

fetch('https://api.short.io/links', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
