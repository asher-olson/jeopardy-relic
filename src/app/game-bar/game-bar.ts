import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GameBarPlayer } from './game-bar-player/game-bar-player';
import { Player } from './player.model';
import { Relic } from './relic.model';
import { Router } from '@angular/router';
import { AppService } from '../app-service';
import { RelicService } from './relic-service';

@Component({
  selector: 'app-game-bar',
  imports: [GameBarPlayer, MatButtonModule, MatIconModule],
  providers: [RelicService],
  templateUrl: './game-bar.html',
  styleUrl: './game-bar.scss',
})
export class GameBar implements OnInit {
  protected players: WritableSignal<Player[]> = signal([]);
  protected relics: WritableSignal<Relic[]> = signal([]);

  constructor(private router: Router, private appService: AppService, private relicService: RelicService) {}

  public ngOnInit() {
    this.initializePlayers();
    this.relicService.initializeRelics();
  }

  protected onRelicAdded(player: Player, relic: Relic) {
    this.players.update((value: Player[]) => {
      const match = value.find((p: Player) => p.id === player.id);
      match?.relics?.push(relic);
      return value;
    });

    this.relicService.removeRelic(relic);
  }

  protected onStopGame(): void {
    this.router.navigate(['/']);
  }

  private initializePlayers(): void {
    this.players.set(
      this.appService.players.map((name: string, index: number) => {
        return {
          id: `${index}`,
          name: name,
          relics: []
        };
      })
    );
  }
}
