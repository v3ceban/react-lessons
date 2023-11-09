export function setupCounter(element) {
  const random = (length) => {
    return Math.floor(Math.random() * length);
  };
  const passField = document.querySelector(".read-the-docs");
  const passChars =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()-=_+";
  const setPass = () => {
    passField.innerHTML = "";
    for (let i = 0; i < 20; i++) {
      passField.innerHTML += passChars[random(passChars.length)];
    }
  };
  element.addEventListener("click", () => setPass());
}
