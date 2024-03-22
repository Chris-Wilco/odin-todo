import * as ItemVisual from "./itemVisual.js";

export function create(title, description, dueDate) {
    const itemVisual = ItemVisual.create(title, description, dueDate);

    return {
        title,
        description,
        dueDate,
        itemVisual,
    };
}
