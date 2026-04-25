import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { Relic } from '../relic.model';
import { RelicComponent } from '../../relic-component/relic-component';

@Component({
  selector: 'app-choose-relic',
  imports: [
    MatDialogContent,
    RelicComponent
  ],
  templateUrl: './choose-relic-dialog.html',
  styleUrl: './choose-relic-dialog.scss',
})
export class ChooseRelicDialog implements OnInit{
  public readonly data = inject(MAT_DIALOG_DATA);
  protected choices: WritableSignal<Relic[]> = signal([]);
  protected playerName: WritableSignal<string> = signal('Goopler');

  constructor(protected dialogRef: MatDialogRef<ChooseRelicDialog>) {}

  public ngOnInit(): void {
    this.choices.set(this.data.choices);
    this.playerName.set(this.data.playerName);
  }

  protected onClose(): void {
    this.dialogRef.close();
  }

  protected onClick(choice: Relic): void {
    console.log("on click", choice);
    this.dialogRef.close(choice);
  }
}
