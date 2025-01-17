import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";
const parkData = getParkData();

function setParkIntro(data) {
    const introE1 = document.querySelector(".intro");
    introE1.innerHTML = `<h1>${parkData.fullName}</h1>
    <p>${parkData.description}</p>`;
}

function setParkInfoLinks(data) {
    const infoE1 = document.querySelector(".info");
    const html = data.map(mediaCardTemplate);
    infoE1.insertAdjacentHTML("afterbegin", html.join(""));
}

setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);

