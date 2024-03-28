import "./styles.css";
import * as GeneratePage from "./modules/generatePage.js";

const documentBody = document.querySelector("body");

const newPage = GeneratePage.generatePage(/* documentBody */);
