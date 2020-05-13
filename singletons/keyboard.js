const MAX_SIZE = 40;

class Keyboard {
    constructor() {
        this.buffer = '';
        this.maxsize = MAX_SIZE;
    }
    addKey(c) {
        if(this.buffer.length === this.maxsize){
            this.buffer = this.buffer.substring(1) + c;
        }
        else {
            this.buffer += c;
        }
    }
}

const keyboard = new Keyboard();

module.exports = keyboard;
