function create(project, contentContainer) {
    const projectTitleContainer = document.createElement("div");
    projectTitleContainer.classList.add("project-title-container");
    projectTitleContainer.textContent = project.title;

    const projectTitleDiv = document.createElement("div");
    projectTitleDiv.classList.add("project-title");
    projectTitleDiv.textContent = project.title;
    projectTitleContainer.appendChild(projectTitleContainer);

    const createNewListButton = document.createElement("div");
    createNewListButton.classList.add("new-list-button");
    createNewListButton.textContent = "add new list";
    createNewListButton.appendChild(projectTitleContainer);

    contentContainer.appendChild(projectTitleContainer);

    project.titles.forEach((element) => {
        const newListItemDiv = document.createElement("div");
        newListItemDiv.classList.add("list-item-container");

        const checkboxContainer = document.createElement("div");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        checkboxContainer.appendChild(checkbox);

        const infoContainer = document.createElement("div");
        const itemTitle = document.createElement("div");
        itemTitle.textContent = element.title;
        const itemDescription = document.createElement("div");
        itemDescription.textContent = element.itemDescription;
        const itemDueDate = document.createElement("div");
        itemDueDate.textContent = element.dueDate;
    });
}
