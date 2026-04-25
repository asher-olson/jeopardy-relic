import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameBar } from './game-bar/game-bar';

@Component({
  selector: 'app-root',
  imports: [GameBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('jeopardy-relic');
}
