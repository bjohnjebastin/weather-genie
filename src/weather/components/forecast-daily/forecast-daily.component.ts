import { Component, Input } from '@angular/core';
import { List } from 'src/weather/models/forecast.model';

@Component({
  selector: 'app-forecast-daily',
  templateUrl: 'forecast-daily.component.html',
  styleUrls: ['forecast-daily.component.scss']
})
export class ForecastDailyComponent {
  @Input()
  day: List[] = [];
}