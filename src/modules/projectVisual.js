export function create(title, description, lists) {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");

    const projectTitleContainer = document.createElement("div");
    projectTitleContainer.classList.add("project-title-container");

    const projectInfoContainer = document.createElement("div");
    projectInfoContainer.classList.add("project-info-container");

    const projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = title;
    projectInfoContainer.appendChild(projectTitle);

    const projectDescription = document.createElement("div");
    projectDescription.classList.add("project-description");
    projectDescription.textContent = description;
    projectInfoContainer.appendChild(projectDescription);

    projectTitleContainer.appendChild(projectInfoContainer);

    const createNewListButton = document.createElement("div");
    createNewListButton.classList.add("new-project-list-button");
    /* createNewListButton.textContent = "add new list"; */
    projectTitleContainer.appendChild(createNewListButton);

    projectContainer.appendChild(projectTitleContainer);

    appendAllListsToProject(projectContainer, lists);

    return projectContainer;
}

function appendAllListsToProject(projectContainer, lists) {
    lists.forEach((list) => {
        projectContainer.appendChild(list.listVisual);
    });
}
