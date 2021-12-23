import Scene  from './modules/Scene';
import Instance  from './modules/Instance';
import Action from './modules/Action';


var myHome = new Scene('hongda\'s home');
var hongda = new Instance('hongda');

myHome.registerInstances(hongda);

var haveDinnerAction = new Action({name:'haveDinner', perform:function(){
    return 'having dinner'
}})

hongda.registerAction(haveDinnerAction);

console.log(hongda.getActions().haveDinner.perform())

console.log(hongda.getScene())