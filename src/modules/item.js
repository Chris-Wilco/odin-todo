import * as ItemVisual from "./modules/itemVisual.js";

export function create(title, description, dueDate) {
    const itemVisual = ItemVisual.create(title, description, dueDate);

    return {
        title,
        description,
        dueDate,
        itemVisual,
    };
}
