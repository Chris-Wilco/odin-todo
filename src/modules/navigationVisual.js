import * as ItemVisual from "./itemVisual.js";

export function create(project) {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("nav-project-container");

    const projectTitleContainer = document.createElement("div");
    projectTitleContainer.classList.add("nav-project-title-container");

    const projectTitleIcon = document.createElement("div");
    projectTitleIcon.classList.add("nav-project-title-icon");
    projectTitleContainer.appendChild(projectTitleIcon);

    /* const projectTitleIcon = document.createElement("img");
    projectTitleIcon.src = "/img/icons/dots-horizontal-circle-outline.svg";
    projectTitleIcon.classList.add("nav-project-title-icon");
    projectTitleContainer.appendChild(projectTitleIcon); */

    const projectTitle = document.createElement("div");
    projectTitle.classList.add("nav-project-title");
    projectTitle.textContent = project.title;
    projectTitleContainer.appendChild(projectTitle);

    projectContainer.appendChild(projectTitleContainer);

    const projectContentContainer = document.createElement("div");
    projectContentContainer.classList.add("nav-project-content-container");

    project.lists.forEach((list) => {
        const listTitleContainer = document.createElement("div");
        listTitleContainer.classList.add("nav-list-title-container");

        const listTitleIcon = document.createElement("div");
        listTitleIcon.classList.add("nav-list-title-icon");
        listTitleContainer.appendChild(listTitleIcon);

        const listTitleDiv = document.createElement("div");
        listTitleDiv.classList.add("nav-list-title");
        listTitleDiv.textContent = list.title;
        listTitleContainer.appendChild(listTitleDiv);

        projectContentContainer.appendChild(listTitleContainer);
    });

    projectContainer.appendChild(projectContentContainer);

    return projectContainer;
}
