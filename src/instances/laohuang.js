import Scene from "../modules/Scene";
import Human from "../modules/Human";
import { move, speak } from "../actions/actions";
import { dark, newVistor } from "../events/events";
import { setMessage } from "../utils/print";

var laohuang = new Human("老黄", "male");

//properties

//actions

//events

laohuang.registerEvent(dark, function () {
  console.log(`[instance - hongda] dark event occurs, laohuang feel bad `);
});
laohuang.registerEvent(newVistor, () => {
  if (
    newVistor.additionInfo.to.name == "厕所" &&
    laohuang.getScene().name == "厕所"
  ) {
    setMessage(`老黄在厕所遇到了${newVistor.additionInfo.instance.name}`);
    console.log(`老黄在厕所遇到了${newVistor.additionInfo.instance.name}`);
    if (newVistor.additionInfo.instance.name === "毅哥") {
      setMessage(`老黄和毅哥一起拉了起来`);
      console.log(`老黄和毅哥一起拉了起来`);
    }
  }
});

export default laohuang;
