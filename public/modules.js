import authenticate from "./authenticate.js";
import saveInLocalStorage from "./localStorage.js";
import handleUpload from "./handleUpload.js";

window.lowdefy.registerJsAction("authenticate", authenticate);
window.lowdefy.registerJsAction("set", saveInLocalStorage.set);
window.lowdefy.registerJsAction("get", saveInLocalStorage.get);
window.lowdefy.registerJsAction("handleUpload", handleUpload);
