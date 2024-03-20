import * as List from "./modules/list.js";

export function create(title, description, dueDate) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
    };
}
