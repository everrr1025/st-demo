import Scene  from '../modules/Scene';
import Instance  from '../modules/Instance';
import {move,speak} from '../actions/actions';
import {dark} from '../events/events';


var jason = new Instance('jason');

//properties


//actions
jason.registerAction(move);
jason.registerAction(speak);


jason.registerEvent({event:dark, do:function(){console.log(`[instance - jason] dark event occurs, jasonn feel bad `)}})

//events



export default jason;