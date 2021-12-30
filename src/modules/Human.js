import Instance from "./Instance";
import { move, speak } from "../actions/actions";
import { hungry, newVistor } from "../events/events";
import { setMessage } from "../utils/print";

export default function Human(name, gender) {
  this.gender = gender;
  this.alive = true;
  this.energy = 10; // take 10 energy as default

  Instance.call(this, name);
}

Human.prototype = new Instance();

//from, to - Scene
Human.prototype.move = function (from, to) {
  var msg;
  if (this.getScene().name == to.name) {
    msg = `${this.name}在${to.name}停留了一下`;
  } else {
    msg = `${this.name}来到了${to.name}`;
  }

  setMessage(msg);
  this.getScene().unregisterInstances(this);
  this.setScene(to);
  this.getScene().registerInstances(this);
  newVistor.additionInfo.to = to;
  newVistor.additionInfo.instance = this;

  //take food

  if (to.name === "厨房" && to.properties.food > 0) {
    this.energy = this.energy + 3;
    to.properties.food--;
    setMessage(`${this.name} 吃了个蛋，恢复了体力`);
  }
  this.energy--;
  if (this.energy == 0) {
    setMessage(`${this.name}体力耗尽，挂了！`);
    this.alive = false;
    this.getScene().unregisterInstances(this);
  }

  newVistor.broadcast();
};
Human.prototype.speak = function () {
  var msg = `${this.name} is speaking`;
  console.log(msg);
  setMessage(msg);
};
