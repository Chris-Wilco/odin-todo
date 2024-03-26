import * as Project from "./project.js";

export function create(projects = []) {
    function addProject() {
        const projectName = prompt("Project name?");
        const projectDescription = prompt("Project description?");
        const newProject = Project.create(projectName, projectDescription);
        projects.push(newList);
        return newProject;
    }

    return { projects, addProject };
}
