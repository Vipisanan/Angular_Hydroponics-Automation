import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Mqttflora } from 'src/app/models/mqttflora';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {


  mqT:Mqttflora[];
  constructor(private restService:RestService) { 

  }

  ngOnInit() {
    this.restService.getData()
    .subscribe(mqqtdata=>{
      this.mqT=mqqtdata;

      console.log(mqqtdata);
    })
  }

}
