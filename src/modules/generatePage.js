import * as GenerateLists from "./generateLists.js";
import * as Navigation from "./navigation.js";

export function generatePage(documentBody) {
    const projectList = GenerateLists.create();

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container");
    contentContainer.appendChild(projectList[0].projectVisual);

    const navBar = Navigation.create(projectList);
    navBar.classList.add("nav-container");

    documentBody.appendChild(navBar);
    documentBody.appendChild(contentContainer);
}
