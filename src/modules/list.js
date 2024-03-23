import * as ListVisual from "./listVisual.js";

export function create(title, description, listItems) {
    function addListItem(newItem) {
        listItems.push(newItem);
    }

    const listVisual = ListVisual.create(title, description, listItems);

    return {
        title,
        description,
        listItems,
        addListItem,
        listVisual,
    };
}
