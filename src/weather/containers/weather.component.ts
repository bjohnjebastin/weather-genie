import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: 'weather.component.html',
  styleUrls: ['weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {

  constructor(private weatherService: WeatherService) {
  }

  public ngOnInit(): void {
    this.weatherService.getWeatherForecastForPlace(51.5156177, -0.0919983).subscribe(forecast => {
      console.log('FORECAST', forecast);
    });
  }

  public ngOnDestroy(): void {

  }
}