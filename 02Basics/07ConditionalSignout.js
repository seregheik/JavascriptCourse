// Show user a signout buttonif he is authenticated,
// otherwise show him option to Login/Signup.

var authenticated = false;

// if (authenticated) {
//     console.log("Show signout button");
// } else {
//     console.log("Hide login option");
// }

authenticated ? console.log("Signout button") : console.log("Login");