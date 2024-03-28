import * as ItemVisual from "./itemVisual.js";

export function create(title, description, dueDate) {
    const itemVisual = ItemVisual.create(title, description, dueDate);

    let contentContainer;
    let navContainer;

    function updateNavContainer(newNavContainer) {
        navContainer = newNavContainer;
    }

    function updateContentContainer(newContentContainer) {
        contentContainer = newContentContainer;
    }

    return {
        title,
        description,
        dueDate,
        itemVisual,
        updateNavContainer,
        updateContentContainer,
    };
}
