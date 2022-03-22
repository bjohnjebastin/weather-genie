import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Place } from "../models/place.model";
import { WeatherService } from "../services/weather.service";

@Injectable({
  providedIn: 'root'
})
export class CoordinatesResolver implements Resolve<any> {
  constructor(private readonly weatherService: WeatherService) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Place[]> {
    const placeName = route.params['id'] || '';
    return this.weatherService.getPlaceCoordinates(placeName);
  }
}
