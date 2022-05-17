import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DrawNumbersService } from '../services/draw-numbers.service';
import { MaterialsModule } from '../materials/materials/materials.module';
import { MatPaginator } from '@angular/material/paginator';
import { Time } from '@angular/common';

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
      console.log(this.historyArray);
      console.log(this.historyArray.length)
}

  isEmpty(){
    this.historyArray==null && this.historyArray.length==0 ? this.showBoolean = true : this.showBoolean = false;
  }
}