import * as ListVisual from "./modules/listVisual.js";

export function create(title, description, listItems = []) {
    function addListItem(newItem) {
        listItems.push(newItem);
    }

    const listVisual = ListVisual.create(listItems);

    return {
        title,
        description,
        listItems,
        addListItem,
        listVisual,
    };
}
