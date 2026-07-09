import { Component, Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-loading-state',
  imports: [],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <div
      class="loading"
      data-testid="loading"
      [hidden]="!isVisible"
    >
      <div class="loading__spinner"></div>
      <p>Loading weather data...</p>
    </div>
  `
})
export class LoadingStateComponent {
  @Input() isVisible = false;
}
