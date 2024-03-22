function create(project, contentContainer) {
    const projectTitleDiv = document.createElement("div");
    projectTitleDiv.classList.add("content-title");
    projectTitleDiv.textContent = project.title;
    contentContainer.appendChild(projectTitleDiv);

    project.titles.forEach((element) => {});
}
