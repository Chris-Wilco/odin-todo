import * as Item from "./item.js";
import * as List from "./list.js";
import * as Project from "./project.js";

export function create() {
    let projects = [];

    for (let i = 1; i < 3; i++) {
        let lists = [];
        for (let j = 1; j < 4; j++) {
            let listItems = [];
            for (let k = 1; k < 7; k++) {
                let newItem = Item.create(
                    `Item title ${i}-${j}-${k}`,
                    `description ${i}-${j}-${k}`,
                    `due date ${i}-${j}-${k}`
                );
                listItems.push(newItem);
            }

            let newList = List.create(
                `List title ${i}-${j}`,
                `description ${i}-${j}`,
                listItems
            );
            lists.push(newList);
        }
        let newProject = Project.create(
            `Project title ${i}`,
            `description ${i}`,
            lists
        );
        projects.push(newProject);
    }

    /* projects.forEach((element) => {
        contentContainer.appendChild(element.projectVisual.containerDiv);
    }); */

    return projects;
}
