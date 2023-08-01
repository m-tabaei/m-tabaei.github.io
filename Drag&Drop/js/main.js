let parent = document.querySelector("div.parent");
let offset = [];
let active = false;
parent.addEventListener("mousedown", function (e) {
  offset = [e.target.offsetLeft - e.clientX, e.target.offsetTop - e.clientY];
  active = true;
  parent.style.position = "absolute";
  console.log(offset, active);
});
parent.addEventListener("mouseup", function () {
  active = false;
  console.log(active);
});
document.addEventListener("mousemove", function (e) {
  if (active) {
    parent.style.left = `${e.clientX + offset[0]}px`;
    parent.style.top = `${e.clientY + offset[1]}px`;
  }
});
