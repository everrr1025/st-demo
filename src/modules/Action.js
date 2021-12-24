export default function Action(properties) {
  this.name = properties.name;
  this.perform = properties.perform;

  var _owner;

  this.setOwner = function (owner) {
    _owner = owner;
  };

  this.getOwner = function (owner) {
    return _owner;
  };

  this.dispatchEvent = function (event) {
    console.log(`[action - ${this.name}] dispatch ${event.name} event`);
    event.broadcast();
  };
}
