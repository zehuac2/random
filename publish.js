const gh = require("gh-pages");

gh.publish("dist", (err) => {
  if (err) {
    console.log(err);
  }
});
