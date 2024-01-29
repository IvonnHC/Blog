function audit() {
  let name = prompt("What is your name?");
  if (name) {
    let emial = prompt("Hi!" + " " + name + " " + "What is your email?");
    let emoji = prompt("What is your favorite emoji" + " " + name + "?");
    alert(
      "Thank you" +
        " " +
        name +
        emoji +
        "." +
        " " +
        "I'll be in touch by email." +
        " " +
        "Good vibes🙌🏾!"
    );
  } else {
    alert(" Please entry requirement");
    return audit();
  }
}
let info = document.querySelector("button");
info.addEventListener("click", audit);
