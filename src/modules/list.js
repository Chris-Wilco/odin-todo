import * as ListVisual from "./listVisual.js";
import * as ListNavVisual from "./listNavVisual.js";

import * as Item from "./item.js";

export function create(title, description, listItems = []) {
    function addListItem() {
        const itemName = prompt("Item name?");
        const itemDescription = prompt("Item description?");
        const itemDueDate = prompt("Item due date?");
        const newItem = Item.create(itemName, itemDescription, itemDueDate);
        listItems.push(newItem);
        return newItem;
    }

    const listVisual = ListVisual.create(
        title,
        description,
        listItems,
        addListItem
    );

    const listNavVisual = ListNavVisual.create(title);

    return {
        title,
        description,
        listItems,
        listVisual,
        listNavVisual,
        addListItem,
    };
}
