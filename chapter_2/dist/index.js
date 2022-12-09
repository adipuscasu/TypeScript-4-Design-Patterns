"use strict";
const p = document.getElementsByClassName("paragraph")[0];
const spanArea = document.createElement("span");
spanArea.textContent = "This is a text we added dynamically";
p === null || p === void 0 ? void 0 : p.appendChild(spanArea);
const actionButton = document.querySelector("button");
actionButton === null || actionButton === void 0 ? void 0 : actionButton.addEventListener("click", () => {
    window.alert("You Clicked the Submit Button");
});
//# sourceMappingURL=index.js.map