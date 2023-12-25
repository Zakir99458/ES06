class Support{
    // name;
    designation = 'Web development';
    startSession(){
        console.log(`Session started.....${this.designation}`);
    }
}

const aamir = new Support();
console.log(aamir.startSession());

