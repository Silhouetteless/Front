function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
//setting Dog as a child instance of Animal parent 
Dog.prototype = Object.create(Animal.prototype);
//reseting inherited constructor
Dog.prototype.constructor = Dog;
//adding own property
Dog.prototype.bark = function() {
  console.log("Woof!");
}

let beagle = new Dog();

//Override Inherited Methods

function Bird() { }

//The method we wanna change:
Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

//overriding the method by adding a method to ChildObject.prototype using the same method name as the one to override. 
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird."; 
};

let penguin = new Penguin();
console.log(penguin.fly());

//MIXIN - Add Common Behavior Between Unrelated Objects

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Gliding!");
  }
}

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();
