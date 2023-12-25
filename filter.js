let productNames;
const products = [
    {name: 'water bottle', price: 15, company: "pran"},
    {name: 'phone', price: 20000, company: 'walton'},
    {name: 'smart watch', price: 3000, company: 'Samsung'},
    {name: 'watch', price: 300, company: 'ecma'},
    {name: 'glass', price: 30, company: 'energy'}
];

const getPrice = products.filter(product => product.price>300)

console.log(getPrice);