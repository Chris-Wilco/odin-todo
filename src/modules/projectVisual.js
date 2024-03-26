import * as GenerateElement from "./generatePageElement.js";

export function create(title, description, lists, addList) {
    const projectContainer = GenerateElement.generatePageElement("div", [
        "project-container",
    ]);

    const projectTitleContainer = GenerateElement.generatePageElement(
        "div",
        ["project-title-container"],
        null,
        projectContainer
    );

    const projectInfoContainer = GenerateElement.generatePageElement(
        "div",
        ["project-info-container"],
        null,
        projectTitleContainer
    );

    const projectTitle = GenerateElement.generatePageElement(
        "div",
        ["project-title"],
        title,
        projectInfoContainer
    );
    const projectDescription = GenerateElement.generatePageElement(
        "div",
        ["project-description"],
        description,
        projectInfoContainer
    );

    const createNewListButton = GenerateElement.generatePageElement(
        "div",
        ["new-project-list-button"],
        null,
        projectTitleContainer
    );

    createNewListButton.addEventListener("click", () => {
        const newList = addList();
        projectContainer.appendChild(newList.listVisual);
        //event for creating a new list div and accompanying list
    });

    appendAllListsToProject(projectContainer, lists);

    return projectContainer;
}

function appendAllListsToProject(projectContainer, lists) {
    lists.forEach((list) => {
        projectContainer.appendChild(list.listVisual);
    });
}
