import "@webcomponents/webcomponentsjs";
import "photon-colors/photon-colors.css";
import "./index.css";
import "./attributes";

// Import all components/*/index.js
require.context("./components", true, /\/webcomponent.js$/);
