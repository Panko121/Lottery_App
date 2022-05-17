import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
//import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DrawNumbersService {
  drawHistoryArray: any = [];
  importedNumbers: string[] = [];

  historyObject: any;

  constructor() {}

  getDate(){
    return new Date().toLocaleDateString("pl", {
      year: "numeric",
      month: "numeric",
      day: "numeric"
  })
  }

  getTime(){
    return new Date().toLocaleTimeString("pl", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
  })
  }

  makeHistory(){
    this.historyObject ={
      numbers: this.importedNumbers[this.importedNumbers.length-1],
      time: this.getTime(),
      date: this.getDate(),
    }
    this.drawHistoryArray.push(this.historyObject);
    console.log('drawHistory');
    console.log(this.drawHistoryArray);
    return this.drawHistoryArray;
  }

  showHistory(){
    return of(this.drawHistoryArray);
  }

}
