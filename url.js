const url = require('url');
const url = URL.parse('https://www.google.com/maps#horizontal');
url.host ='maps.google.com'; // https://maps.google.com/maps#horizontal
url.pathname = '/q'; // https://maps.google.com/q
url.hash = 'vertical'; // https://maps.google.com/q#vertical
console.log(URL.format(url));