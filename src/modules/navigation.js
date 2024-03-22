export function create(projectList) {
    const navDiv = document.createElement("div");
    navDiv.classList.add("nav-div");

    projectList.forEach((element) => {
        const newProjectDiv = createNavProjectDiv(element.title, element.lists);
        navDiv.appendChild(newProjectDiv);
    });
    return navDiv;
}

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
