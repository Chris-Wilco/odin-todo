export function create(projectLists) {
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("project-container");

    let headerDiv = document.createElement("div");
    headerDiv.classList.add("project-header");
    headerDiv.textContent = `I'm a project header`;

    containerDiv.appendChild(headerDiv);

    appendAllListsToProject(containerDiv, projectLists);

    return containerDiv;
}

function appendAllListsToProject(containerDiv, projectLists) {
    projectLists.forEach((element) => {
        containerDiv.appendChild(element.listVisual.containerDiv);
    });
}
