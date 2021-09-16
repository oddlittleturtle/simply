//Create URL via Short.io
//https://developers.short.io/reference#linkspost
//Doing it this way because Zapier imposes their own branding on short links when integrating to Twitter.

const options = {
  method: 'POST',
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
  body: JSON.stringify({allowDuplicates: false})
};

fetch('https://api.short.io/links', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

//Generate QR Code for short link

const options = {
  method: 'POST',
  headers: {Accept: 'image/png', 'Content-Type': 'application/json'},
  body: JSON.stringify({type: 'png'})
};

fetch('https://api.short.io/links/qr/linkIdString', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

//Todo: documentation for adding to Ghost webhook integrations and extra script to ghost footer
//Todo: code for adding shortlink to header of each post
//Todo: Twitter API integrations
