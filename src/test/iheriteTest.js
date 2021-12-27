function Human(name) {
  this.name = name;
  this.gender;
  this.box = [];
}

Human.prototype.setBox = function (thing) {
  this.box.push(thing);
};

Human.prototype.getBox = function (thing) {
  return this.box;
};

function Man(name) {
  this.gender = "male";
  Human.call(this, name);
}

Man.prototype = new Human();
function Woman() {}

var hongda = new Man("hongda");
hongda.setBox(1);
var jason = new Man("jason");
jason.setBox(2);

console.log(hongda.getBox(), jason.getBox());
