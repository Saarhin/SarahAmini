import {
    robotics1,
} from "./user-data/data.js";

import { URLs } from "./user-data/urls.js";


function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  items.forEach((bioItem) => {
    const p = getElement("p", null);
    p.innerHTML = bioItem;
    bioTag.append(p);
  });
}






populateBio(robotics1, "robotics1");

