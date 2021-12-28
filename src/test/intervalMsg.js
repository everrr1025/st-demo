var msgArray = [];

function setMsg(msg) {
  msgArray.push(msg);
}

setInterval(() => {
  var msg = [];
  var random = Math.floor(Math.random() * 10 + 1);
  msg.push(random);
  msg.push(random);
  msgArray.push(msg);
  printMsg();
}, 3000);

function printMsg() {
  console.log(msgArray);
}
