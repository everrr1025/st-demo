export default function Instance(name){
 
    this.name = name;
    var _scene;
    //actions & events that the instance can performs anywhere
    var _actions = {}; 
    var _events = []; 

    this.setScene = function(scene){
        _scene = scene
    }
    this.getScene = function(){
        return _scene
    }
    this.registerAction = function(action) {
        _actions[action.name] =action
    }
    this.registerEvent = function(event) {
        _events.push(event)
    }
    this.getActions = function(){return _actions}
}