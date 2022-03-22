import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { WeatherService } from "src/weather/services/weather.service";
import { ForecastComponent } from "./forecast.component";

describe('ForecaseComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;
  let mockActivatedRoute: any;
  let mockWeatherService = jasmine.createSpyObj('WeatherService', ['getWeatherForecastForPlace']);

  mockActivatedRoute = {
    snapshot: {
      data: {
        coordinates: [{
          lat: 51.5156177,
          lon: -0.0919983
        }]
      }
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ForecastComponent
      ],
      imports: [
        RouterTestingModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: WeatherService, useValue: mockWeatherService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // router = TestBed.get(Router);
    // route = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    mockWeatherService.getWeatherForecastForPlace.and.returnValue(of({}));
    expect(component).toBeTruthy();
  });
});
