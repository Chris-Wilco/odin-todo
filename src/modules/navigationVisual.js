import * as ProjectNavVisual from "./projectNavVisual.js";
import * as GenerateElement from "./generatePageElement.js";

export function create(projectList) {
    const navContainer = GenerateElement.generatePageElement("div", [
        "nav-container",
    ]);

    const navTitleContainer = GenerateElement.generatePageElement(
        "div",
        ["nav-title-container"],
        navContainer
    );

    const navTitle = GenerateElement.generatePageElement(
        "div",
        ["nav-title"],
        navTitleContainer,
        "My Projects"
    );

    const addNewProjectButton = GenerateElement.generatePageElement(
        "div",
        ["new-project-button"],
        navTitleContainer
    );
    //TODO: This actually needs to add a new project to the nav and the workspace

    const navContentContainer = GenerateElement.generatePageElement(
        "div",
        ["nav-content-container"],
        navContainer
    );

    projectList.forEach((project) => {
        const navProjectVisual = ProjectNavVisual.create(
            project.title,
            project.lists
        );

        navContentContainer.appendChild(navProjectVisual);
    });

    navContainer.appendChild(navContentContainer);

    return navContainer;
}
