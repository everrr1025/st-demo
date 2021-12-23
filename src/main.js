import house  from './scenes/house';
import salon from './scenes/salon';
import bedroom from './scenes/bedroom';
//instance
import hongda from './instances/hongda';
import jason from './instances/jason'


house.registerScene(salon);
house.registerScene(bedroom);//

bedroom.registerInstances(hongda);
salon.registerInstances(jason)



var x = hongda.getSceneAction('powerOff')
x.perform(hongda)

// jason.getSceneActions().powerOn.perform(jason)
// console.log(house.properties.power)


