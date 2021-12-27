import Instance from "./Instance";
import { hungry } from "../events/events";

export default function Human(name, gender) {
  this.gender = gender;

  Instance.call(this, name);
}

Human.prototype = new Instance();
Human.prototype.move = function () {
  console.log(`${this.name} is moving`);
};
Human.prototype.speak = function () {
  console.log(`${this.name} is speaking`);
};
