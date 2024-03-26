/* import * as ProjectNavVisual from "./projectNavVisual.js";
import * as GenerateElement from "./generatePageElement.js"; */

import * as NavigationVisual from "./navigationVisual.js";

export function create(projectList) {
    const navVisual = NavigationVisual.create(projectList);

    /* const navContainer = GenerateElement.generatePageElement("div", [
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

    return navContainer; */

    return { navVisual };
}
