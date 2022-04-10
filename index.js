function myArray() {
    Object.defineProperty(this, "length", {
        value: 0,
        writable: true,
        enumerable: false, //dont count this property
    });

    this.length = arguments.length;

    for (let i = 0; i < this.length; i++) {
        this[i] = arguments[i];
    }
}

let a2 = new myArray("x", "y", "z");

myArray.prototype.डालो_मर्दे = function (value) {
    let index = this.length;
    this[index] = value;
    this.length++;
};

myArray.prototype.हटा_मर्दे = function () {
    let index = this.length - 1;
    delete this[index];
    this.length--;
};

myArray.prototype.आखिरी_वाला_दिखो = function() {
    let index = this.length-1;

    return this[index];
}

myArray.prototype.दिखावा_गुरु = function() {
    let arr = [];
    for(let i=0 ; i<this.length ; i++) {
        arr[i] = this[i];
    }
    return arr;
}

myArray.prototype.पलटा = function() {
    let arr = new myArray();
    for(let i=this.length-1 ; i>=0 ; i--) {
        arr.डालो_मर्दे(this[i]);
    }
    let res = [];
    for(let i=0 ; i<arr.length ; i++) {
        res[i] = arr[i];
    }
    return res;
}

myArray.prototype.लम्बाइया = function() {
    return this.length;
}

a2.डालो_मर्दे("a"); // array.push() method
a2.डालो_मर्दे("b");
a2.हटा_मर्दे(); // array.pop() method
console.log("a2:", Object.values(a2));
console.log(a2.आखिरी_वाला_दिखो());
console.log(a2.दिखावा_गुरु());
console.log(a2.पलटा());
console.log("लम्बाई", a2.लम्बाइया());