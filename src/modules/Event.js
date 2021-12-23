export default function Event(name){
    this.name = name;

    var _listener = [];

    this.registerListener = function(instance) {
        _listener.push(instance)
    }

    this.go = function(){
        _listener.forEach(function(listener){
        var event =   listener.getEvent(name);
        event.do()
        })
    }
    
}