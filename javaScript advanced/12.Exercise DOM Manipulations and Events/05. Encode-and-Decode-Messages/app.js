function encodeAndDecodeMessages() {
  let textAreas = document.querySelectorAll("textarea");
  let buttons = document.querySelectorAll("button");
  buttons[0].addEventListener("click", encode);
  buttons[1].addEventListener("click", decode);

  function encode() {
    let encodedMessage = "";
    const input = textAreas[0].value;
    for (let index = 0; index < input.length; index++) {
      const element = input[index];
      encodedMessage += String.fromCharCode(element.charCodeAt(0) + 1);
    }
    textAreas[1].value = encodedMessage;
    textAreas[0].value = "";
  }
  function decode() {
    let decodedMessages = "";
    const input = textAreas[1].value;
    for (let index = 0; index < input.length; index++) {
      const element = input[index];
      decodedMessages += String.fromCharCode(element.charCodeAt(0) - 1);
    }
    textAreas[1].value = decodedMessages;
  }
}
