import { Component, input, Signal } from '@angular/core';
import { Relic } from '../game-bar/relic.model';

@Component({
  selector: 'app-relic-component',
  imports: [],
  templateUrl: './relic-component.html',
  styleUrl: './relic-component.scss',
})
export class RelicComponent {
  public relic = input.required<Relic>();
  public isChooseDialog = input<boolean>(false);
}
