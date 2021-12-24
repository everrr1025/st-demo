import Scene from "../modules/Scene";
import Human from "../modules/Human";
import { move, speak } from "../actions/actions";
import { dark } from "../events/events";

var jason = new Human({ gender: "male", name: "jason" });

//properties

//actions

//events
jason.registerEvent(dark, function () {
  console.log(`[instance - jason] dark event occurs, jason feel bad `);
});

export default jason;
