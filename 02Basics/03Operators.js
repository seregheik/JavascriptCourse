var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = Math.round(((listingPrice - sellingPrice) / listingPrice) * 100);

console.log(`
    Discount percentage is ${discountPercent}% off
`)