function create(listItem) {
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("list-item-container");

    let title = document.createElement("div");
    title.textContent = `Title: ${listItem.title}`;
    title.classList.add("list-item");

    let description = document.createElement("div");
    description.textContent = `Description: ${listItem.description}`;
    description.classList.add("list-item");

    let dueDate = document.createElement("div");
    dueDate.textContent = `Due date: ${listItem.dueDate}`;
    dueDate.classList.add("list-item");

    containerDiv.appendChild(title);
    containerDiv.appendChild(description);
    containerDiv.appendChild(dueDate);

    return { containerDiv };
}

export * from "itemVisual.js";
