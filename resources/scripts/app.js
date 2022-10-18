// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
// var icon = require('@fluentui/svg-icons/icons/add_20_filled.svg');

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
