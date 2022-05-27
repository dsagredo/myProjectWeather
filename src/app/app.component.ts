import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '@shared/interfaces/weather.interface';
import { WeatherService } from './services/weather.service';
import { GeoLocationService } from './services/geo-location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  weather$!: Observable<WeatherData>;

  constructor(
    readonly weatherSvc: WeatherService,
    readonly getLocaltionSvc: GeoLocationService
  ) {
    if (navigator?.geolocation) {
      this.getLocation();
    }
  }

  onSearch(city: string): void {
    this.weather$ = this.weatherSvc.getWeatherByName(city);
  }

  async getLocation(): Promise<any> {
    try {
      const { coords } = await this.getLocaltionSvc.getCurrentPosition();
      this.weather$ = this.weatherSvc.getWeatherByCoords(coords);
    } catch (err) {
      console.log('error', err);
    }
  }
}
