import * as List from "./list.js";
import * as Item from "./item.js";

export function create(title, description, listItems, addListItem) {
    const listContainer = document.createElement("div");
    listContainer.classList.add("list-container");

    const listTitleContainer = document.createElement("div");
    listTitleContainer.classList.add("list-title-container");

    const listInfoContainer = document.createElement("div");
    listInfoContainer.classList.add("list-info-container");

    const listTitle = document.createElement("div");
    listTitle.classList.add("list-title");
    listTitle.textContent = title;
    listInfoContainer.appendChild(listTitle);

    const listDescription = document.createElement("div");
    listDescription.classList.add("list-description");
    listDescription.textContent = description;
    listInfoContainer.appendChild(listDescription);

    listTitleContainer.appendChild(listInfoContainer);

    const addNewItemButton = document.createElement("div");
    addNewItemButton.classList.add("new-list-item-button");
    addNewItemButton.addEventListener("click", () => {
        addListItem();
        listContainer.appendChild(listItems[listItems.length - 1].itemVisual);
    });
    listTitleContainer.appendChild(addNewItemButton);

    listContainer.appendChild(listTitleContainer);

    appendWholeItemList(listContainer, listItems);

    return listContainer;
}

export function appendWholeItemList(listContainer, listItems) {
    listItems.forEach((item) => {
        listContainer.appendChild(item.itemVisual);
    });
}
