let productNames;
const products = [
    {name: 'water bottle', price: 15, company: "pran"},
    {name: 'phone', price: 20000, company: 'walton'},
    {name: 'smart watch', price: 3000, company: 'Samsung'}
];

productNames = products.map(product => product.name);
console.log(productNames);
