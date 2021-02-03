var { translate } = require("google-translate-api-browser");

const line = `Hi my friends`;
translate(line, { from: `en`, to: "hu", raw: false })
  .then(res => {
    console.log(`orig text: ${line} translated:`, res);
  })
  .catch(err => {
    console.error(err);
  });