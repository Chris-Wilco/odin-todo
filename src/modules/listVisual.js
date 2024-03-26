import * as List from "./list.js";
import * as GenerateElement from "./generatePageElement.js";

export function create(title, description, listItems, addListItem) {
    const listContainer = GenerateElement.generatePageElement("div", [
        "list-container",
    ]);

    const listTitleContainer = GenerateElement.generatePageElement(
        "div",
        ["list-title-container"],
        null,
        listContainer
    );

    const listInfoContainer = GenerateElement.generatePageElement(
        "div",
        ["list-info-container"],
        null,
        listTitleContainer
    );

    const listTitle = GenerateElement.generatePageElement(
        "div",
        ["list-title"],
        title,
        listInfoContainer
    );

    const listDescription = GenerateElement.generatePageElement(
        "div",
        ["list-description"],
        description,
        listInfoContainer
    );

    const addNewItemButton = GenerateElement.generatePageElement(
        "div",
        ["new-list-item-button"],
        null,
        listTitleContainer
    );

    addNewItemButton.addEventListener("click", () => {
        const newItem = addListItem();
        listContainer.appendChild(newItem.itemVisual);
    });

    appendWholeItemList(listContainer, listItems);

    return listContainer;
}

export function appendWholeItemList(listContainer, listItems) {
    listItems.forEach((item) => {
        listContainer.appendChild(item.itemVisual);
    });
}
