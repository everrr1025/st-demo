export default function Scene(name){

    this.name = name;
    var _instances=[];
    var _actions=[];
    var _events=[];

    this.registerInstances = function(instance){
        _instances.push(instance)
        instance.setScene(this);
    }
    this.registerActions = function(action){_actions.push(action)}
    this.registerEvents = function(event){_events.push(event)}

    this.getInstances = function(){return _instances}
    this.getActions = function(){return _actions}
    this.getEvents = function(){return _events}
}