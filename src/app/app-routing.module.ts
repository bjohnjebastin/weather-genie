import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from 'src/weather/components/forecast/forecast.component';
import { PlaceComponent } from 'src/weather/components/place/place.component';
import { WeatherComponent } from 'src/weather/containers/weather.component';
import { CoordinatesResolver } from 'src/weather/resolvers/coordinates.resolver';

const routes: Routes = [
  {
    path: '',
    component: WeatherComponent
  },
  {
    path: 'place',
    component: PlaceComponent
  },
  {
    path: 'forecast/:id',
    component: ForecastComponent,
    resolve: { coordinates: CoordinatesResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
