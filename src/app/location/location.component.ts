import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locationId: any;
  currentConditions: any;
  dailyForecast: any;
  hourlyForecast: any;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.locationId = params.get('id')!;
      this.getLocationWeather();
    });
  }

  getLocationWeather() {
    this.weatherService.getCurrentConditions(this.locationId).subscribe(data => {
      this.currentConditions = data[0];
    });
    this.weatherService.getFiveDayForecast(this.locationId).subscribe(data => {
      this.dailyForecast = data.DailyForecasts;
    });
    this.weatherService.getHourlyForecast(this.locationId).subscribe(data => {
      this.hourlyForecast = data;
    });
  }
}
