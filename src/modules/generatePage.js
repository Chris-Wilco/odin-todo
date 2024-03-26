import * as GenerateLists from "./generateLists.js";
import * as Navigation from "./navigation.js";
import * as GenerateElement from "./generatePageElement.js";

export function generatePage(documentBody) {
    const projectList = GenerateLists.create();

    const navContainer = Navigation.create(projectList);
    documentBody.appendChild(navContainer.navVisual);

    const contentContainer = GenerateElement.generatePageElement(
        "div",
        ["content-container"],
        documentBody
    );
    contentContainer.appendChild(projectList[0].projectVisual);
}
