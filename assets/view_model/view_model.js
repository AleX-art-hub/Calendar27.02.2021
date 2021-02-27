'use strict';
import model from '../model/model.js';
import CalElem from './CalElem.js';
document.body.appendChild(CalElem(new model.Month(new Date())));