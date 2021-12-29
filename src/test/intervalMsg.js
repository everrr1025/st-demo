var msgArray = [];

function setMsg(msg) {
  msgArray.push(msg);
}

setInterval(() => {
  var msg = [];
  var random = Math.floor(Math.random() * 10 + 1);
  setMsg(random);
  printMsg();
}, 3000);

function printMsg() {
  console.log(msgArray);
}
