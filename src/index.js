'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePhoto from './modules/changePhoto';
import insertOnlyNumbers from './modules/insertOnlyNumbers';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import validationInputs from './modules/validationInputs';

//Timer
countTimer('20 july 2019');

//menu
toggleMenu();

//popup
togglePopUp();

//табы
tabs();

//cлайдер
slider();

//Наша Команда
changePhoto();

//калькулятор
insertOnlyNumbers();  
calc(100);

//send-ajax-form
sendForm();

//validation inputs
validationInputs();