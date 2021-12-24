export default function Instance(name) {
  this.name = name;
  var _scene;
  //actions & events that the instance can performs anywhere
  var _actions = {};
  var _events = {}; //events that this instance is listenering
  this.setScene = function (scene) {
    _scene = scene;
  };
  this.getScene = function () {
    return _scene;
  };

  this.registerAction = function (action) {
    _actions[action.name] = action;
    action.setOwner(this);
  };

  this.getActions = function () {
    return _actions;
  };

  this.getSceneAction = function (name) {
    return _scene.getActions().name || _scene.getParent().getActions()[name]; //should be recursive
  };

  //   this.registerEvent = function (event, callback) {
  //     _events[event.name] = { event, callback };
  //     event.registerListener(this);
  //   };

  //   this.getEvent = function (name) {
  //     return _events[name].event;
  //   };
  //   this.getEventCallback = function (name) {
  //     return _events[name].callback;
  //   };
}
