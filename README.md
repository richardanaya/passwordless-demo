# Passwordless Demo

This is a very simple demo on how to setup a Auth0 Passwordless (i.e. login with email code). It's only dependency is `node-fetch` on server side.

Before you get started, you'll have to 
* Run `npm install`
* Go create a free Auth0 account at https://www.auth0.com. 
* Create a single page app in "Applications"
* Create an email connection in "Connection"
* Turn on the passwordless email connection in your application
* Add `http://localhost:8080` to your "Allowed Callback URLs" list in your Auth0 application
* Add `http://localhost:8080/*` to your "Allowed Logout URLs" list in your Auth0 application
* Add `http://localhost:8080` to your "Allowed Web Origins" list in your Auth0 application
* Get your applications "Client ID" and "Domain" and put them in the appropriate places in client.js and server.js

running:
```
node server.js
```

then go to http://localhost:8080 in your browser
