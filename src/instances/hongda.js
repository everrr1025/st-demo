import Scene from "../modules/Scene";
import Human from "../modules/Human";
import { move, speak } from "../actions/actions";
import { dark } from "../events/events";

var hongda = new Human("hongda", "male");

//properties

//actions

//events

hongda.registerEvent(dark, function () {
  console.log(`[instance - hongda] dark event occurs, hongda feel bad `);
});

export default hongda;
