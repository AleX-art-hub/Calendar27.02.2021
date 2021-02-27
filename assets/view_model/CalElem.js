'use strict';
import CalHeaderElem from './CalHeaderElem.js';
import CalBodyElem from './CalBodyElem.js';

export default function (month){
    const calTableElem=document.createElement('table');
    calTableElem.appendChild(CalHeaderElem(month));
    calTableElem.appendChild(CalBodyElem(month));
    return calTableElem;
}