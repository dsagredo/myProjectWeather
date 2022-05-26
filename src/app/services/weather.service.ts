import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coord, WeatherData } from '@app/shared/interfaces/weather.interface';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  API_URL = environment.openWeather.url;

  constructor(readonly http: HttpClient) {}

  getWeatherByName(city: string): Observable<WeatherData> {
    const params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('appid', environment.openWeather.key);
    return this.http.get<WeatherData>(`${this.API_URL}/weather`, {
      params,
    });
  }

  getWeatherByCoords(coord: Coord): Observable<WeatherData> {
    const params = new HttpParams()
      .set('lat', coord.lat)
      .set('lon', coord.lon)
      .set('appid', environment.openWeather.key);
    return this.http.get<WeatherData>(`${this.API_URL}/weather`, {
      params,
    });
  }
}
