import Scene from '../modules/Scene';
import Action from '../modules/Action';
import {dark} from '../events/events'

var house = new Scene('house');

house.properties = {
    power:'on'
}

//properties

//actions, could be performed only in this scene
var powerOff = new Action({name:'powerOff', perform:function(performer){
    this.getOwner().properties.power = 'off'
    console.log(`[scene - house] - power off the whole house by ${performer.name}`)
    this.dispatchEvent(dark)
    
}})

var powerOn= new Action({name:'powerOn', perform:function(performer){
    this.getOwner().properties.power = 'on'
    console.log(`${performer.name} power on`)
}})

house.registerActions(powerOff)
house.registerActions(powerOn)

export default house;
