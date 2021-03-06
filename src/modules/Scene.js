export default function Scene(name) {
  this.name = name;
  this.properties = {};

  var _instances = {};
  var _actions = {};
  var _events = {};
  var _parentScene;
  var _childScenes = {};

  this.registerScene = function (scene) {
    _childScenes[scene.name] = scene;
    scene.setParent(this);
  };

  this.setParent = function (scene) {
    _parentScene = scene;
  };

  this.getParent = function () {
    return _parentScene;
  };

  this.getChildScenes = function () {
    return _childScenes;
  };

  this.registerInstances = function (instance) {
    _instances[instance.name] = instance;
    instance.setScene(this);
  };

  this.unregisterInstances = function (instance) {
    delete _instances[instance.name];
  };
  this.registerActions = function (action) {
    _actions[action.name] = action;
    action.setOwner(this);
  };
  this.registerEvents = function (event) {
    _events[event.event.name] = event;
    event.event.registerListener(this);
  };
  this.getEventCallback = function (name) {
    return this.getEvents()[name].callback;
  };
  this.getInstances = function () {
    return _instances;
  };
  this.getActions = function () {
    return _actions;
  };
  this.getEvents = function () {
    return _events;
  };
}
