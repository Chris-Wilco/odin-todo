import * as GenerateElement from "./generatePageElement.js";

export function create(user) {
    let navContainer;

    const contentContainer = GenerateElement.generatePageElement(
        "div",
        ["content-container"],
        document.querySelector("body")
    );

    function clearContentArea() {
        while (contentContainer.firstChild) {
            contentContainer.removeChild(contentContainer.lastChild);
        }
    }

    function changeProject(project) {
        contentContainer.appendChild(project.projectVisual);
    }

    function resetContentContainer() {
        clearContentArea();
        changeProject(user.projects[0]);
        //navContainer.resetNavVisual();
    }

    function updateNavContainer(newNavContainer) {
        navContainer = newNavContainer;
    }

    return {
        contentContainer,
        clearContentArea,
        changeProject,
        resetContentContainer,
        updateNavContainer,
    };
}
