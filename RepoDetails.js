import {
    robotics1,
    robotics2
} from "./user-data/data.js";

import { URLs } from "./user-data/urls.js";

function getElement(tagName, className) {
    let item = document.createElement(tagName);
    item.className = className;
    return item;
}

function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  const rowWrapper = document.createElement("div");
  rowWrapper.style =
    "display: flex; flex-wrap: wrap; gap: 16px; justify-content: space-between;";
  bioTag.appendChild(rowWrapper);

  items.forEach((bioItem) => {
    const p = getElement("p", null);
    p.innerHTML = bioItem;
    bioTag.append(p);
  });

}






populateBio(robotics1, "robotics1");
populateBio(robotics2, "robotics2");

