import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { WeatherData } from '../types/weather.types';
import { CurrentWeatherComponent } from './current-weather.component';
import { ForecastComponent } from './forecast.component';

@Component({
  selector: 'app-weather-content',
  imports: [CurrentWeatherComponent, ForecastComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <div
      class="weather-content"
      data-testid="weather-content"
      [hidden]="!isVisible"
    >
      <div class="weather-layout">
        <app-current-weather [weatherData]="weatherData"></app-current-weather>
        <app-forecast [weatherData]="weatherData"></app-forecast>
      </div>
    </div>
  `
})
export class WeatherContentComponent {
  @Input() isVisible = false;
  @Input() weatherData: WeatherData | null = null;
}
