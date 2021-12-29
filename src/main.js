import house from "./scenes/house";
import salon from "./scenes/salon";
import bedroom from "./scenes/bedroom";
import kitchen from "./scenes/kitchen";
import wc from "./scenes/wc";
//instance
import hongda from "./instances/hongda";
import jason from "./instances/jason";
import laohuang from "./instances/laohuang";
//state

import { printScene, getMessage, setIntervalId } from "./utils/print";

house.registerScene(salon);
house.registerScene(bedroom);
house.registerScene(kitchen);
house.registerScene(wc);

bedroom.registerInstances(hongda);
salon.registerInstances(jason);
wc.registerInstances(laohuang);

//hongda.getSceneAction("powerOff").perform(hongda);
printScene(house);
setInterval(() => {
  setIntervalId(Date.now());
  var random = Math.floor(Math.random() * 10 + 1);
  if ([1, 2, 3].includes(random)) {
    hongda.move({}, salon);
  } else if ([5].includes(random)) {
    hongda.move({}, wc);
  } else if ([7, 8].includes(random)) {
    jason.move({}, wc);
  } else if ([4].includes(random)) {
    jason.move({}, kitchen);
  } else {
    jason.move({}, kitchen.getChildScenes()["储藏室"]);
  }
  printScene(house);
}, 3000);
