import * as GenerateLists from "./generateLists.js";
import * as PopulateContentContainer from "./populateContentContainer.js";
import * as Navigation from "./navigation.js";

export function generatePage(documentBody) {
    const documentHeader = document.createElement("div");
    documentHeader.classList.add("header-div");
    documentHeader.textContent = "I am page header!";

    const projectsList = GenerateLists.create();

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container");
    contentContainer.appendChild(projectsList[0].projectVisual);

    const leftNav = Navigation.create(projectsList);
    leftNav.classList.add("nav-container");

    documentBody.appendChild(documentHeader);
    documentBody.appendChild(leftNav);
    documentBody.appendChild(contentContainer);
}
