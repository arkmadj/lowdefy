import authenticate from "./authenticate.js";
import saveInLocalStorage from "./localStorage.js";
import questionTemplate from "./question.js";
import form from "./form.js";

window.lowdefy.registerJsAction("authenticate", authenticate);
window.lowdefy.registerJsAction("set", saveInLocalStorage.set);
window.lowdefy.registerJsAction("get", saveInLocalStorage.get);
window.lowdefy.registerJsAction("create", questionTemplate.create);
window.lowdefy.registerJsAction("add_option", questionTemplate.addOptions);
window.lowdefy.registerJsAction("create_form", form.create);
