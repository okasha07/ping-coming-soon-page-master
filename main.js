document.forms[0].onsubmit = function (e) {
  if (document.querySelector("input").value.length < 1) {
    let input = document.querySelector("input");
    input.style.borderColor = "hsl(354, 100%, 66%)";
    input.placeholder = "example@email/com";
    let p = document.createElement("p");
    p.appendChild(
      document.createTextNode("Please provide a valid email address")
    );
    p.style.cssText = `
    color: var(--Light-Red);
    font-size: 14px;
    left: 30px;
    position: absolute;
    margin: 2px 0;`;
    document.querySelector("input").style.position = "relative";
    document.forms[0].appendChild(p);
    e.preventDefault();
  }
};
