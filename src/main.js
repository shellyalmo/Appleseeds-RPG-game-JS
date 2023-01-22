import { finalLocations } from "./locations.js";
//print locations map on screen

//create element - specify tag, content
const locationMapElement = document.createElement("h3");
const locationMapContent = document.createTextNode(finalLocations);
locationMapElement.appendChild(locationMapContent);

const currentDiv = document.getElementById("locations-map");
document.body.insertBefore(locationMapElement, currentDiv);
