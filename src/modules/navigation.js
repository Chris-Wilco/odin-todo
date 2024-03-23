import * as NavigationVisual from "./navigationVisual.js";

export function create(projectList) {
    const navContainer = document.createElement("div");
    navContainer.classList.add("nav-container");

    const navTitleContainer = document.createElement("div");
    navTitleContainer.classList.add("nav-title-container");

    const navTitle = document.createElement("div");
    navTitle.textContent = "My Projects";
    navTitle.classList.add("nav-title");
    navTitleContainer.appendChild(navTitle);

    const addNewProjectButton = document.createElement("div");
    addNewProjectButton.classList.add("new-project-button");
    /* addNewProjectButton.textContent = "new"; */
    navTitleContainer.appendChild(addNewProjectButton);

    navContainer.appendChild(navTitleContainer);

    const navContentContainer = document.createElement("div");
    navContentContainer.classList.add("nav-content-container");

    projectList.forEach((project) => {
        const navProjectVisual = NavigationVisual.create(project);
        navContentContainer.appendChild(navProjectVisual);
    });

    navContainer.appendChild(navContentContainer);

    return navContainer;
}
