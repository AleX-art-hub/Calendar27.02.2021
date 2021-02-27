'use strict';
import Week from '../model/Week.js';
export default function(month){
    const tableHeaderElem = document.createElem('thead');
    const tableRow = document.createElement('tr');
    const tableH = document.createElement('th');
    tableH.setAttribute('colspan', 7);
    tableH.classList.add('calMonthName');
    tableH.innerText = `${month.date.toLocaleString('ru-RU',{
        month:'long',
    })} ${month.date.getFullYear()}`;
    tableRow.appendChild(tableH);
    tableHeaderElem.appendChild(tableRow);

    const tableR = document.createElement('tr');
    tableR.classList.add('calWeekDays');
    month.week[0].days.forEach(
        day=> {
            const tableHeader=document.createElement('th');
            tableHeader.innerText = `${day.date.toLocaleString('ru-RU', {wekday: "short",})}`;
            tableR.appendChild(tableHeader);
        });
        tableHeaderElem.appendChild(tableR);
        return tableHeaderElem;
}
