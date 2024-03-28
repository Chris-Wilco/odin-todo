import * as NavigationVisual from "./navigationVisual.js";

export function create(user) {
    let contentContainer;

    //Can this still be const if we're going to update it?
    let navVisual = NavigationVisual.create(user.projects);

    function resetNavContainer() {
        navVisual = NavigationVisual.create(user.projects);
    }

    function updateContentContainer(newContentContainer) {
        contentContainer = newContentContainer;
    }

    return { navVisual, resetNavContainer, updateContentContainer };
}
