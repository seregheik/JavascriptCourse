tipper("80");

function tipper (a) {
    var bill = parseFloat(a) ;
    console.log(bill + 5);
}

bigTipper("200");

bigTipper = function (a) {
    var bill = parseFloat(a);
    console.log(bill + 15);
}

