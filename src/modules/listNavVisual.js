import * as GenerateElement from "./generatePageElement.js";

export function create(title) {
    const listTitleContainer = GenerateElement.generatePageElement("div", [
        "nav-list-title-container",
    ]);

    const listTitleIcon = GenerateElement.generatePageElement(
        "div",
        ["nav-list-title-icon"],
        listTitleContainer
    );

    const listTitleDiv = GenerateElement.generatePageElement(
        "div",
        ["nav-list-title"],
        listTitleContainer,
        title
    );

    return listTitleContainer;
}
