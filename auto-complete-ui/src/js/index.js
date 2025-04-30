import "../css/reset.css";
import "../css/style.css";

import { addSearchEvent } from "./events/searchEvents.js";
import { addKeyEvent } from "./events/keyEvents.js";
import { ulSearchClickEvent } from "./events/ulSearchClickEvent.js";
import { createAutoCompleteUI } from "./UI/createAutoCompleteUI.js";

createAutoCompleteUI();
addKeyEvent();
addSearchEvent('.search');
ulSearchClickEvent();
