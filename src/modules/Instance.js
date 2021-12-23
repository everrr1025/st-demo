export default function Instance(name){
 
    this.name = name;
    var _scene;
    //actions & events that the instance can performs anywhere
    var _actions = {};  
    var _events = {};

    this.setScene = function(scene){
        _scene = scene
    }
    this.getScene = function(){
        return _scene
    }

    this.registerAction = function(action) {
        _actions[action.name] =action
        action.setOwner(this)
    }

    this.getActions = function(){return _actions}

    this.getSceneAction = function(name){ 
        return _scene.getActions().name || _scene.getParent().getActions()[name];
    }

    this.registerEvent = function(eventOb){
        _events[eventOb.event.name] = eventOb;
        eventOb.event.registerListener(this)
    }

    this.getEvent = function(name){
        return _events[name];
    }
}