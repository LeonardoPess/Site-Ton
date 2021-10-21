import initMaskMoney from './modules/plugins/maskMoney.js';
import initGlider from './modules/plugins/glider.js';

import initUpdateOptionsFromDebito from './modules/calculadora/updateOptionsFromDebito.js';
import initCalculateTaxa from './modules/calculadora/calculateTaxa.js';
import initCalculateTarifa from './modules/calculadora/calculateTarifa.js';
import initCalculateResult from './modules/calculadora/calculateResult.js';
import initCalculateEconomia from './modules/calculadora/calculateEconomia.js';
import initUpdateEachPlanMenu from './modules/maquininhasDinamicas/updateEachPlanMenu.js';
import initCalculateTaxaDynamically from './modules/maquininhasDinamicas/calculateTaxaDynamically.js';
import initUpdateDynamically from './modules/maquininhasDinamicas/updateDynamically.js';

import Menu from './modules/Menu.js';
import Accordion from './modules/Accordion.js';
import ToggleSelected from './modules/ToggleSelected.js';
import SmoothScroll from './modules/SmoothScroll.js';
import AnimationByOffsetTop from './modules/AnimationByOffsetTop.js';

initGlider();
initMaskMoney();

initUpdateOptionsFromDebito();
initCalculateTaxa();
initCalculateTarifa();
initCalculateResult();
initCalculateEconomia();
initUpdateEachPlanMenu();
initCalculateTaxaDynamically();
initUpdateDynamically();

const accordion = new Accordion('[data-anime="according"] dt');
accordion.init();

const menu = new Menu('.menu-btn', 'nav.mobile ul', 'show');
menu.init();

const smoothScroll = new SmoothScroll('a[href^="#"]');
smoothScroll.init();

const toggleSelected = new ToggleSelected('.tipo-venda span');
toggleSelected.init();

const animationByOffsetTop = new AnimationByOffsetTop('[data-anime="scroll"]');
animationByOffsetTop.init();
