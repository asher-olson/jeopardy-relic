import { Component, input, model, output } from '@angular/core';
import { Player } from '../player.model';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ChooseRelicDialog } from '../choose-relic/choose-relic-dialog';
import { RelicComponent } from '../../relic-component/relic-component';
import { Relic } from '../relic.model';

@Component({
  selector: 'app-game-bar-player',
  imports: [RelicComponent],
  templateUrl: './game-bar-player.html',
  styleUrl: './game-bar-player.scss',
  providers: [MatDialog]
})
export class GameBarPlayer {
  public player = model.required<Player>();

  public relicAdded = output<Relic>();

  constructor(public dialog: MatDialog) {}

  protected chooseRelic(): void {
    console.log("choosing relic");
    const relics: Relic[] = [
      {
        name: 'The Fucker',
        description: 'Go Big Mode',
        imageUrl: '/fucker.png'
      },
      {
        name: 'BAIL ME OUT',
        description: 'Go Poggers Mode',
        imageUrl: '/bail-me-out.png'
      },
      {
        name: 'emoji_110',
        description: 'Go emoji mode and something long like this maybe',
        imageUrl: '/emoji-110.png'
      }
    ];
    
    const dialogRef = this.dialog.open(ChooseRelicDialog, {
      data: { choices: relics, playerName: this.player().name }
    });

    dialogRef.afterClosed().subscribe((result: Relic) => {
      console.log(result);
      console.log('The dialog was closed');
      if (!!result) {
        this.relicAdded.emit(result);
        // this.player.update((value: Player) => {
        //   value.relics?.push(result);
        //   return value;
        // })
      }
    });
  }
}
