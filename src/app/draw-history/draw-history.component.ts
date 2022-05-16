import { Component, OnInit } from '@angular/core';
import { DrawNumbersService } from '../services/draw-numbers.service';

@Component({
  selector: 'app-draw-history',
  templateUrl: './draw-history.component.html',
  styleUrls: ['./draw-history.component.scss']
})
export class DrawHistoryComponent implements OnInit {
  showBoolean: boolean = true;

  constructor(private history: DrawNumbersService) { }

  historyArray:any = this.history.drawHistoryArray;

  ngOnInit(): void {
  }

}
