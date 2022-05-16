import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DrawNumbersService } from '../services/draw-numbers.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  isClicked = false;
  numbersArray: string[] = [];
  arrayHistory: any = [];
  currentData: any;
  currentNumbers: any;
  dod:any = [];
  constructor(private lotsNumbers: DrawNumbersService) {
  }

  ngOnInit(): void {
  }

  drawNumbers(){
    let number: number;
    let numbersArray:number[] = [];
    while(numbersArray.length < 5){
      number = Math.floor(Math.random() * (50 + 1));
      if(!numbersArray.includes(number)){
        numbersArray.push(number);
      }
    }
    return numbersArray.join(" ")
    //return numbersArray
  }



  playButton(){
    this.lotsNumbers.importedNumbers.push(this.drawNumbers());
    this.lotsNumbers.makeHistory();
    //
    this.numbersArray = this.lotsNumbers.importedNumbers;
    this.currentNumbers = this.numbersArray[this.numbersArray.length-1];
    
    // Checks
    console.log('importedNumbers')
    console.log(this.lotsNumbers.importedNumbers)
  }


}
