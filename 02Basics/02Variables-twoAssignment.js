const uid = '11233';
var firstName = 'Osasere';
var lastName = 'Ikponmwosa';
var email = 'edenosas1@gmail.com';
var password = '1234567';
var confirmPassword = '1234567';
var country = 'Nigeria';
var state = 'Edo State';
var courseCount = 0;
var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = false;

console.log(`
    welcome ${firstName +' '+ lastName}, your email is ${email}
    and your are from ${state +' '+ country}. You have been enrolled here 
    ${courseCount} times.
`)