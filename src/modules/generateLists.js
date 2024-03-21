import * as Item from "./modules/item.js";
import * as List from "./modules/list.js";
import * as Project from "./modules/project.js";

export function create(contentContainer) {
    let projects = [];

    for (let i = 1; i < 3; i++) {
        let lists = [];
        for (let j = 1; j < 4; j++) {
            let listItems = [];
            for (let k = 1; k < 7; k++) {
                let newItem = Item.create(
                    `title ${j}-${k}`,
                    `description ${j}-${k}`,
                    `due date ${j}-${k}`
                );
                listItems.push(newItem);
            }
            let newList = List.create(
                `title ${i}-${j}`,
                `description ${i}-${j}`,
                listItems
            );
            lists.push(newList);
        }
        let newProject = Project.create(
            `title ${i}`,
            `description ${i}`,
            lists
        );
        projects.push(newProject);
    }

    projects.forEach((element) => {
        contentContainer.appendChild(element.projectVisual);
    });
}
