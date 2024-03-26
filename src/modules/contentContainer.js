import * as GenerateElement from "./generatePageElement.js";

export function create(documentBody, user) {
    const contentContainer = GenerateElement.generatePageElement(
        "div",
        ["content-container"],
        documentBody
    );

    function clearContentArea() {}

    function changeProject(project) {
        contentContainer.appendChild(project.projectVisual);
    }

    return { contentContainer, clearContentArea, changeProject };
}
