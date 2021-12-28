import Scene from "../modules/Scene";
import Human from "../modules/Human";
import { move, speak } from "../actions/actions";
import { dark, newVistor } from "../events/events";

var jason = new Human("毅哥", "male");

//properties

//actions

//events
jason.registerEvent(dark, function () {
  console.log(`[instance - jason] dark event occurs, jason feel bad `);
});

jason.registerEvent(newVistor, () => {
  if (
    newVistor.additionInfo.to.name == "厕所" &&
    jason.getScene().name == "厕所" &&
    newVistor.additionInfo.instance.name !== "毅哥"
  ) {
    console.log(`毅哥在厕所遇到了 ${newVistor.additionInfo.instance.name}`);
  }
});
export default jason;
