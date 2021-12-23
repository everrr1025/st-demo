export default function Scene(name){

    this.name = name;
    this.properties = {}
    
    var _instances=[];
    var _actions={};
    var _events=[];


    this.registerInstances = function(instance){
        _instances.push(instance)
        instance.setScene(this);
    }
    this.registerActions = function(action){
        _actions[action.name]= action
        action.setOwner(this)
    }
    this.registerEvents = function(event){_events.push(event)}

    this.getInstances = function(){return _instances}
    this.getActions = function(){return _actions}
    this.getEvents = function(){return _events}
}