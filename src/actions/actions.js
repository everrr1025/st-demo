import Action from "../modules/Action";

var move = new Action({
  name: "move",
  perform: function () {
    console.log(`${this.getOwner().name} is moving hahaha`);
  },
});
var speak = new Action({
  name: "speak",
  perform: function () {
    console.log(`${this.getOwner().name} is speaking`);
  },
});

export { move, speak };
