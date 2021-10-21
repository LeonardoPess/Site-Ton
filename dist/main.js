/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_plugins_maskMoney_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/plugins/maskMoney.js */ \"./src/modules/plugins/maskMoney.js\");\n/* harmony import */ var _modules_plugins_glider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/plugins/glider.js */ \"./src/modules/plugins/glider.js\");\n/* harmony import */ var _modules_calculadora_updateOptionsFromDebito_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calculadora/updateOptionsFromDebito.js */ \"./src/modules/calculadora/updateOptionsFromDebito.js\");\n/* harmony import */ var _modules_calculadora_calculateTaxa_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculadora/calculateTaxa.js */ \"./src/modules/calculadora/calculateTaxa.js\");\n/* harmony import */ var _modules_calculadora_calculateTarifa_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculadora/calculateTarifa.js */ \"./src/modules/calculadora/calculateTarifa.js\");\n/* harmony import */ var _modules_calculadora_calculateResult_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calculadora/calculateResult.js */ \"./src/modules/calculadora/calculateResult.js\");\n/* harmony import */ var _modules_calculadora_calculateEconomia_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculadora/calculateEconomia.js */ \"./src/modules/calculadora/calculateEconomia.js\");\n/* harmony import */ var _modules_maquininhasDinamicas_updateEachPlanMenu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/maquininhasDinamicas/updateEachPlanMenu.js */ \"./src/modules/maquininhasDinamicas/updateEachPlanMenu.js\");\n/* harmony import */ var _modules_maquininhasDinamicas_calculateTaxaDynamically_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/maquininhasDinamicas/calculateTaxaDynamically.js */ \"./src/modules/maquininhasDinamicas/calculateTaxaDynamically.js\");\n/* harmony import */ var _modules_maquininhasDinamicas_updateDynamically_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/maquininhasDinamicas/updateDynamically.js */ \"./src/modules/maquininhasDinamicas/updateDynamically.js\");\n/* harmony import */ var _modules_Menu_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/Menu.js */ \"./src/modules/Menu.js\");\n/* harmony import */ var _modules_Accordion_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/Accordion.js */ \"./src/modules/Accordion.js\");\n/* harmony import */ var _modules_ToggleSelected_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/ToggleSelected.js */ \"./src/modules/ToggleSelected.js\");\n/* harmony import */ var _modules_SmoothScroll_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/SmoothScroll.js */ \"./src/modules/SmoothScroll.js\");\n/* harmony import */ var _modules_AnimationByOffsetTop_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/AnimationByOffsetTop.js */ \"./src/modules/AnimationByOffsetTop.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_plugins_glider_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_plugins_maskMoney_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n(0,_modules_calculadora_updateOptionsFromDebito_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_calculadora_calculateTaxa_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_calculadora_calculateTarifa_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_calculadora_calculateResult_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_calculadora_calculateEconomia_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_maquininhasDinamicas_updateEachPlanMenu_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_maquininhasDinamicas_calculateTaxaDynamically_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_maquininhasDinamicas_updateDynamically_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n\nconst accordion = new _modules_Accordion_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]('[data-anime=\"according\"] dt');\naccordion.init();\n\nconst menu = new _modules_Menu_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('.menu-btn', 'nav.mobile ul', 'show');\nmenu.init();\n\nconst smoothScroll = new _modules_SmoothScroll_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]('a[href^=\"#\"]');\nsmoothScroll.init();\n\nconst toggleSelected = new _modules_ToggleSelected_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]('.tipo-venda span');\ntoggleSelected.init();\n\nconst animationByOffsetTop = new _modules_AnimationByOffsetTop_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]('[data-anime=\"scroll\"]');\nanimationByOffsetTop.init();\n\n\n//# sourceURL=webpack://ton/./src/App.js?");

/***/ }),

/***/ "./src/modules/Accordion.js":
/*!**********************************!*\
  !*** ./src/modules/Accordion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = 'ativo';\n  }\n\n  toggleAccordion(item) {\n    item.classList.toggle(this.activeClass);\n    item.nextElementSibling.classList.toggle(this.activeClass);\n  }\n\n  addAccordionEvent() {\n    this.accordionList.forEach((item) => {\n      item.addEventListener('click', () => this.toggleAccordion(item));\n    });\n  }\n\n  init() {\n    if (this.accordionList.length) {\n      this.addAccordionEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/Accordion.js?");

/***/ }),

/***/ "./src/modules/AnimationByOffsetTop.js":
/*!*********************************************!*\
  !*** ./src/modules/AnimationByOffsetTop.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimationByOffsetTop)\n/* harmony export */ });\n/* harmony import */ var _util_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/debounce.js */ \"./src/modules/util/debounce.js\");\n\n\nclass AnimationByOffsetTop {\n  constructor(sections) {\n    this.sections = document.querySelectorAll(sections);\n    this.windowsMetade = window.innerHeight * 0;\n    this.checkDistance = (0,_util_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistance.bind(this), 50);\n  }\n\n  getDistance() {\n    this.distance = [...this.sections].map((section) => {\n      const offset = section.offsetTop;\n      return {\n        element: section,\n        offset: Math.floor(offset - this.windowsMetade),\n      };\n    });\n  }\n\n  checkDistance() {\n    this.distance.forEach((item) => {\n      if (window.pageYOffset > item.offset) {\n        item.element.classList.add('ativo');\n      } else if (item.element.classList.contains('ativo')) {\n        item.element.classList.remove('ativo');\n      }\n    });\n  }\n\n  init() {\n    if (this.sections.length) {\n      this.getDistance();\n      this.checkDistance();\n      window.addEventListener('scroll', this.checkDistance);\n    }\n    return this;\n  }\n\n  stop() {\n    window.removeEventListener('scroll', this.checkDistance);\n  }\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/AnimationByOffsetTop.js?");

/***/ }),

/***/ "./src/modules/Menu.js":
/*!*****************************!*\
  !*** ./src/modules/Menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\nclass Menu {\n  constructor(menuBtn, menuContainer, activeState) {\n    this.menuBtn = document.querySelector(menuBtn);\n    this.menuContainer = document.querySelector(menuContainer);\n    this.logo = document.querySelector('.logo');\n\n    this.activeState = activeState;\n\n    this._expanded = this.expanded;\n\n    this.links = [...this.menuContainer.querySelectorAll('a[href^=\"#\"]')];\n    this.toggle = this.toggle.bind(this);\n    this.goToId = this.goToId.bind(this);\n  }\n\n  get expanded() {\n    return JSON.parse(this.menuContainer.getAttribute('aria-expanded'));\n  }\n\n  open() {\n    this.menuBtn.setAttribute('aria-expanded', true);\n    this.menuContainer.setAttribute('aria-expanded', true);\n    this.menuBtn.classList.add('open');\n    this.menuContainer.classList.add(this.activeState);\n  }\n\n  close() {\n    this.menuBtn.setAttribute('aria-expanded', false);\n    this.menuContainer.setAttribute('aria-expanded', false);\n    this.menuBtn.classList.remove('open');\n    this.menuContainer.classList.remove(this.activeState);\n  }\n\n  toggle() {\n    this.expanded ? this.close() : this.open();\n  }\n\n  goToId() {\n    this.close();\n  }\n\n  handleEvents() {\n    this.links.forEach((link) => link.addEventListener('click', this.goToId));\n    this.menuBtn.addEventListener('click', this.toggle);\n  }\n\n  init() {\n    this.handleEvents();\n  }\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/Menu.js?");

/***/ }),

/***/ "./src/modules/SmoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/SmoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SmoothScroll)\n/* harmony export */ });\n/* harmony import */ var _smoothScrollTo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothScrollTo.js */ \"./src/modules/smoothScrollTo.js\");\n\n\nclass SmoothScroll {\n  constructor(links, options) {\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = { behavior: 'smooth', block: 'start' };\n    } else {\n      this.options = options;\n    }\n\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n\n  getScrollTopByHref(e) {\n    const id = e.getAttribute('href');\n    return document.querySelector(id).offsetTop;\n  }\n\n  scrollToSection(e) {\n    e.preventDefault();\n    const to = this.getScrollTopByHref(e.currentTarget) - 80;\n    this.scrollToPosition(to);\n  }\n\n  scrollToPosition(to) {\n    (0,_smoothScrollTo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, to);\n  }\n\n  addLinkEvent() {\n    this.linksInternos.forEach((link) => {\n      link.addEventListener('click', this.scrollToSection);\n    });\n  }\n\n  init() {\n    if (this.linksInternos.length) {\n      this.addLinkEvent();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://ton/./src/modules/SmoothScroll.js?");

/***/ }),

/***/ "./src/modules/ToggleSelected.js":
/*!***************************************!*\
  !*** ./src/modules/ToggleSelected.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToggleSelected)\n/* harmony export */ });\nclass ToggleSelected {\n  constructor(list) {\n    this.list = document.querySelectorAll(list);\n    this.classSelected = 'selected';\n\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  handleClick({ currentTarget }) {\n    this.list.forEach((item) => item.classList.remove(this.classSelected));\n    currentTarget.classList.add('selected');\n  }\n\n  handleEvents() {\n    this.list.forEach((item) => item.addEventListener('click', this.handleClick));\n  }\n\n  init() {\n    this.handleEvents();\n  }\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/ToggleSelected.js?");

/***/ }),

/***/ "./src/modules/calculadora/calculateEconomia.js":
/*!******************************************************!*\
  !*** ./src/modules/calculadora/calculateEconomia.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initCalculateEconomia)\n/* harmony export */ });\n/* harmony import */ var _util_clearMoneyValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/clearMoneyValue.js */ \"./src/modules/util/clearMoneyValue.js\");\n/* harmony import */ var _util_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/format.js */ \"./src/modules/util/format.js\");\n\n\n\nfunction initCalculateEconomia() {\n  const plans = document.querySelectorAll('[data-plano]');\n  const calculadora = document.querySelector('.conversor-wrapper');\n  const economiaBox = document.querySelector('.conversor-wrapper [data-economia');\n  const planos = document.querySelectorAll('.conversor-wrapper [data-plano]');\n  const debito = document.querySelector('.conversor-wrapper #debito');\n  const parcelamento = document.querySelector('.conversor-wrapper #parcelamento');\n  const bandeira = document.querySelector('.conversor-wrapper #bandeira');\n  const daysOptions = document.querySelectorAll('.conversor-wrapper input[name=\"recebimento\"]');\n  const inputSellValue = document.querySelector('.conversor-wrapper [data-valor');\n\n  // economia flag one   --   indice 0 == Débito\n  const economiaGigaTonFlagOne = ['2.54', '3.83', '7.37', '8.93', '9.75', '10.68', '11.59', '11.89', '12.76', '13.61', '14.42', '15.23', '16.02'];\n  const economiaMegaTonFlagOne = ['2.51', '3.77', '6.92', '8.16', '8.89', '9.61', '10.31', '10.98', '11.64', '12.27', '12.87', '13.46', '14.02'];\n\n  // economia flag two   --   indice 0 == Débito\n  const economiaGigaTonFlagTwo = ['2.54', '2.64', '6.18', '7.63', '8.57', '9.50', '10.42', '10.82', '11.69', '12.54', '13.37', '14,18', '14.96'];\n  const economiaMegaTonFlagTwo = ['2.51', '3.77', '6.92', '8.16', '8.89', '9.61', '10.31', '10.98', '11.64', '12.27', '12.87', '13.46', '14.02'];\n\n  let economia;\n\n  function insertEconomiaOnHTML() {\n    economiaBox.innerHTML = (0,_util_format_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(economia);\n  }\n\n  function calculateResult() {\n    const sellValueClean = (0,_util_clearMoneyValue_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(inputSellValue.value);\n    economia = (sellValueClean / 100) * Number(economia);\n  }\n\n  function updateEconomiaByDayOption(index) {\n    const updatedEconomia = Number(economia);\n    if (index === 1) { economia = Math.round((updatedEconomia - 0.94) * 100) / 100; }\n    if (index === 2) { economia = Math.round((updatedEconomia - 1.69) * 100) / 100; }\n  }\n\n  function CalculateSavingPercentage(taxaArrayFlagOne, taxaArrayFlagTwo) {\n    [economia] = taxaArrayFlagOne;\n    if (bandeira.value === '2') {\n      [economia] = taxaArrayFlagTwo;\n    }\n    if (!debito.classList.contains('selected')) {\n      economia = taxaArrayFlagOne[parcelamento.value];\n      if (bandeira.value === '2') {\n        economia = taxaArrayFlagTwo[parcelamento.value];\n      }\n      daysOptions.forEach((day, index) => {\n        if (day.checked && index !== 0) {\n          updateEconomiaByDayOption(index);\n        }\n      });\n    }\n  }\n\n  function calculate() {\n    planos.forEach((plano) => {\n      if (plano.classList.contains('selected')) {\n        if (plano.textContent === 'GigaTon') {\n          CalculateSavingPercentage(economiaGigaTonFlagOne, economiaGigaTonFlagTwo);\n        }\n\n        if (plano.textContent === 'MegaTon') {\n          CalculateSavingPercentage(economiaMegaTonFlagOne, economiaMegaTonFlagTwo);\n        }\n\n        if (plano.textContent === 'Ton Básico') {\n          economia = 2.00;\n        }\n\n        calculateResult();\n        insertEconomiaOnHTML();\n      }\n    });\n  }\n\n  [parcelamento, bandeira].forEach((element) => {\n    element.addEventListener('change', calculate);\n  });\n\n  plans.forEach((plan) => {\n    plan.addEventListener('click', () => {\n      setTimeout(() => { calculate(); }, 100);\n    });\n  });\n\n  inputSellValue.addEventListener('keyup', calculate);\n  calculadora.addEventListener('click', calculate);\n  calculadora.addEventListener('touchstart', calculate);\n  setTimeout(() => { calculate(); }, 100);\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/calculadora/calculateEconomia.js?");

/***/ }),

/***/ "./src/modules/calculadora/calculateResult.js":
/*!****************************************************!*\
  !*** ./src/modules/calculadora/calculateResult.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initCalculateResult)\n/* harmony export */ });\n/* harmony import */ var _util_clearMoneyValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/clearMoneyValue.js */ \"./src/modules/util/clearMoneyValue.js\");\n/* harmony import */ var _util_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/format.js */ \"./src/modules/util/format.js\");\n\n\n\nfunction initCalculateResult() {\n  const plans = document.querySelectorAll('[data-plano]');\n  const calculadora = document.querySelector('.conversor-wrapper');\n  const tarifaResultBoxValue = document.querySelector('.conversor-wrapper [data-tarifa]');\n  const resultBoxValue = document.querySelector('.conversor-wrapper [data-recebe]');\n  const inputSellValue = document.querySelector('.conversor-wrapper [data-valor');\n  const parcelamento = document.querySelector('.conversor-wrapper #parcelamento');\n  const bandeira = document.querySelector('.conversor-wrapper #bandeira');\n\n  let result;\n\n  function insertResultOnHTML() {\n    resultBoxValue.innerHTML = (0,_util_format_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(result);\n  }\n\n  function calculate() {\n    const sellValueClean = (0,_util_clearMoneyValue_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(inputSellValue.value);\n    const tarifaValueClean = (0,_util_clearMoneyValue_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tarifaResultBoxValue.innerHTML);\n\n    result = (sellValueClean - tarifaValueClean);\n    insertResultOnHTML();\n  }\n\n  [parcelamento, bandeira].forEach((element) => {\n    element.addEventListener('change', calculate);\n  });\n\n  plans.forEach((plan) => {\n    plan.addEventListener('click', () => {\n      setTimeout(() => { calculate(); }, 100);\n    });\n  });\n\n  inputSellValue.addEventListener('keyup', calculate);\n  calculadora.addEventListener('click', calculate);\n  calculadora.addEventListener('touchstart', calculate);\n  setTimeout(() => { calculate(); }, 100);\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/calculadora/calculateResult.js?");

/***/ }),

/***/ "./src/modules/calculadora/calculateTarifa.js":
/*!****************************************************!*\
  !*** ./src/modules/calculadora/calculateTarifa.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initCalculateTarifa)\n/* harmony export */ });\n/* harmony import */ var _util_clearMoneyValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/clearMoneyValue.js */ \"./src/modules/util/clearMoneyValue.js\");\n/* harmony import */ var _util_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/format.js */ \"./src/modules/util/format.js\");\n\n\n\nfunction initCalculateTarifa() {\n  const plans = document.querySelectorAll('[data-plano]');\n  const calculadora = document.querySelector('.conversor-wrapper');\n  const tarifaResultBox = document.querySelector('.conversor-wrapper [data-tarifa]');\n  const taxaResultBox = document.querySelector('.conversor-wrapper [data-taxa]');\n  const inputSellValue = document.querySelector('.conversor-wrapper [data-valor]');\n  const parcelamento = document.querySelector('.conversor-wrapper #parcelamento');\n  const bandeira = document.querySelector('.conversor-wrapper #bandeira');\n\n  let tarifa;\n\n  function insertTarifaOnHTML() {\n    tarifaResultBox.innerHTML = (0,_util_format_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tarifa);\n  }\n\n  function calculate() {\n    const taxaResultBoxValue = Number(taxaResultBox.innerText.replace('%', ''));\n    const sellValueClean = (0,_util_clearMoneyValue_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(inputSellValue.value);\n\n    tarifa = ((sellValueClean / 100) * taxaResultBoxValue);\n    insertTarifaOnHTML();\n  }\n\n  [parcelamento, bandeira].forEach((element) => {\n    element.addEventListener('change', calculate);\n  });\n\n  plans.forEach((plan) => {\n    plan.addEventListener('click', () => {\n      setTimeout(() => { calculate(); }, 100);\n    });\n  });\n\n  inputSellValue.addEventListener('keyup', calculate);\n  calculadora.addEventListener('click', calculate);\n  calculadora.addEventListener('touchstart', calculate);\n\n  setTimeout(() => { calculate(); }, 100);\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/calculadora/calculateTarifa.js?");

/***/ }),

/***/ "./src/modules/calculadora/calculateTaxa.js":
/*!**************************************************!*\
  !*** ./src/modules/calculadora/calculateTaxa.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initCalculateTaxa)\n/* harmony export */ });\nfunction initCalculateTaxa() {\n  const plans = document.querySelectorAll('[data-plano]');\n  const calculadora = document.querySelector('.conversor-wrapper');\n  const taxaResultBox = document.querySelector('.conversor-wrapper [data-taxa]');\n  const plansCalculateMenu = document.querySelectorAll('.conversor-wrapper [data-plano]');\n  const debito = document.querySelector('.conversor-wrapper #debito');\n  const parcelamento = document.querySelector('.conversor-wrapper #parcelamento');\n  const bandeira = document.querySelector('.conversor-wrapper #bandeira');\n  const daysOptions = document.querySelectorAll('.conversor-wrapper input[name=\"recebimento\"]');\n\n  const taxaTonBasico = ['1.99', '4.73', '8.96', '10.74', '12.01', '13.27', '14.51', '15.72', '16.92', '18.09', '19.23', '20.36', '21.46'];\n\n  // Taxa flag one   --   indice 0 == Débito\n  const taxaGigaTonFlagOne = ['1.45', '2.90', '3.59', '3.93', '4.26', '4.59', '4.92', '5.83', '6.16', '6.48', '6.81', '7.13', '7.44'];\n  const taxaMegaTonFlagOne = ['1.48', '2.96', '4.04', '4.58', '5.12', '5.66', '6.20', '6.74', '7.28', '7.82', '8.36', '8.90', '9.44'];\n\n  // Taxa flag two   --   indice 0 == Débito\n  const taxaGigaTonFlagTwo = ['2.45', '4.09', '4.78', '5.11', '5.44', '5.77', '6.09', '6.90', '7.23', '7.55', '7.86', '8.18', '8.50'];\n  const taxaMegaTonFlagTwo = ['2.48', '4.15', '5.23', '5.77', '6.31', '6.85', '7.39', '7.93', '8.47', '9.01', '9.55', '10.09', '10.63'];\n\n  let taxa;\n\n  function insertTaxaOnHTML() {\n    taxaResultBox.innerHTML = `${Number(taxa).toFixed(2)}%`;\n  }\n\n  function updateTaxaByDayOption(index, basico) {\n    const updatedTaxa = Number(taxa);\n    if (index === 1 && !basico) {\n      taxa = Math.round((updatedTaxa - 0.01) * 100) / 100;\n    }\n\n    if (index === 1 && basico) {\n      taxa = Math.round((updatedTaxa - 1) * 100) / 100;\n      if (parcelamento.value === '1') {\n        taxa = Math.round((updatedTaxa - 0.95) * 100) / 100;\n      }\n    }\n\n    if (index === 2 && !basico) {\n      taxa = Math.round((updatedTaxa - 0.02) * 100) / 100;\n    }\n\n    if (index === 2 && basico) {\n      taxa = Math.round((updatedTaxa - 1.49) * 100) / 100;\n      if (parcelamento.value === '1') {\n        taxa = Math.round((updatedTaxa - 1.71) * 100) / 100;\n      }\n    }\n  }\n\n  function calculateTaxa(taxaArrayFlagOne, taxaArrayFlagTwo) {\n    [taxa] = taxaArrayFlagOne;\n    if (taxaArrayFlagTwo && bandeira.value === '2') {\n      [taxa] = taxaArrayFlagTwo;\n    }\n\n    if (!debito.classList.contains('selected')) {\n      taxa = taxaArrayFlagOne[parcelamento.value];\n      if (taxaArrayFlagTwo && bandeira.value === '2') {\n        taxa = taxaArrayFlagTwo[parcelamento.value];\n      }\n      daysOptions.forEach((day, index) => {\n        if (day.checked && index !== 0) {\n          if (taxaArrayFlagTwo) {\n            updateTaxaByDayOption(index);\n          } else {\n            updateTaxaByDayOption(index, true);\n          }\n        }\n      });\n    }\n  }\n\n  function calculate() {\n    plansCalculateMenu.forEach((plan) => {\n      if (plan.classList.contains('selected')) {\n        if (plan.textContent === 'GigaTon') {\n          calculateTaxa(taxaGigaTonFlagOne, taxaGigaTonFlagTwo);\n        }\n\n        if (plan.textContent === 'MegaTon') {\n          calculateTaxa(taxaMegaTonFlagOne, taxaMegaTonFlagTwo);\n        }\n\n        if (plan.textContent === 'Ton Básico') {\n          calculateTaxa(taxaTonBasico);\n        }\n        insertTaxaOnHTML();\n      }\n    });\n  }\n\n  [parcelamento, bandeira].forEach((element) => {\n    element.addEventListener('change', calculate);\n  });\n\n  plans.forEach((plan) => {\n    plan.addEventListener('click', () => {\n      setTimeout(() => { calculate(); }, 100);\n    });\n  });\n\n  calculadora.addEventListener('click', calculate);\n  calculadora.addEventListener('touchstart', calculate);\n  setTimeout(() => { calculate(); }, 100);\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/calculadora/calculateTaxa.js?");

/***/ }),

/***/ "./src/modules/calculadora/updateOptionsFromDebito.js":
/*!************************************************************!*\
  !*** ./src/modules/calculadora/updateOptionsFromDebito.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initUpdateOptionsFromDebito)\n/* harmony export */ });\nfunction initUpdateOptionsFromDebito() {\n  const tipoVendas = document.querySelectorAll('.conversor-wrapper .tipo-venda > *');\n  const parcelamento = document.querySelector('.parcelamento');\n  const oneDayOption = document.querySelector('#oneDayOption');\n  const twoDayOptionBox = document.querySelector('#twoDayOptionBox');\n  const threeDayOptionBox = document.querySelector('#threeDayOptionBox');\n\n  function handleTipoVendas({ target }) {\n    if (target.textContent === 'Débito') {\n      parcelamento.classList.add('hide');\n      twoDayOptionBox.classList.add('hide');\n      threeDayOptionBox.classList.add('hide');\n      oneDayOption.checked = true;\n    }\n\n    if (target.textContent === 'Crédito') {\n      parcelamento.classList.remove('hide');\n      twoDayOptionBox.classList.remove('hide');\n      threeDayOptionBox.classList.remove('hide');\n    }\n  }\n\n  tipoVendas.forEach((tipoVenda) => {\n    tipoVenda.addEventListener('click', handleTipoVendas);\n  });\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/calculadora/updateOptionsFromDebito.js?");

/***/ }),

/***/ "./src/modules/maquininhasDinamicas/calculateTaxaDynamically.js":
/*!**********************************************************************!*\
  !*** ./src/modules/maquininhasDinamicas/calculateTaxaDynamically.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initCalculateTaxaDynamically)\n/* harmony export */ });\nfunction initCalculateTaxaDynamically() {\n  const allPlansMenu = document.querySelectorAll('[data-plano]');\n  const plansMenuHeader = document.querySelectorAll('.desktop-menu a');\n  const taxaResultBox1 = document.querySelector('[data-dynamically=\"taxa-result1\"]');\n  const taxaResultBox2 = document.querySelector('[data-dynamically=\"taxa-result2\"]');\n  const taxaResultBox3 = document.querySelector('[data-dynamically=\"taxa-result3\"]');\n  const parcelamento = document.querySelector('[data-dynamically=\"taxa-parcelamento\"]');\n  const bandeira = document.querySelector('[data-dynamically=\"taxa-bandeira\"]');\n  const daysOptions2 = document.querySelector('[data-dynamically=\"taxa-days2\"]');\n  const daysOptions3 = document.querySelector('[data-dynamically=\"taxa-days3\"]');\n  const bandeiraMessage = document.querySelector('[data-dynamically=\"bandeira-message\"]');\n\n  // Taxa flag one   --   indice 0 == Débito\n  const taxaGigaTonFlagOne = ['1.45', '2.90', '3.59', '3.93', '4.26', '4.59', '4.92', '5.83', '6.16', '6.48', '6.81', '7.13', '7.44'];\n  const taxaMegaTonFlagOne = ['1.48', '2.96', '4.04', '4.58', '5.12', '5.66', '6.20', '6.74', '7.28', '7.82', '8.36', '8.90', '9.44'];\n  const taxaTonBasicoFlagOne = ['1.99', '4.73', '8.96', '10.74', '12.01', '13.27', '14.51', '15.72', '16.92', '18.09', '19.23', '20.36', '21.46'];\n\n  // One day flag two   --   indice 0 == Débito\n  const taxaGigaTonFlagTwo = ['2.45', '4.09', '4.78', '5.11', '5.44', '5.77', '6.09', '6.90', '7.23', '7.55', '7.86', '8.18', '8.50'];\n  const taxaMegaTonFlagTwo = ['2.48', '4.15', '5.23', '5.77', '6.31', '6.85', '7.39', '7.93', '8.47', '9.01', '9.55', '10.09', '10.63'];\n\n  let taxa1; let taxa2; let taxa3;\n\n  function insertTaxaOnHTML() {\n    taxaResultBox1.innerHTML = `${taxa1.replace('.', ',')}%`;\n    taxaResultBox2.innerHTML = `${taxa2.toString().replace('.', ',')}%`;\n    taxaResultBox3.innerHTML = `${taxa3.toString().replace('.', ',')}%`;\n  }\n\n  function calculateTaxa(taxaArrayFlagOne, taxaArrayFlagTwo) {\n    [taxa1] = taxaArrayFlagOne;\n    if (bandeira.value === '2') { [taxa1] = taxaArrayFlagTwo; }\n\n    [, taxa2] = taxaArrayFlagOne;\n    if (bandeira.value === '2') { [, taxa2] = taxaArrayFlagTwo; }\n    if (daysOptions2.value === '2') { taxa2 = Math.round((taxa2 - 0.01) * 100) / 100; }\n    if (daysOptions2.value === '3') { taxa2 = Math.round((taxa2 - 0.02) * 100) / 100; }\n\n    taxa3 = taxaArrayFlagOne[parcelamento.value];\n    if (bandeira.value === '2') { taxa3 = taxaArrayFlagTwo[parcelamento.value]; }\n    if (daysOptions3.value === '2') { taxa3 = Math.round((taxa3 - 0.01) * 100) / 100; }\n    if (daysOptions3.value === '3') { taxa3 = Math.round((taxa3 - 0.02) * 100) / 100; }\n  }\n\n  function calculate(plano) {\n    bandeiraMessage.innerHTML = 'Taxas para vendas das bandeiras';\n    bandeira.classList.remove('hide');\n\n    if (plano === '1' || null) {\n      calculateTaxa(taxaGigaTonFlagOne, taxaGigaTonFlagTwo);\n    }\n\n    if (plano === '2') {\n      calculateTaxa(taxaMegaTonFlagOne, taxaMegaTonFlagTwo);\n    }\n\n    if (plano === '3') {\n      bandeiraMessage.innerHTML = 'Taxas para vendas em <b>todas as bandeiras</b>';\n      bandeira.classList.add('hide');\n\n      [taxa1] = taxaTonBasicoFlagOne;\n\n      [, taxa2] = taxaTonBasicoFlagOne;\n      if (daysOptions2.value === '2') { taxa2 = Math.round((taxa2 - 0.95) * 100) / 100; }\n      if (daysOptions2.value === '3') { taxa2 = Math.round((taxa2 - 1.71) * 100) / 100; }\n\n      taxa3 = taxaTonBasicoFlagOne[parcelamento.value];\n      if (daysOptions3.value === '2') { taxa3 = Math.round((taxa3 - 1) * 100) / 100; }\n      if (daysOptions3.value === '3') { taxa3 = Math.round((taxa3 - 1.49) * 100) / 100; }\n    }\n    insertTaxaOnHTML();\n  }\n\n  function handleClick(e) {\n    const plano = e.currentTarget.getAttribute('data-plano');\n    calculate(plano);\n  }\n\n  allPlansMenu.forEach((plan) => {\n    plan.addEventListener('click', handleClick);\n  });\n\n  function init() {\n    plansMenuHeader.forEach((plan) => {\n      if (plan.classList.contains('selected')) {\n        const plano = plan.getAttribute('data-plano');\n        calculate(plano);\n      }\n    });\n  }\n  init();\n\n  [parcelamento, bandeira, daysOptions2, daysOptions3].forEach((el) => {\n    el.addEventListener('change', init);\n  });\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/maquininhasDinamicas/calculateTaxaDynamically.js?");

/***/ }),

/***/ "./src/modules/maquininhasDinamicas/updateDynamically.js":
/*!***************************************************************!*\
  !*** ./src/modules/maquininhasDinamicas/updateDynamically.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initUpdateDynamically)\n/* harmony export */ });\nfunction initUpdateDynamically() {\n  const allPlansMenu = document.querySelectorAll('[data-plano]');\n  const plansMenuHeader = document.querySelectorAll('.desktop-menu a');\n  const bannerGeneral = document.querySelector('.banner');\n  const planNameElement = document.querySelector('[data-banner=\"plano\"]');\n  const taxaElement = document.querySelector('[data-banner=\"porcentagem\"]');\n  const descElement = document.querySelector('[data-banner=\"desc\"]');\n  const maquininhas = document.querySelectorAll('[data-banner=\"maquininha\"]');\n  const maquininhasImages = document.querySelectorAll('[data-dynamically=\"img\"]');\n  const maquininhasPrices1x = document.querySelectorAll('[data-dynamically=\"preco1x\"]');\n  const maquininhasPrices12x = document.querySelectorAll('[data-dynamically=\"preco12x\"]');\n  const maquininhasNames = document.querySelectorAll('[data-dynamically=\"maquininha\"]');\n  const planNameMaquininha = document.querySelector('[data-dynamically=\"plano\"]');\n  const sellButtons = document.querySelectorAll('[data-dynamically=\"sellButton\"]');\n  const regulamentoBox = document.querySelector('[data-dynamically=\"plano-regulamento\"]');\n  const planTitle = document.querySelector('[data-dynamically=\"plano-title\"]');\n\n  // LINKS DE VENDA PARA AS MAQUININHAS\n  const sellLinksGiga = ['./', './', './'];\n  const sellLinksMega = ['./', './', './'];\n  const sellLinksBasico = ['./', './', './'];\n\n  function updateBanner(classe, planName, taxa, desc) {\n    bannerGeneral.classList.add(classe);\n    planNameElement.innerHTML = planName;\n    taxaElement.innerHTML = taxa;\n    descElement.innerHTML = desc;\n  }\n\n  function removeBannerClass() {\n    bannerGeneral.classList.remove('tonbasico-banner');\n    bannerGeneral.classList.remove('gigaton-banner');\n    bannerGeneral.classList.remove('megaton-banner');\n  }\n\n  function updateMaquininhaModels(model1, model2, model3) {\n    maquininhas.forEach((maquininha, index) => {\n      let maquininhaModel;\n\n      if (index === 0) { maquininhaModel = model1; }\n      if (index === 1) { maquininhaModel = model2; }\n      if (index === 2) { maquininhaModel = model3; }\n\n      maquininha.innerHTML = maquininhaModel;\n    });\n  }\n\n  function updateMaquininhaImages(imageURL1, imageURL2, imageURL3) {\n    maquininhasImages.forEach((imageBox, index) => {\n      imageBox.classList.remove('ativo');\n      let maquininhaImage;\n\n      if (index === 0) { maquininhaImage = imageURL1; }\n      if (index === 1) { maquininhaImage = imageURL2; }\n      if (index === 2) { maquininhaImage = imageURL3; }\n\n      imageBox.src = maquininhaImage;\n\n      imageBox.classList.add('ativo');\n      setTimeout(() => { imageBox.classList.remove('ativo'); }, 1000);\n    });\n  }\n\n  function updateMaquininhasPrices1x(value1, value2, value3) {\n    maquininhasPrices1x.forEach((maquininha, index) => {\n      let maquininhaPrice;\n\n      if (index === 0) { maquininhaPrice = value1; }\n      if (index === 1) { maquininhaPrice = value2; }\n      if (index === 2) { maquininhaPrice = value3; }\n\n      maquininha.innerHTML = maquininhaPrice;\n    });\n  }\n\n  function updateMaquininhasPrices12x(value1, value2, value3) {\n    maquininhasPrices12x.forEach((maquininha, index) => {\n      let maquininhaPrice;\n\n      if (index === 0) { maquininhaPrice = value1; }\n      if (index === 1) { maquininhaPrice = value2; }\n      if (index === 2) { maquininhaPrice = value3; }\n\n      maquininha.innerHTML = maquininhaPrice;\n    });\n  }\n\n  function updateMaquininhasName(name1, name2, name3) {\n    maquininhasNames.forEach((maquininha, index) => {\n      let maquininhaName;\n\n      if (index === 0) { maquininhaName = name1; }\n      if (index === 1) { maquininhaName = name2; }\n      if (index === 2) { maquininhaName = name3; }\n\n      maquininha.innerHTML = maquininhaName;\n    });\n  }\n\n  function updateSellButonsText(text1, text2, text3) {\n    sellButtons.forEach((sellButton, index) => {\n      let sellButtonsText;\n\n      if (index === 0) { sellButtonsText = text1; }\n      if (index === 1) { sellButtonsText = text2; }\n      if (index === 2) { sellButtonsText = text3; }\n\n      sellButton.innerHTML = sellButtonsText;\n    });\n  }\n\n  function updateSellButonsLink(link1, link2, link3) {\n    sellButtons.forEach((sellButton, index) => {\n      let sellButtonsLink;\n\n      if (index === 0) { sellButtonsLink = link1; }\n      if (index === 1) { sellButtonsLink = link2; }\n      if (index === 2) { sellButtonsLink = link3; }\n\n      sellButton.setAttribute('href', sellButtonsLink);\n    });\n  }\n\n  function update(plano) {\n    removeBannerClass();\n\n    if (plano === '1') {\n      updateBanner('gigaton-banner', 'GigaTon', '7,44%', 'No crédito em 12x');\n      planNameMaquininha.innerHTML = 'GigaTon';\n      updateMaquininhaModels('T3 Giga', 'T2 Giga', 'T1 Giga');\n      updateMaquininhaImages('./assets/maquininhas/t1giga.jpg', './assets/maquininhas/t2giga.png', './assets/maquininhas/t3giga.png');\n      updateMaquininhasPrices1x('por: R$106,92', 'por: R$258,12', 'por: R$366,12');\n      updateMaquininhasPrices12x('8,91', '21,51', '30,51');\n      updateMaquininhasName('T1 Giga', 'T2+ Giga', 'T3 Giga');\n      updateSellButonsText('PEDIR GIGATON', 'PEDIR T2+ GIGA', 'PEDIR T3 GIGA');\n      updateSellButonsLink(...sellLinksGiga);\n      regulamentoBox.innerHTML = '*Conheça o <a href=\"https://registon.api.ton.com.br/documents/regulamento-gigaton/latest?_ga=2.36063648.1260877289.1632585809-770312178.1632100683\" target=\"_blank\">Regulamento para o GigaTon</a>';\n      planTitle.innerHTML = 'GigaTon';\n    }\n\n    if (plano === '2') {\n      updateBanner('megaton-banner', 'MegaTon', '9,44%', 'No crédito em 12x');\n      planNameMaquininha.innerHTML = 'Megaton';\n      updateMaquininhaModels('T3 Mega', 'T2 Mega', 'T1 Mega');\n      updateMaquininhaImages('./assets/maquininhas/t1mega.png', './assets/maquininhas/t2mega.png', './assets/maquininhas/t3mega.png');\n      updateMaquininhasPrices1x('por: R$52,92', 'por: R$182,52', 'por: R$290,52');\n      updateMaquininhasPrices12x('4,41', '15,21', '24,21');\n      updateMaquininhasName('T1 Mega', 'T2+ Mega', 'T3 Mega');\n      updateSellButonsText('PEDIR T1 MEGA', 'PEDIR T2+ MEGA', 'PEDIR T3 MEGA');\n      updateSellButonsLink(...sellLinksMega);\n      regulamentoBox.innerHTML = '*Conheça o <a href=\"https://registon.api.ton.com.br/documents/regulamento-megaton/latest?_ga=2.24012474.1260877289.1632585809-770312178.1632100683\" target=\"_blank\">Regulamento para o MegaTon</a>';\n      planTitle.innerHTML = 'MegaTon';\n    }\n\n    if (plano === '3') {\n      updateBanner('tonbasico-banner', 'Ton Básico', 'Menor preço', 'nas maquininhas');\n      planNameMaquininha.innerHTML = 'Ton Básico';\n      updateMaquininhaModels('T3', 'T2', 'T1');\n      updateMaquininhaImages('./assets/maquininhas/t1basico.png', './assets/maquininhas/t2basico.png', './assets/maquininhas/t3basico.png');\n      updateMaquininhasPrices1x('por: R$11,88', 'por: R$171,72', 'por: R$182,52');\n      updateMaquininhasPrices12x('0,99', '14,31', '15,21');\n      updateMaquininhasName('T1 Básico', 'T2+ Básico', 'T3 Básico');\n      updateSellButonsText('PEDIR T1 BÁSICO', 'PEDIR T2+ BÁSICO', 'PEDIR T3 BÁSICO');\n      updateSellButonsLink(...sellLinksBasico);\n      regulamentoBox.innerHTML = '';\n      planTitle.innerHTML = 'Ton Básico';\n    }\n  }\n\n  function handleClick(e) {\n    const planName = e.currentTarget.getAttribute('data-plano');\n    update(planName);\n  }\n\n  allPlansMenu.forEach((plan) => {\n    plan.addEventListener('click', handleClick);\n  });\n\n  plansMenuHeader.forEach((plan) => {\n    if (plan.classList.contains('selected')) {\n      const planName = plan.getAttribute('data-plano');\n      update(planName);\n    }\n  });\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/maquininhasDinamicas/updateDynamically.js?");

/***/ }),

/***/ "./src/modules/maquininhasDinamicas/updateEachPlanMenu.js":
/*!****************************************************************!*\
  !*** ./src/modules/maquininhasDinamicas/updateEachPlanMenu.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initUpdateEachPlanMenu)\n/* harmony export */ });\nfunction initUpdateEachPlanMenu() {\n  const allPlansMenu = document.querySelectorAll('[data-plano]');\n  const plansMenuHeader = document.querySelectorAll('.desktop-menu a');\n\n  function update(planName) {\n    allPlansMenu.forEach((plan) => {\n      const currentPlanValue = plan.getAttribute('data-plano');\n      if (planName !== currentPlanValue) {\n        plan.classList.remove('selected');\n        plan.checked = false;\n      }\n\n      if (planName === currentPlanValue) {\n        plan.classList.add('selected');\n        plan.checked = true;\n      }\n    });\n  }\n\n  function handleClick(e) {\n    const planName = e.currentTarget.getAttribute('data-plano');\n    update(planName);\n  }\n\n  allPlansMenu.forEach((plan) => {\n    plan.addEventListener('click', handleClick);\n  });\n\n  plansMenuHeader.forEach((plan) => {\n    if (plan.classList.contains('selected')) {\n      const planName = plan.getAttribute('data-plano');\n      update(planName);\n    }\n  });\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/maquininhasDinamicas/updateEachPlanMenu.js?");

/***/ }),

/***/ "./src/modules/plugins/glider.js":
/*!***************************************!*\
  !*** ./src/modules/plugins/glider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initGlider)\n/* harmony export */ });\nfunction initGlider() {\n  const carousel = document.querySelector('.glider-wrapper');\n\n  new Glider(carousel, {\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    draggable: true,\n    dots: '.glider-dots',\n    scrollLock: true,\n    responsive : [\n      {\n        breakpoint: 1024,\n        settings: {\n          slidesToShow: 2,\n          slidesToScroll: 2,\n        }\n      },\n      {\n        breakpoint: 1280,\n        settings: {\n          slidesToShow: 3,\n          slidesToScroll: 3,\n        }\n      }\n    ]\n  });\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/plugins/glider.js?");

/***/ }),

/***/ "./src/modules/plugins/maskMoney.js":
/*!******************************************!*\
  !*** ./src/modules/plugins/maskMoney.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMaskMoney)\n/* harmony export */ });\nfunction initMaskMoney() {\n  const input = document.querySelector('#myInput');\n\n  // configuration\n  const args = {\n    afterFormat() {},\n    allowNegative: false,\n    beforeFormat() {},\n    negativeSignAfter: false,\n    prefix: 'R$ ',\n    suffix: '',\n    fixed: true,\n    fractionDigits: 2,\n    decimalSeparator: ',',\n    thousandsSeparator: '.',\n    cursor: 'end',\n  };\n\n  function startMaskMoney() {\n    const inputMask = SimpleMaskMoney.setMask('#myInput', args);\n    inputMask.formatToNumber();\n  }\n\n  input.addEventListener('click', startMaskMoney);\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/plugins/maskMoney.js?");

/***/ }),

/***/ "./src/modules/smoothScrollTo.js":
/*!***************************************!*\
  !*** ./src/modules/smoothScrollTo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ smoothScrollTo)\n/* harmony export */ });\n/**\n   * Smooth scroll animation\n   * @param {int} endX: destination x coordinate\n   * @param {int} endY: destination y coordinate\n   * @param {int} duration: animation duration in ms\n   */\nfunction smoothScrollTo(endX, endY, duration) {\n  const startX = window.scrollX || window.pageXOffset;\n  const startY = window.scrollY || window.pageYOffset;\n  const distanceX = endX - startX;\n  const distanceY = endY - startY;\n  const startTime = new Date().getTime();\n\n  duration = typeof duration !== 'undefined' ? duration : 400;\n\n  // Easing function\n  const easeInOutQuart = (time, from, distance, duration) => {\n    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;\n    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;\n  };\n\n  const timer = setInterval(() => {\n    const time = new Date().getTime() - startTime;\n    const newX = easeInOutQuart(time, startX, distanceX, duration);\n    const newY = easeInOutQuart(time, startY, distanceY, duration);\n    if (time >= duration) {\n      clearInterval(timer);\n    }\n    window.scroll(newX, newY);\n  }, 1000 / 60); // 60 fps\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/smoothScrollTo.js?");

/***/ }),

/***/ "./src/modules/util/clearMoneyValue.js":
/*!*********************************************!*\
  !*** ./src/modules/util/clearMoneyValue.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearMoneyValue)\n/* harmony export */ });\nfunction clearMoneyValue(value) {\n  return Number(\n    value.replace(/\\./g, '').replace(',', '.').replace('R$&nbsp;', '').replace('R$ ', ''),\n  ).toFixed(2);\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/util/clearMoneyValue.js?");

/***/ }),

/***/ "./src/modules/util/debounce.js":
/*!**************************************!*\
  !*** ./src/modules/util/debounce.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  let timer;\n  return (...args) => {\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(() => {\n      callback(...args);\n      timer = null;\n    }, delay);\n  };\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/util/debounce.js?");

/***/ }),

/***/ "./src/modules/util/format.js":
/*!************************************!*\
  !*** ./src/modules/util/format.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatPrice)\n/* harmony export */ });\nfunction formatPrice(price) {\n  return new Intl.NumberFormat('pt-br', {\n    style: 'currency',\n    currency: 'BRL',\n  }).format(price);\n}\n\n\n//# sourceURL=webpack://ton/./src/modules/util/format.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/App.js");
/******/ 	
/******/ })()
;