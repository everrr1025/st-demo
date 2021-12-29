import Scene from "../modules/Scene";

var kitchen = new Scene("厨房");
var storeroom = new Scene("储藏室");
storeroom.properties = {
  width: 3,
  height: 3,
};
kitchen.registerScene(storeroom);

kitchen.properties = {
  height: 10,
  width: 10,
};

export default kitchen;
