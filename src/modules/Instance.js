export default function Instance(name) {
  this.name = name;
  this._scene;
  //actions & events that the instance can performs anywhere
  var _actions = {};
  this._events = {}; //events that this instance is listenering

  this.registerAction = function (action) {
    _actions[action.name] = action;
    action.setOwner(this);
  };

  this.getActions = function () {
    return _actions;
  };
}

Instance.prototype.getEvents = function () {
  return this._events;
};

Instance.prototype.registerEvent = function (event, callback) {
  this._events[event.name] = { event, callback };
  event.registerListener(this);
};

Instance.prototype.getEventCallback = function (name) {
  return this._events[name].callback;
};

Instance.prototype.setScene = function (scene) {
  return (this._scene = scene);
};

Instance.prototype.getScene = function () {
  return this._scene;
};

Instance.prototype.getSceneAction = function (name) {
  return (
    this._scene.getActions().name || this._scene.getParent().getActions()[name]
  ); //should be recursive
};
