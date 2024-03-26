import * as GenerateElement from "./generatePageElement.js";

export function create(title, description, listItems, addListItem) {
    const listContainer = GenerateElement.generatePageElement("div", [
        "list-container",
    ]);

    const listTitleContainer = GenerateElement.generatePageElement(
        "div",
        ["list-title-container"],
        listContainer
    );

    const listInfoContainer = GenerateElement.generatePageElement(
        "div",
        ["list-info-container"],
        listTitleContainer
    );

    const listTitle = GenerateElement.generatePageElement(
        "div",
        ["list-title"],
        listInfoContainer,
        title
    );

    const listDescription = GenerateElement.generatePageElement(
        "div",
        ["list-description"],
        listInfoContainer,
        description
    );

    const addNewItemButton = GenerateElement.generatePageElement(
        "div",
        ["new-list-item-button"],
        listTitleContainer
    );
    addNewItemButton.addEventListener("click", () => {
        const newItem = addListItem();
        listContainer.appendChild(newItem.itemVisual);
    });

    const removeListButton = GenerateElement.generatePageElement(
        "div",
        ["item-remove-button"],
        listContainer,
        "delete list"
    );
    removeListButton.addEventListener("click", () => {
        listContainer.remove();
        //TODO: link this to also remove the nav bar representation of this list
    });

    appendWholeItemList(listContainer, listItems);

    return listContainer;
}

export function appendWholeItemList(listContainer, listItems) {
    listItems.forEach((item) => {
        listContainer.appendChild(item.itemVisual);
    });
}
