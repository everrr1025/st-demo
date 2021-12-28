import Instance from "./Instance";
import { move, speak } from "../actions/actions";
import { hungry, newVistor } from "../events/events";
import { setMessage } from "../utils/print";

export default function Human(name, gender) {
  this.gender = gender;

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
  newVistor.broadcast();
};
Human.prototype.speak = function () {
  var msg = `${this.name} is speaking`;
  console.log(msg);
  setMessage(msg);
};
