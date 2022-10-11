/*
Define a function that can answer the role of a user.
A user can be on the following roles:
admin - with all access
subadmin - with access to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user

Input: getUserRole(name, role)
*/

var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break; //this isnt necessary

        case "subadmin":
            return `${name} is subadmin with access to create and delete courses`;
            break;

        case "testprep":
            return `${name} is testprep with access to create and delete tests`;
            break;

        case "user":
            return `${name} is a user to consume content`;
            break;

        default:
            return `${name} is a trial user`;
            break;
    }
}

var getRole = getUserRole("Osasere", "admin")

console.log (getRole)