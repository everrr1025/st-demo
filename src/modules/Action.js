export default function Action(properties) {
  this.name = properties.name;
  this.perform = properties.perform;

  this._owner;
}

Action.prototype.dispatchEvent = function (event) {
  console.log(`[action - ${this.name}] dispatch ${event.name} event`);
  event.broadcast();
};

Action.prototype.getOwner = function () {
  return this._owner;
};

Action.prototype.setOwner = function (owner) {
  this._owner = owner;
};
