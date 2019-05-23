
function Animal (name){
    this.name = name;
}

Animal.prototype.getName = function (){
    return this.name;
}

function Dog (name){
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function (){
    var result = "Dog" + " " + this.name + " " +"is barking";
    return result;
}

var dog = new Dog('Aban');