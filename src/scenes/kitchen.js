import Scene from "../modules/Scene";

var kitchen = new Scene("厨房");
var storeroom = new Scene("储藏室");

kitchen.registerScene(storeroom);

kitchen.properties = {
  area: 40, //square meters
};

export default kitchen;
