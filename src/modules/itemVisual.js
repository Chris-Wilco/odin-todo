export function create(title, description, dueDate) {
    const listItemContainer = document.createElement("div");
    listItemContainer.classList.add("item-container");

    const checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("item-checkbox-container");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("item-checkbox");
    checkboxContainer.appendChild(checkbox);
    listItemContainer.appendChild(checkboxContainer);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("item-info-container");

    const itemTitle = document.createElement("div");
    itemTitle.textContent = title;
    itemTitle.classList.add("item-title");

    const itemDescription = document.createElement("div");
    itemDescription.textContent = description;
    itemDescription.classList.add("item-description");

    const itemDueDate = document.createElement("div");
    itemDueDate.textContent = dueDate;
    itemDueDate.classList.add("item-due-date");

    infoContainer.appendChild(itemTitle);
    infoContainer.appendChild(itemDescription);
    infoContainer.appendChild(itemDueDate);

    listItemContainer.appendChild(infoContainer);

    return listItemContainer;
}
