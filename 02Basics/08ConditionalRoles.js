// Create an application with following roles :
// admin - gets full access 
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests 
// user - gets access to consume content

var user = "admin";

switch (user) {
    case "testprep":
        console.log('gets access to create/delete tests');
        break;
    case "user":
        console.log('gets access to consume content');
        break;
    case "subadmin":
        console.log('gets access to create/delete courses');
        break;
    case "admin":
        console.log('gets full access');
        break;
    default:
        console.log('Trial user');
        break;
}