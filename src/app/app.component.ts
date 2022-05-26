import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '@shared/interfaces/weather.interface';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  weather$!: Observable<WeatherData>;

  constructor(readonly weatherSvc: WeatherService) {}

  onSearch(city: string): void {
    this.weather$ = this.weatherSvc.getWeatherByName(city);
  }
}
