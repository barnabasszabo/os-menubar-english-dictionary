const https = require("https");
const app_id = "1fed5fcb";
const app_key = "28e8c08ecd604d62bf8df77cc9a67d23";
const wordId = "good";
const fields = "pronunciations,definitions,domains,etymologies,regions,registers,examples,variantForms";
const strictMatch = "false";
const options = {
   host: 'od-api.oxforddictionaries.com',
   port: '443',
   path: '/api/v2/entries/en-gb/' + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch,
    // path: '/api/v2/sentences/en/' + wordId + '?strictMatch=' + strictMatch,
   method: "GET",
   headers: {
     'app_id': app_id,
     'app_key': app_key
   }
 };
https.get(options, (resp) => {
  let body = '';
  resp.on('data', (d) => {
    body += d;
  });
  resp.on('end', () => {
    let parsed = JSON.stringify(body);
    console.log(`Received`, body);
  });
});
