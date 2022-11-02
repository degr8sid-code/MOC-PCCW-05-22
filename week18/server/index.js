// server/index.js

const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
// const url = `http://localhost:1337/api/books`;
const url = `https://example-data.draftbit.com/books?_limit=5`

const options = {
    method: 'GET'
};

const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

app.get("/api", async function (req, res) {
    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

