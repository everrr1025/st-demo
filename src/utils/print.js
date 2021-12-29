//module to print

let _message = {};
let _intervalId;

function setIntervalId(id) {
  _intervalId = id;
}

function getMessage() {
  console.log(Object.keys(_message).length);
  return Object.values(_message);
}

function setMessage(msg) {
  if (!_message[_intervalId]) {
    if (Object.keys(_message).length == 10) {
      delete _message[Object.keys(_message)[0]];
    }
    _message[_intervalId] = [];
  }
  _message[_intervalId].push(msg);
}

function _createScene(node, scene) {
  var parent = document.createElement("div");
  var parentName = document.createTextNode(scene.name);
  parent.setAttribute("class", "parentScene");

  parent.style.width = scene.properties.width + "rem";
  parent.style.height = scene.properties.height + "rem";
  parent.appendChild(parentName);

  if (Object.values(scene.getChildScenes()).length > 0) {
    var childNode = document.createElement("div");
    childNode.setAttribute("class", "child");
    parent.appendChild(childNode);
    Object.values(scene.getChildScenes()).forEach((child) => {
      _createScene(childNode, child);
    });
  }
  var instance = document.createElement("div");
  instance.setAttribute("class", "instance");

  Object.values(scene.getInstances()).forEach((human) => {
    var humanDiv = document.createElement("div");
    //  hunmanDiv.setAttribute("class", "instance");
    humanDiv.appendChild(document.createTextNode(human.name));

    instance.appendChild(humanDiv);
  });

  parent.appendChild(instance);

  node.appendChild(parent);
}

function printScene(scene) {
  var sceneNode = document.getElementById("scene");
  sceneNode.innerHTML = "";
  _createScene(sceneNode, scene);

  //print message
  var msgContainer = document.getElementById("msg");
  msgContainer.innerHTML = "";
  getMessage().forEach((msg) => {
    var textNode = document.createTextNode(msg);
    var msgNode = document.createElement("div");
    msgNode.appendChild(textNode);
    msgContainer.appendChild(msgNode);
  });
}

export { printScene, setMessage, getMessage, setIntervalId };
