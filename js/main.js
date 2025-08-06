import { loadNavFooter } from "./nav.js";
import { addNavFooterEventListener } from "./script.js";

document.addEventListener("DOMContentLoaded", () => {
  loadNavFooter(addNavFooterEventListener);
});