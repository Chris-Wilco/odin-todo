import * as GenerateLists from "./generateLists.js";
import * as Navigation from "./navigationContainer.js";
import * as GenerateElement from "./generatePageElement.js";
import * as User from "./user.js";
import * as ContentContainer from "./contentContainer.js";

export function generatePage() {
    const documentBody = document.querySelector("body");

    //Just reading from user storage.
    const projectList = GenerateLists.create();

    const newUser = User.create(projectList);

    //TODO: do I need to send content container object to nav so that nav can have a button to clear content area?
    //TODO: Do both the content container and the navigation need to be created as their own entities and then added to the main body here?
    //Does that allow for button functions to be added and not have to choose which element is generated first? Can feed one to the other without worrying about the order they'll be shown on the page.

    const newNavContainer = Navigation.create(newUser);
    /* documentBody.appendChild(newNavContainer.navVisual); */

    const newContentContainer = ContentContainer.create(newUser);

    newContentContainer.updateNavContainer(newNavContainer);
    newNavContainer.updateContentContainer(newContentContainer);

    newContentContainer.resetContentContainer();

    //Open either no project or generic project
    //newContentContainer.changeProject(newUser.projects[0]);
}

export function clearPage() {
    const documentBody = document.querySelector("body");

    while (documentBody.firstChild) {
        documentBody.removeChild(documentBody.lastChild);
    }
}

export function resetPage() {
    clearPage();
    generatePage();
}
