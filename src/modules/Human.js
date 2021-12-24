import Instance from "./Instance";
import { hungry } from "../events/events";

export default function Human(human) {
  this.gender = human.gender;
  this.name = human.name;

  var _events = {};

  this.registerEvent = function (event, callback) {
    _events[event.name] = { event, callback };
    event.registerListener(this);
  };

  this.getEvent = function (name) {
    return _events[name].event;
  };
  this.getEventCallback = function (name) {
    return _events[name].callback;
  };

  this.move = () => {
    console.log(`${this.name} is moving`);
  };

  this.speak = () => {
    console.log(`${this.name} is speaking`);
  };

  this.registerEvent(hungry, () => {
    console.log(`${this.name} fuck it`);
  });
}

Human.prototype = new Instance();
