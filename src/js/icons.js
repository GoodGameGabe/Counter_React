/* global FontAwesomeConfig */

//import fontawesome from "@fortawesome/fontawesome-free";
//import faClock from "@fortawesome/fontawesome/faClock";
//fontawesome.config = {
//	autoReplaceSvg: "nest"
//};

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

library.add(faClock);

//fontawesome.library.add(faClock);

/**
 * 5) Now, you can place the icon tag anywhere you want to icon to show, for example:
 *    <i className="fas fa-check"></i>
 */
