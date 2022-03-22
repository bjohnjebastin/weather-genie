import { formatDate } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { List } from 'src/weather/models/forecast.model';
import { WeatherService } from 'src/weather/services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: 'forecast.component.html',
  styleUrls: ['forecast.component.scss']
})
export class ForecastComponent implements OnInit, OnDestroy {

  public filteredList: List[] = [];
  public dayOne: List[] = [];
  public dayTwo: List[] = [];
  public dayThree: List[] = [];
  public dayFour: List[] = [];
  public dayFive: List[] = [];
  public sub!: Subscription;

  constructor(private readonly weatherService: WeatherService,
    private readonly route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    const coordinates = this.route.snapshot.data['coordinates'];
    console.log('COORDINATES', coordinates[0].lat);
    this.sub = this.weatherService.getWeatherForecastForPlace(coordinates[0].lat, coordinates[0].lon).subscribe(forecast => {
      const uniqueDates = [...new Set(forecast.list.map(x => formatDate(x.dt_txt, 'dd-MM-YYYY', 'en-GB')))];
      let count = 1;
      uniqueDates.forEach(date => {
        const filteredList = forecast.list.filter(x => formatDate(x.dt_txt, 'dd-MM-YYYY', 'en-GB') === date);
        switch(count) {
          case 1:
            this.dayOne = filteredList;
            break;
          case 2:
            this.dayTwo = filteredList;
            break;
          case 3:
            this.dayThree = filteredList;
            break;
          case 4:
            this.dayFour = filteredList;
            break;
          case 5:
            this.dayFive = filteredList;
            break;
        }
        count++;
      });
    });
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
