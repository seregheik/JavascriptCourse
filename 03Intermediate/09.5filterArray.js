var users = new Array('Randalf', 'Louis', 'Jane', 'Edes', 'Ebube', 'Alex', 'Kindness', 'Osasere')
    // betterPeople = users.slice(1, 4)
    // console.log(betterPeople);
    // console.log(users.slice(1, 4));

users.splice(1, 3, 'Invalids')
console.log(users);
/*
When dealing with splice the first parameter is for the start point, second argument is how many steps 
it should  count from the first parameter(which is the start point), and the 3rd argument is the replacement for the arrays.
Ps you can add more values for replacement infinitely. 
*/