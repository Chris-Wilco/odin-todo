export function create(list) {
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("list-container");

    let headerDiv = document.createElement("div");
    headerDiv.classList.add("list-header");
    headerDiv.textContent = `I'm a list header`;

    containerDiv.appendChild(headerDiv);

    appendWholeItemList(containerDiv, list);

    return {
        containerDiv,
    };
}

export function appendWholeItemList(containerDiv, list) {
    list.forEach((element) => {
        containerDiv.appendChild(element.itemVisual.containerDiv);
    });
}
