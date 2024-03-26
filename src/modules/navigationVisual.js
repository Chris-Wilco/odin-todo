/* import * as GenerateElement from "./generatePageElement.js";
 */
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

/* export function create(project) {
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
 */
