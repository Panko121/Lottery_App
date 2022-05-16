import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
//import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DrawNumbersService {
  drawHistoryArray:any = [];
  //numbersArray:number[] = [];
  importedNumbers:string[] = [];

  constructor() {}
/*
  drawNumbers(){
    let numbersArray:number[] = [];
    while(numbersArray.length < 5){
      this.number = Math.floor(Math.random() * (50 + 1));
      if(!numbersArray.includes(this.number)){
        numbersArray.push(this.number)
      }
    }
    //console.log(numbersArray)
    return numbersArray.join(",");
  }*/

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
    let historyObject ={
      numbers: this.importedNumbers[this.importedNumbers.length-1],
      time: this.getTime(),
      date: this.getDate(),
    }
    this.drawHistoryArray.push(historyObject);
    console.log('drawHistory');
    console.log(this.drawHistoryArray);
    return of(this.drawHistoryArray);
  }



}
