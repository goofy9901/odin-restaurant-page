export const menuDom = function () {
  const body = document.querySelector("body");
  const content = document.createElement("div");
  body.appendChild(content);
  const left = document.createElement("div");
  const right = document.createElement("div");
  content.appendChild(left);
  content.appendChild(right);
  content.classList = "content";
  left.classList = "left";
  right.classList = "right";
};

menuDom();
