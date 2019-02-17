const http = require('http')
const fetch = require("node-fetch");
const url = require("url")
const fs = require("fs")

const requestHandler = (request, response) => {
  // simple dumb static website
  let u = url.parse(request.url);
  if(u.path == "/" || u.path == "/index.html"){
    response.end(fs.readFileSync('index.html', 'utf8'));
    return;
  }
  if(u.path == "/client.js"){
    response.end(fs.readFileSync('client.js', 'utf8'));
    return;
  }

  // all other paths act like api
  
  // get the header for auth
  let auth = request.headers["my-authorization"];

  // ask auth0 for identity info
  fetch("https://<auth0-domain>.auth0.com/userinfo", {
    headers: {
      Authorization: "Bearer " + auth
    }
  })
  .then(res=>res.json())
  .then(body=>{
    // use the info
    response.end(`Hello ${body.email}!`)
  })
}

// start server
const server = http.createServer(requestHandler)
console.log("listening on http://localhost:8080")
server.listen(8080);
