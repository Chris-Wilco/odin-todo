export function create(title, description, dueDate) {
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("list-item-container");

    let titleElement = document.createElement("div");
    titleElement.textContent = `Title: ${title}`;
    titleElement.classList.add("list-item");

    let descriptionElement = document.createElement("div");
    descriptionElement.textContent = `Description: ${description}`;
    descriptionElement.classList.add("list-item");

    let dueDateElement = document.createElement("div");
    dueDateElement.textContent = `Due date: ${dueDate}`;
    dueDateElement.classList.add("list-item");

    containerDiv.appendChild(titleElement);
    containerDiv.appendChild(descriptionElement);
    containerDiv.appendChild(dueDateElement);

    return { containerDiv };
}
