import { Component, OnInit, Input } from '@angular/core';

const prop ={
  ph:{
    name:"Moisture",
    icon:"../assets/icon-img/humidity.png"
  },
  temp:{
    name:"Temperature",
    icon:"../assets/icon-img/temp.png"
  },
  waterLevel:{
    name:"WaterLevel",
    icon:"../assets/icon-img/water.png"
  },
  Humidity:{
    name:"Humidity",
    icon:"../assets/icon-img/humidity.png"
  },
  ec:{
    name:"Electrical Conductivity",
    icon:"../assets/icon-img/ec.png"
  },
  lux:{
    name:"Lux",
    icon:"../assets/icon-img/lux.png"
  }

}

@Component({
  selector: 'data-values',
  templateUrl: './data-values.component.html',
  styleUrls: ['./data-values.component.css']
})

export class DataValuesComponent implements OnInit {

  public type;
  @Input() typeName: string;
  @Input() valuePass: any;

  constructor() { }

  ngOnInit() {
    if(this.typeName === 'ph'){
      this.type = prop.ph;
    }else if (this.typeName === 'ec'){
      this.type = prop.ec;
    }else if (this.typeName === 'Humidity'){
      this.type = prop.Humidity;
    }else if (this.typeName === 'lux'){
      this.type = prop.lux;
    }else if (this.typeName === 'temp'){
      this.type = prop.temp;
    }else if (this.typeName === 'waterLevel'){
      this.type = prop.waterLevel;
    }
  }

}
