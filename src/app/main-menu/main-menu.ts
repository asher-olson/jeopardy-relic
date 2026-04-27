import { Component, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AddPlayers } from '../add-players/add-players';
import { AppService } from '../app-service';

@Component({
  selector: 'app-main-menu',
  imports: [AddPlayers, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.scss',
})
export class MainMenu {
  protected isAddingPlayers: WritableSignal<boolean> = signal(false);
  protected playerNames: WritableSignal<string[]> = signal([]);

  constructor(private router: Router, private appService: AppService) {}

  protected startGame(): void {
    this.appService.players = this.playerNames();
    this.router.navigate(['/game']);
  }

  protected goToAddPlayers(): void {
    this.isAddingPlayers.set(true);
  }

  protected cancelAddPlayers(): void {
    console.log("canceling");
    this.isAddingPlayers.set(false);
  }

  protected onPlayerAdd(playerName: string): void {
    this.playerNames.update((value: string[]) => {
      const newValue: string[] = [...value, playerName];
      return newValue;
    });
  }

  protected onPlayerRemove(playerName: string): void {
    this.playerNames.update((value: string[]) => {
      const newValue: string[] = value.filter((name: string) => name !== playerName);
      return newValue;
    });
  }
}
