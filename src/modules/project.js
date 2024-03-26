import * as ProjectVisual from "./projectVisual.js";
import * as ProjectNavVisual from "./projectNavVisual.js";
import * as List from "./list.js";

//TODO: Do i need a project container for holding and creating new projects?
//Probably... A User module? Probably...

export function create(title, description, lists) {
    function addList() {
        const listName = prompt("Item name?");
        const listDescription = prompt("Item description?");
        const newList = List.create(listName, listDescription);
        lists.push(newList);
        return newList;
    }

    const projectVisual = ProjectVisual.create(
        title,
        description,
        lists,
        addList
    );

    const projectNavVisual = ProjectNavVisual.create(title, lists);

    return {
        title,
        description,
        lists,
        projectVisual,
        projectNavVisual,
    };
}
