import * as GenerateElement from "./generatePageElement.js";

export function create(title, description, dueDate) {
    const listItemContainer = GenerateElement.generatePageElement("div", [
        "item-container",
    ]);

    const checkboxContainer = GenerateElement.generatePageElement(
        "div",
        ["item-checkbox-container"],
        null,
        listItemContainer
    );
    const checkbox = GenerateElement.generatePageElement(
        "input",
        ["item-checkbox"],
        null,
        checkboxContainer
    );
    checkbox.type = "checkbox";

    const infoContainer = GenerateElement.generatePageElement(
        "div",
        ["item-info-container"],
        null,
        listItemContainer
    );

    const itemTitle = GenerateElement.generatePageElement(
        "div",
        ["item-title"],
        title,
        infoContainer
    );

    const itemDescription = GenerateElement.generatePageElement(
        "div",
        ["item-description"],
        description,
        infoContainer
    );

    const itemDueDate = GenerateElement.generatePageElement(
        "div",
        ["item-due-date"],
        dueDate,
        infoContainer
    );

    const removeItemButton = GenerateElement.generatePageElement(
        "div",
        ["item-remove-button"],
        "remove item",
        listItemContainer
    );
    removeItemButton.addEventListener("click", () => {
        listItemContainer.remove();
    });

    return listItemContainer;
}
