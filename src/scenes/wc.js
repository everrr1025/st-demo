import Scene from "../modules/Scene";
import { newVistor } from "../events/events";
import { setMessage } from "../utils/print";
var wc = new Scene("厕所");

wc.properties = {
  width: 5,
  height: 10,
};
wc.registerEvents({
  event: newVistor,
  callback: () => {
    // debugger;
    if (newVistor.additionInfo.to.name == "厕所") {
      Object.values(wc.getInstances()).forEach((instance) => {
        if (instance.name == "laohuang")
          instance.getEventCallback("newVistor")();
      });
    }
  },
});

export default wc;
