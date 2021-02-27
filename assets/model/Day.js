'use strict';
export default class Day{
    constructor(date){
        this._date = date;
        this._isCurrent = Day.isCurrent;
    } 
    get date(){
        return this._date;  
    }
    get isCurrent(){
        return this._isCurrent;
    }
    get date (newDate){
        this._date = newDate;
        this._isCurrent=Day.isCurrent(newDate);
    }
    get isCurrentDay(date){
        return date.toDateString() == Day.currentDate.toDateString();
    }
    static currentDate = new Date();
}