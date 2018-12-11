import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  //constructor(){}
  constructor(http:Http) { 
    http.get('http://localhost:8080/floradevice/de')
    .subscribe(response => {
      console.log("=============================================");
      
      console.log(response.json());
    });
  }

  ngOnInit() {
  }

}
