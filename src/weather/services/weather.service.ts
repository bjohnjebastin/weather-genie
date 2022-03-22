import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Forecast } from "../models/forecast.model";
import { Place } from "../models/place.model";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

  private appId = 'fe3695759da76e0c9dcaf566634a08ed';
  private apiCoordinates = 'https://api.openweathermap.org/geo/1.0/direct';
  private apiCurrentWeatherForecast = 'https://api.openweathermap.org/data/2.5/weather';
  private apiForecast = 'https://api.openweathermap.org/data/2.5/forecast';

  // https://api.openweathermap.org/geo/1.0/direct?q=City of London&limit=5&appid=fe3695759da76e0c9dcaf566634a08ed
  // https://api.openweathermap.org/data/2.5/forecast?lat=51.5156177&lon=-0.0919983&appid=fe3695759da76e0c9dcaf566634a08ed
  // https://api.openweathermap.org/data/2.5/weather?lat=51.5156177&lon=-0.0919983&appid=fe3695759da76e0c9dcaf566634a08ed

  constructor(private readonly http: HttpClient) {
  }

  public getPlaceCoordinates(place: string): Observable<Place[]> {
    return this.http.get<Place[]>(`${this.apiCoordinates}?q=${place}&limit=5&appid=${this.appId}`);
  }

  public getCurrentWeatherForecast(lat: number, lon: number): Observable<Forecast> {
    return this.http.get<Forecast>(`${this.apiCurrentWeatherForecast}?lat=${lat}&lon=${lon}&appid=${this.appId}`);
  }

  public getWeatherForecastForPlace(lat: number, lon: number): Observable<Forecast> {
    return this.http.get<Forecast>(`${this.apiForecast}?lat=${lat}&lon=${lon}&appid=${this.appId}`);
  }
}
