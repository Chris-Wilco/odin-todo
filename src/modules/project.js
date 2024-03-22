import * as ProjectVisual from "./projectVisual.js";

export function create(title, description, lists) {
    function addList(newList) {
        lists.push(newList);
    }

    const projectVisual = ProjectVisual.create(lists);

    return {
        title,
        description,
        lists,
        projectVisual,
    };
}
