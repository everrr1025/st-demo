import Scene from "../modules/Scene";
import Human from "../modules/Human";
import { move, speak } from "../actions/actions";
import { dark } from "../events/events";

var hongda = new Human({ gender: "male", name: "hongda" });

//properties

//actions

//events

hongda.registerEvent(dark, function () {
  console.log(`[instance - hongda] dark event occurs, hongda feel bad `);
});

export default hongda;
