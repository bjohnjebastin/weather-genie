import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "src/app/app-routing.module";
import { ForecastDailyComponent } from "./components/forecast-daily/forecast-daily.component";
import { ForecastComponent } from "./components/forecast/forecast.component";
import { PlaceComponent } from "./components/place/place.component";
import { WeatherComponent } from "./containers/weather.component";

@NgModule({
  declarations: [
    WeatherComponent,
    PlaceComponent,
    ForecastComponent,
    ForecastDailyComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule { }
