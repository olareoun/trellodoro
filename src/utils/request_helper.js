//polyfills fetch for non-compatible browser (issue #6)
import fetch from 'isomorphic-fetch'

// Makes an AJAX call using fetch API
export default function makeRequest(endpoint, config={}) {
  return fetch(endpoint, config)
    .then(response => {
        return response.json()
          .then(json => ({ json, response }))
          .catch(() => ({ response }))
      }
    )
    .then(({ json, response }) => {
      //console.log('Fetch then', json, response);
      if (!response.ok) {
        //NOTE: this "errors" props is app-specific
        //throw json.errors
        throw json ? json : new Error(response.statusText)
      }
      else {
        //NOTE: this json.data is app-specific!!!
        //return json.data;
        return json

      }
    })
}

