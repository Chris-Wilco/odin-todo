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

function appendWholeItemList(containerDiv, list) {
    list.listItems.array.forEach((element) => {
        containerDiv.appendChild(element.itemVisual);
    });
}
