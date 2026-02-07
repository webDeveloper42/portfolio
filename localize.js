import { enData } from "./src/i18n/en.js";
import { esData } from "./src/i18n/es.js";
import { jaData } from "./src/i18n/ja.js";
const heroName = document.querySelector(".hero__name");
const jobTitle = document.querySelector(".hero__job-title");
const jobInterests = document.querySelector(".hero__job-interests");
const template = document.querySelector(".projects__card-template");
const projectsList = document.querySelector(".projects__list");
const enBtn = document.querySelector("#en");
const esBtn = document.querySelector("#es");
const jaBtn = document.querySelector("#ja");
const userLan =
  navigator.language.slice(0, 2) || navigator.userLanguage.slice(0, 2);
function switchLan(btn, data) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    matchLanData(data);
  });
}
function matchLanData(data) {
  setHeroText(data);
  setProjects(data);
}
function setHeroText(data) {
  heroName.innerHTML = data.name;
  jobTitle.innerHTML = data.title;
  jobInterests.innerHTML = data.jobInterests;
}
function setProjects(data) {
  projectsList.innerHTML = "";
  for (const project of data.projects) {
    const projectCard = template.content.cloneNode(true);
    const card = projectCard.querySelector(".projects__card");
    const cardImg = projectCard.querySelector(".card__img");
    const cardTitle = projectCard.querySelector(".card__title");
    const cardDescription = projectCard.querySelector(".card__description");
    const tagList = projectCard.querySelector(".card__tags-list");
    const tagTemplate = projectCard.querySelector(".card__tags-list-template");
    cardImg.src = project.img;
    cardImg.alt = project.imgAlt;
    cardTitle.textContent = project.title;
    cardDescription.textContent = project.description;
    projectsList.append(projectCard);
    tagList.innerHTML = "";
    for (const tag of project.tags) {
      const tagEl = tagTemplate.content.cloneNode(true);
      const cardTag = tagEl.querySelector(".card__tag");
      cardTag.textContent = tag;
      tagList.append(tagEl);
    }
  }
}
const lanBtns = [
  { btnEl: enBtn, data: enData },
  { btnEl: esBtn, data: esData },
  { btnEl: jaBtn, data: jaData },
];
matchLanData(lanBtns[0].data);
if (["es", "ja".includes(userLan)]) {
  for (const btn of lanBtns) {
    switchLan(btn.btnEl, btn.data);
  }
} else {
  switchLan(lanBtns[0].btnEl, lanBtns[0].data);
}
console.log(userLan);
