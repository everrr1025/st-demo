import Scene  from '../modules/Scene';
import Instance  from '../modules/Instance';
import {move,speak} from '../actions/actions';
import {dark} from "../events/events"; 


var hongda = new Instance('hongda');

//properties


//actions


hongda.registerAction(move);
hongda.registerAction(speak);

//events

var x = {event:dark, do:function(){console.log(`[instance - hongda] dark event occurs, hongda feel bad `)}
}

hongda.registerEvent(x)

export default hongda;

