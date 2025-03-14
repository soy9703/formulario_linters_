"use strict";
(self["webpackChunklinters_formulario"] = self["webpackChunklinters_formulario"] || []).push([["index"],{

/***/ "./src/js/modules/formHandler.js":
/*!***************************************!*\
  !*** ./src/js/modules/formHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupFormHandler)
/* harmony export */ });
function setupFormHandler() {
  const form = document.getElementById('survey-form');
  const messageContainer = document.createElement('message-Container');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('number').value;
    const dropdown = document.getElementById('dropdown').value;
    const radioButtons = document.querySelectorAll('input[name="choice]:checked');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const comments = document.getElementById('comments').value;

    if (name && email && age && dropdown && radioButtons && checkboxes.length > 0 && comments) {
      messageContainer.textContent = 'FORMULARIO ENVIADO CON EXITO';
      messageContainer.style.color = 'green'; // estilo para el mensaje de éxito
      form.reset(); // opcional: resetea el formulario despues de enviarlo
    } else {
      messageContainer.textContent = 'Por favor complete todos los campos requeridos.';
      messageContainer.style.color = 'red'; // estilo para el mensaje de error
    }
  });
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_formHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modules/formHandler.js */ "./src/js/modules/formHandler.js");


document.addEventListener('DOMContentLoaded', () => {
  (0,_js_modules_formHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLG9CQUFvQjtBQUNwQixNQUFNO0FBQ047QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ3hCMkQ7O0FBRTNEO0FBQ0EsRUFBRSxzRUFBZ0I7QUFDbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbnRlcnNfZm9ybXVsYXJpby8uL3NyYy9qcy9tb2R1bGVzL2Zvcm1IYW5kbGVyLmpzIiwid2VicGFjazovL2xpbnRlcnNfZm9ybXVsYXJpby8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwRm9ybUhhbmRsZXIoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VydmV5LWZvcm0nKTtcbiAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21lc3NhZ2UtQ29udGFpbmVyJyk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKS52YWx1ZTtcbiAgICBjb25zdCBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtYmVyJykudmFsdWU7XG4gICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24nKS52YWx1ZTtcbiAgICBjb25zdCByYWRpb0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwiY2hvaWNlXTpjaGVja2VkJyk7XG4gICAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJyk7XG4gICAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHMnKS52YWx1ZTtcblxuICAgIGlmIChuYW1lICYmIGVtYWlsICYmIGFnZSAmJiBkcm9wZG93biAmJiByYWRpb0J1dHRvbnMgJiYgY2hlY2tib3hlcy5sZW5ndGggPiAwICYmIGNvbW1lbnRzKSB7XG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ0ZPUk1VTEFSSU8gRU5WSUFETyBDT04gRVhJVE8nO1xuICAgICAgbWVzc2FnZUNvbnRhaW5lci5zdHlsZS5jb2xvciA9ICdncmVlbic7IC8vIGVzdGlsbyBwYXJhIGVsIG1lbnNhamUgZGUgZcyBeGl0b1xuICAgICAgZm9ybS5yZXNldCgpOyAvLyBvcGNpb25hbDogcmVzZXRlYSBlbCBmb3JtdWxhcmlvIGRlc3B1ZXMgZGUgZW52aWFybG9cbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICdQb3IgZmF2b3IgY29tcGxldGUgdG9kb3MgbG9zIGNhbXBvcyByZXF1ZXJpZG9zLic7XG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnN0eWxlLmNvbG9yID0gJ3JlZCc7IC8vIGVzdGlsbyBwYXJhIGVsIG1lbnNhamUgZGUgZXJyb3JcbiAgICB9XG4gIH0pO1xufSIsImltcG9ydCBzZXR1cEZvcm1IYW5kbGVyIGZyb20gJy4vanMvbW9kdWxlcy9mb3JtSGFuZGxlci5qcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHNldHVwRm9ybUhhbmRsZXIoKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==