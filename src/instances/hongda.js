import Scene  from '../modules/Scene';
import Instance  from '../modules/Instance';
import {move,speak} from '../actions/actions';


var hongda = new Instance('hongda');

//properties


//actions


hongda.registerAction(move);
hongda.registerAction(speak);

//events



export default hongda;

