const names = new Array ('Youtube', 'Facebook', 'Instagram', 'Netflix', 'Amazon');

for (const n of names) {
    console.log(n)
}

const symbols = {
    yt: 'Youtube',
    ig: 'Instagram',
    fb: 'Facebook',
    lco: 'LearnCodeOnline'
}

for (const m in symbols) {
    console.log(`Key is ${m} and value is : ${symbols[m]}`)
}