# Passwordless Demo

This is a demo on how to setup a passwordless auth system using Auth 0. It's only dependency is node-fetch on server side.

before you get started, you'll have to 
* run `npm install`
* go create a free auth 0 account. 
* create a passwordless application.
* create an email "Connection"
* turn on the passwordless email connection in your application
* add http://localhost:8080 to your Callbacks page list in your application
* add http://localhost:8080/* to your Logout page list in your application
* add http://localhost:8080/ to your origin list in your application
* get your applications Client Key and Domain and put them in the appropriate places in client.js and server.js

running:
```
node server.js
```

then go to http://localhost:8080 in your browser
