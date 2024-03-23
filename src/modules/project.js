import * as ProjectVisual from "./projectVisual.js";

export function create(title, description, lists) {
    function addList(newList) {
        lists.push(newList);
    }

    const projectVisual = ProjectVisual.create(title, description, lists);

    return {
        title,
        description,
        lists,
        projectVisual,
    };
}
