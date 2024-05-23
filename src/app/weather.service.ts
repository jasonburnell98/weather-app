import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_KEY = 'rH4y5j0LMn7vOvMacDPjqSCb8o6N8hr4';
const BASE_URL = 'http://dataservice.accuweather.com/';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getCurrentConditions(locationKey: string): Observable<any> {
    return this.http.get(`${BASE_URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}`);
  }

  getFiveDayForecast(locationKey: string): Observable<any> {
    return this.http.get(`${BASE_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`);
  }

  getLocationKey(city: string): Observable<any> {
    return this.http.get(`${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`);
  }

  getHourlyForecast(locationKey: string): Observable<any> {
    return this.http.get(`${BASE_URL}/forecasts/v1/hourly/12hour/${locationKey}?apikey=${API_KEY}`);
  }
}
