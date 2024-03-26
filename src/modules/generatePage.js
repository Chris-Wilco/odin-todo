import * as GenerateLists from "./generateLists.js";
import * as Navigation from "./navigation.js";
import * as GenerateElement from "./generatePageElement.js";
import * as User from "./user.js";
import * as ContentContainer from "./contentContainer.js";

export function generatePage(documentBody) {
    const projectList = GenerateLists.create();

    const newUser = User.create(projectList);

    const navContainer = Navigation.create(newUser.projects);
    documentBody.appendChild(navContainer.navVisual);

    const newContentContainer = ContentContainer.create(documentBody, newUser);

    newContentContainer.changeProject(newUser.projects[0]);
}
