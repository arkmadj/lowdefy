import authenticate from "./authenticate.js";
import saveInLocalStorage from "./localStorage.js"

window.lowdefy.registerJsAction("authenticate", authenticate);
window.lowdefy.registerJsAction("set", saveInLocalStorage.set);
window.lowdefy.registerJsAction("get", saveInLocalStorage.get);
