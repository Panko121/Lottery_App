import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DrawNumbersService } from '../services/draw-numbers.service';
import { MaterialsModule } from '../materials/materials/materials.module';
import { MatPaginator } from '@angular/material/paginator';
import { Time } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';

export interface TableElement {
  numbers: string;
  date: Date;
  time: Time;
}

@Component({
  selector: 'app-draw-history',
  templateUrl: './draw-history.component.html',
  styleUrls: ['./draw-history.component.scss']
})
export class DrawHistoryComponent implements OnInit {
  showBoolean: boolean = true;
  displayedColumns: string[] = ["lotteryNumbers","date","time"];

  constructor(private history: DrawNumbersService) { }

  //historyArray:any = this.history.drawHistoryArray;
  historyArray: any;
  
  ngOnInit(): void {
      this.history.showHistory().subscribe( histRec => this.historyArray = histRec );
}
}