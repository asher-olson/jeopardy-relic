import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GameBarPlayer } from './game-bar-player/game-bar-player';
import { Player } from './player.model';
import { Relic } from './relic.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-bar',
  imports: [GameBarPlayer, MatButtonModule, MatIconModule],
  templateUrl: './game-bar.html',
  styleUrl: './game-bar.scss',
})
export class GameBar implements OnInit {
  protected players: WritableSignal<Player[]> = signal([]);

  constructor(private router: Router) {}

  public ngOnInit() {
    this.setPlayers();
  }

  protected onRelicAdded(player: Player, relic: Relic) {
    this.players.update((value: Player[]) => {
      const match = value.find((p: Player) => p.id === player.id);
      match?.relics?.push(relic);
      return value;
    })
  }

  protected onStopGame(): void {
    this.router.navigate(['/']);
  }

  private setPlayers(): void {
    const relics1: Relic[] = [
      {
        name: 'The Fucker',
        description: 'Go Big Mode',
        imageUrl: '/fucker.png'
      },
      {
        name: 'BAIL ME OUT',
        description: 'Go Poggers Mode',
        imageUrl: '/bail-me-out.png'
      }
    ];

    const relics2: Relic[] = [
      {
        name: 'emoji_110',
        description: 'Go emoji mode and something long like this maybe',
        imageUrl: '/emoji-110.png'
      }
    ];

    this.players.set([
      {
      id: '1',
      name: 'Asher',
      relics: [...relics1]
      },
      {
      id: '2',
      name: 'The Brinkler',
      relics: [...relics2]
      },
      {
      id: '3',
      name: 'Smamuel',
      relics: [...relics1]
      },
      {
      id: '4',
      name: 'Lou',
      relics: [...relics1]
      },
      {
      id: '5',
      name: 'Gooper',
      relics: [...relics2]
      },
      {
      id: '6',
      name: 'Bajauceler',
      relics: [...relics1]
      }
    ])
  }
}
