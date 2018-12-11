import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { 
    
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    var chart = c3.generate({
    data: {
        columns: [
            ['data1', 300, 350, 300, 0, 0, 0],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
            data1: 'area',
            data2: 'area-spline'
        }
    }
});
    
}
}
