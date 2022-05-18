import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DrawNumbersService } from '../services/draw-numbers.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Time } from '@angular/common';

export interface DrawData {
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
  historyArray: any;
  dataSource: MatTableDataSource<DrawData>;

  constructor(private history: DrawNumbersService) {
   this.dataSource = new MatTableDataSource(this.history.showNOH());
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
      this.history.showHistory().subscribe( histRec => this.historyArray = histRec);
}
  ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

}

