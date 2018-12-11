
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ChartComponent } from './full/chart/chart.component';
import { FullComponent } from './full/full.component';
import { WidgetComponent } from './full/widget/widget.component';
import { DataValuesComponent } from './full/widget/data-values/data-values.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WaterLevelComponent } from './full/widget/water-level/water-level.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    FullComponent,
    WidgetComponent,
    DataValuesComponent,
    NavBarComponent,
    WaterLevelComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
