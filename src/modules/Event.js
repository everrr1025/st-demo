export default function Event(name){
    this.name = name;

    var _listener = [];

    this.registerListener = function(instance) {
        _listener.push(instance)
    }

    //broadcast to all the instance who is listenering the event,
    this.broadcast = function(){
        _listener.forEach(function(listener){
        var callback=   listener.getEventCallback(name);
        callback();
        })
    }
    
}