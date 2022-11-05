const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");


const center = document.querySelector(".center");


// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// console.log(getBGColor(pink));

// var color = getBGColor(orange);

// orange.addEventListener('mouseenter', () => {
//     center.style.background = color;
// })


const magicColor = (element, color) => {
    element.addEventListener('mouseenter', () => {
        center.style.background = color;
    });
};

magicColor(violet, getBGColor(violet));
magicColor(red, getBGColor(red));
magicColor(cyan, getBGColor(cyan));
magicColor(orange, getBGColor(orange));
magicColor(pink, getBGColor(pink));