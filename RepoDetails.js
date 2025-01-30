import {
    robotics1,
} from "./user-data/data.js";

import { URLs } from "./user-data/urls.js";

function getElement(tagName, className) {
    let item = document.createElement(tagName);
    item.className = className;
    return item;
}

function populateBio(items, id) {
    console.log("hi")
  const bioTag = document.getElementById(id);
  console.log(bioTag)
  items.forEach((bioItem) => {
    const p = getElement("p", null);
    p.innerHTML = bioItem;
    bioTag.append(p);
  });
}






populateBio(robotics1, "robotics1");

