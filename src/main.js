import house  from './scenes/house';
import hongda from './instances/hongda';
import jason from './instances/jason'


house.registerInstances(hongda);
house.registerInstances(jason)


hongda.getSceneActions().powerOff.perform(hongda)
console.log(house.properties.power)

jason.getSceneActions().powerOn.perform(jason)
console.log(house.properties.power)


