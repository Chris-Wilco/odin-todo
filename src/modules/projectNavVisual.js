import * as GenerateElement from "./generatePageElement.js";

export function create(title, lists, navContainer, contentContainer) {
    const projectContainer = GenerateElement.generatePageElement("div", [
        "nav-project-container",
    ]);

    const projectTitleContainer = GenerateElement.generatePageElement(
        "div",
        ["nav-project-title-container"],
        projectContainer
    );

    const projectTitleIcon = GenerateElement.generatePageElement(
        "div",
        ["nav-project-title-icon"],
        projectTitleContainer
    );

    const projectTitle = GenerateElement.generatePageElement(
        "div",
        ["nav-project-title"],
        projectTitleContainer,
        title
    );

    //TODO: Each project needs to be able to open itself in the main content space

    const projectContentContainer = GenerateElement.generatePageElement(
        "div",
        ["nav-project-content-container"],
        projectContainer
    );

    lists.forEach((list) => {
        projectContentContainer.appendChild(list.listNavVisual);
    });

    return projectContainer;
}
