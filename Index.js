window.addEventListener("keydown", (e) => {
  document.getElementById(
    "res"
  ).innerHTML = `The key you pressed is:- <span>${e.key}</span>
  <span>Key Code: ${e.keyCode}</span>`;
});
