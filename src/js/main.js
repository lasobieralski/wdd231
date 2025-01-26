import { getParkData, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

function setParkIntro(data) {
    const introE1 = document.querySelector(".intro");
    introE1.innerHTML = `<h1>${data.fullName}</h1>
    <p>${data.description}</p>`;
}

function setParkInfoLinks(data) {
    const infoE1 = document.querySelector(".info");
    const html = data.map(mediaCardTemplate);
    infoE1.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks (parkData.images);
    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfoLinks(parkInfoLinks);
}
init();