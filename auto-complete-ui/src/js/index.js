"use strict";

import '../css/reset.css';
import '../css/style.css';

import { addSearchEvent } from "./events/searchEvents.js";
import { addKeyEvent } from "./events/keyEvents.js";
import { addClickEvent } from "./events/clickEvent.js";
import { createAutoCompliteUI } from "./UI/createAutoCompliteUI.js";

createAutoCompliteUI();
addKeyEvent();
addSearchEvent();
addClickEvent();
