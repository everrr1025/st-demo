import Scene  from '../modules/Scene';
import Instance  from '../modules/Instance';
import {move,speak} from '../actions/actions';


var jason = new Instance('jason');

//properties


//actions
jason.registerAction(move);
jason.registerAction(speak);

//events



export default jason;