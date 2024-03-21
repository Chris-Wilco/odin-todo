import * as GenerateLists from "./modules/generateLists.js";

function generatePage(documentBody) {
    const documentHeader = document.createElement("div");
    documentHeader.classList.add("header-div");
    documentHeader.textContent = "I am header!";

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container");

    const newContent = GenerateLists.create(contentContainer);

    documentBody.appendChild(documentHeader);
    documentBody.appendChild(contentContainer);
}
