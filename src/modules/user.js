import * as Project from "./project.js";

export function create(projects = []) {
    function addProject() {
        const projectName = prompt("Project name?");
        const projectDescription = prompt("Project description?");
        const newProject = Project.create(projectName, projectDescription);
        projects.push(newList);
        return newProject;
    }

    let contentContainer;
    let navContainer;

    function updateNavContainer(newNavContainer) {
        navContainer = newNavContainer;
        projects.forEach((project) => {
            project.updateNavContainer(newNavContainer);
        });
    }

    function updateContentContainer(newContentContainer) {
        contentContainer = newContentContainer;
        projects.forEach((project) => {
            project.updateContentContainer(newContentContainer);
        });
    }

    return { projects, addProject, updateNavContainer, updateContentContainer };
}
