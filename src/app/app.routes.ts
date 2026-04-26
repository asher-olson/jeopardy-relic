import { Routes } from '@angular/router';
import { GameBar } from './game-bar/game-bar';
import { MainMenu } from './main-menu/main-menu';

export const routes: Routes = [
  { path: '', component: MainMenu },
  { path: 'game', component: GameBar },
  { path: '**', redirectTo: '' }
];
