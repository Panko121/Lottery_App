import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DrawNumbersService } from '../services/draw-numbers.service';


@Component({
  selector: 'app-draw-history',
  templateUrl: './draw-history.component.html',
  styleUrls: ['./draw-history.component.scss']
})
export class DrawHistoryComponent implements OnInit {
  showBoolean: boolean = true;
  displayedColumns: string[] = ["lotteryNumbers","date","time"];
  historyArray: any;

  constructor(private history: DrawNumbersService) { }


  ngOnInit(): void {
      this.history.showHistory().subscribe( histRec => this.historyArray = histRec );
}

}
