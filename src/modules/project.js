import * as ProjectVisual from "./modules/projectVisual.js";

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
