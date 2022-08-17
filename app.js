const pageBlack = document.querySelector(".black_moon");
const pageBody = document.querySelector("body");
const pageA = document.querySelector("a");

pageBlack.addEventListener("click", () => {
  pageBody.classList.toggle("active");
  pageA.classList.toggle("active");
});

function setup() {
  var e = document.getElementById("watchme");
  e.addEventListener("animationstart", listener, false);
  e.addEventListener("animationend", listener, false);
  e.addEventListener("animationiteration", listener, false);

  var e = document.getElementById("watchme");
  e.className = "slidein";
}

function listener(e) {
  var l = document.createElement("li");
  switch (e.type) {
    case "animationstart":
      l.innerHTML = "Started: elapsed time is " + e.elapsedTime;
      break;
    case "animationend":
      l.innerHTML = "Ended: elapsed time is " + e.elapsedTime;
      break;
    case "animationiteration":
      l.innerHTML = "New loop started at time " + e.elapsedTime;
      break;
  }
  document.getElementById("output").appendChild(l);
}
