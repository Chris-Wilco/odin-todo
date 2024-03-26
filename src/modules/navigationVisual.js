import * as GenerateElement from "./generatePageElement.js";

export function create(project) {
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
        project.title
    );

    const projectContentContainer = GenerateElement.generatePageElement(
        "div",
        ["nav-project-content-container"],
        projectContainer
    );

    project.lists.forEach((list) => {
        projectContentContainer.appendChild(list.listNavVisual);
    });

    return projectContainer;
}
