export function create(projectList) {
    const navContainer = document.createElement("div");
    navContainer.classList.add("nav-container");

    const navTitleContainer = document.createElement("div");
    navTitleContainer.classList.add("nav-title-container");

    const navTitle = document.createElement("div");
    navTitle.textContent = "My Projects";
    navTitle.classList.add("nav-title");
    navTitleContainer.appendChild(navTitle);

    const addNewProjectButton = document.createElement("div");
    addNewProjectButton.classList.add("new-project-button");
    addNewProjectButton.textContent = "add new item";
    navTitleContainer.appendChild(addNewProjectButton);

    navContainer.appendChild(navTitleContainer);

    const navContentContainer = document.createElement("div");
    navContentContainer.classList.add("nav-content-container");

    //TODO
    projectList.forEach((project) => {
        const newProjectDiv = createNavProjectDiv(project.title, project.lists);
        navContainer.appendChild(newProjectDiv);
    });
    return navContainer;
}

//TODO
function createNavProjectDiv(project, lists) {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("nav-project-container");

    const projectHeader = document.createElement("div");
    projectHeader.classList.add("nav-header");
    projectHeader.textContent = project;
    projectContainer.appendChild(projectHeader);

    lists.forEach((element) => {
        const listNavElement = document.createElement("div");
        listNavElement.classList.add("nav-content");
        listNavElement.textContent = element.title;
        projectContainer.appendChild(listNavElement);
    });

    return projectContainer;
}
