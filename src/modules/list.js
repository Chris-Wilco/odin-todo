import * as Item from "./modules/item.js";

export function create(title, description, listItems = []) {
    function addListItem(newItem) {
        listItems.push(newItem);
    }

    return {
        title,
        description,
        listItems,
        addListItem,
    };
}
