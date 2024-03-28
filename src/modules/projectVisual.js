import * as GenerateElement from "./generatePageElement.js";
import * as GeneratePage from "./generatePage.js";

export function create(
    title,
    description,
    lists,
    addList,
    navContainer = null,
    contentContainer = null
) {
    const projectContainer = GenerateElement.generatePageElement("div", [
        "project-container",
    ]);

    const projectTitleContainer = GenerateElement.generatePageElement(
        "div",
        ["project-title-container"],
        projectContainer
    );

    const projectInfoContainer = GenerateElement.generatePageElement(
        "div",
        ["project-info-container"],
        projectTitleContainer
    );

    const projectTitle = GenerateElement.generatePageElement(
        "div",
        ["project-title"],
        projectInfoContainer,
        title
    );
    const projectDescription = GenerateElement.generatePageElement(
        "div",
        ["project-description"],
        projectInfoContainer,
        description
    );

    const createNewListButton = GenerateElement.generatePageElement(
        "div",
        ["new-project-list-button"],
        projectTitleContainer
    );

    createNewListButton.addEventListener("click", () => {
        const newList = addList();
        contentContainer.resetContentContainer();
        //projectContainer.appendChild(newList.listVisual);

        /* GeneratePage.resetPage(); */

        //TODO: add event for creating a new list div and accompanying list
    });

    const removeProjectButton = GenerateElement.generatePageElement(
        "div",
        ["item-remove-button"],
        projectContainer,
        "delete project"
    );
    removeProjectButton.addEventListener("click", () => {
        projectContainer.remove();
        //TODO: link this to also remove the nav bar representation of this list
    });

    appendAllListsToProject(projectContainer, lists);

    return projectContainer;
}

function appendAllListsToProject(projectContainer, lists) {
    lists.forEach((list) => {
        projectContainer.appendChild(list.listVisual);
    });
}
