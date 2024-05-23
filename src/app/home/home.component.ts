import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('1s ease-in')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  currentConditions: any;
  fiveDayForecast: any;
  favorites: any[] = [];
  searchResult: any;
  searchValue:any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getPhiladelphiaWeather();
  }

  getPhiladelphiaWeather() {
    const locationKey = '349727'; // Location Key for Philadelphia, PA
    this.weatherService.getCurrentConditions(locationKey).subscribe(data => {
      this.currentConditions = data[0];
    });
    this.weatherService.getFiveDayForecast(locationKey).subscribe(data => {
      this.fiveDayForecast = data.DailyForecasts;
    });
  }

  searchCity(city: string) {
    this.weatherService.getLocationKey(city).subscribe(data => {
      this.searchResult = data[0];
    });
  }

  addToFavorites(city: any) {
    this.favorites.push(city);
  }
}
