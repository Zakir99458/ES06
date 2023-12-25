const fish = {id: 98, name: "Hilsha", phone: '01684030291', address: "vantaa"};

const {phone, id, address} = fish;

console.log(phone);

// array of objects
const company = {
    name: 'GP',
    dept: 'IT',
    web:{work: 'web development', framework:'cakePHP'}
}

const {framework} = company.web;
console.log(framework);
console.log(company.name);
