'use strict';
function createMonthWeekElem(week){
    const tableRowElem = document.createElement('tr');
    week.days.forEach(day=>{
        tableRowElem.appendChild(createWeekDay(day));
    });
    return tableRowElem;
}

function createWeekDay(day){
    const tableDateElem = document.createElement('td');
    tableDateElem.innerText = day.date.toLocaleString('ru-RU',{day: "2 -digit"});
    return tableDateElem;
}
export default function (month){
    const tableBodyElem=document.createElement('tbody');
    month.weeks.forEach(
        week=>{
            tableBodyElem.appendChild(createMonthWeekElem(week));
        }
    );
    return tableBodyElem
}