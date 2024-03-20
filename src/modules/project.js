function create(title, description, lists) {
    function addList(newList) {
        lists.push(newList);
    }
    return {
        title,
        description,
        lists,
    };
}

export * from "project.js";
