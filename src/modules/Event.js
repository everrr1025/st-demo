export default function Event(name) {
  this.name = name;
  this._listener = [];
  this.additionInfo = {};
}

Event.prototype.registerListener = function (instance) {
  this._listener.push(instance);
};
//broadcast to all the instance who is listenering the event,
Event.prototype.broadcast = function () {
  this._listener.forEach((listener) => {
    var callback = listener.getEventCallback(this.name);
    callback();
  });
};
