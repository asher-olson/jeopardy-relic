import { Injectable } from '@angular/core';

export enum AppState {
  GameBar,
  Menu,
  RelicLibrary
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public state: AppState = AppState.Menu
}
