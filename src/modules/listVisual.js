import * as ItemVisual from "./modules/itemVisual.js";

export function create(list) {
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("list-container");

    let headerDiv = document.createElement("div");
    headerDiv.classList.add("list-item-container");
    headerDiv.textContent = `I'm a header`;

    appendWholeItemList(containerDiv, list);

    return {
        containerDiv,
    };
}

function attachNewListItem(containerDiv, itemVisual) {
    containerDiv.appendChild(itemVisual);
}

function appendWholeItemList(containerDiv, list) {
    list.listItems.array.forEach((element) => {
        const newItemVisual = ItemVisual.create(element);
        attachNewListItem(containerDiv, newItemVisual);
    });
}
