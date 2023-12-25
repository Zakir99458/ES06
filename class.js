class Support{
    name;
    designation = 'Web development';
    address;
    constructor(p_name, p_addr){
        this.name = p_name;
        this.address = p_addr;
    }
    startSession(){
        console.log(`Session started.....${this.designation}`);
    }
}

const aamir = new Support('Aamir Khan',"Finland");
console.log(aamir);

