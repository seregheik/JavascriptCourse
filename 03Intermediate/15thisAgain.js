console.log(this);

var user = {
    firstName: 'Hitesh',
    courseCount: 4,
    getCourseCount: function () {
        console.log('line 7', this);
        
    }
};

// for ( n in user) {
//     console.log(`this is the key: ${n} and these are the values ${user[n]}`)
// }


user.getCourseCount() 
// 'this' refers to global or window object for regular function call
// in this case this was a function in object


function sayHello () {
    console.log('Hello'); 
}

sayHello()