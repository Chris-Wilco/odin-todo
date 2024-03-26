import * as NavigationVisual from "./navigationVisual.js";

export function create(projectList) {
    const navVisual = NavigationVisual.create(projectList);

    return { navVisual };
}
