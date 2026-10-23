const name = "Satyam     ";

// console.log(name.length);
// console.log(name.trim().length);

String.prototype.trueLength = function(){
    console.log(`True Length of the String is ${this.trim().length}`);
    console.log(this);
}

name.trueLength();//Created a New Function in Java Rather Than using a Built in Function
