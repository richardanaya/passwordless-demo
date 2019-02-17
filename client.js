// Initialize passwordless
var lock = new Auth0LockPasswordless(
  "<auth0-client-id>",
  "<auth0-domain>.auth0.com"
);

// 1) if we are on a page without auth, send them to the home page to login
// if we have no stored auth and are not at the root of our website
if (
  localStorage.getItem("auth") === null &&
  window.location.href !== window.location.origin &&
  window.location.href !== window.location.origin + "/"
) {
  // go to the root of our website to login
  window.location.href = window.location.origin;
}

// on arrival, lets if we are logged in
lock.checkSession(
  {
    // Logging in will always send is back to home page
    redirectUri: window.location.origin
  },
  (error, authResult) => {
    // if we are not logged in
    if (error || !authResult) {
      // let's make sure we clear our local storage
      localStorage.removeItem("auth");
      // if we aren't at login screen, go there
      if (
        window.location.href !== window.location.origin &&
        window.location.href !== window.location.origin + "/"
      ) {
        // go to the root of our website to login
        window.location.href = window.location.origin;
      }
      // show login
      let loginButton = document.createElement("button");
      loginButton.innerHTML = "Login";
      loginButton.addEventListener("click",function(){
        lock.show({
          passwordlessMethod: "link"
        });
      })
      document.body.appendChild(loginButton);
    } else {
      // store it in our local storage until its no good
      localStorage.setItem("auth", authResult.accessToken);
      // show logout
      let logoutButton = document.createElement("button");
      logoutButton.innerHTML = "Logout";
      logoutButton.addEventListener("click",function(){
        localStorage.removeItem("auth");
        lock.logout({ returnTo: window.location.origin });
      })
      document.body.appendChild(logoutButton);
      // hit up our api
      fetch("/test",{headers:{"my-authorization": authResult.accessToken}})
        .then(res=>res.text())
        .then(x=>{
          document.body.innerHTML += x
        })
    }
  }
);
