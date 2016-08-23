import 'whatwg-fetch';

const rootUrl = 'http://query.yahooapis.com/v1/public/yql?q=';
let defaultQuery = 'select%20*%20from%20weather.forecast%20' +
  'where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20' +
  'where%20text%3D';
let suffix = '%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithke';

module.exports = {
  get(location) {
    location = encodeURIComponent('"' + location + '"') || '%22fairfax%2C%20va%22';
    let query = defaultQuery + location;
    return fetch(rootUrl + query + suffix).then(function(response) {
      return response.json();
    });
  }
};
