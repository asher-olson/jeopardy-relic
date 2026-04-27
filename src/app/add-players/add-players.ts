import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-players',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-players.html',
  styleUrl: './add-players.scss',
})
export class AddPlayers {
  public playerNames = input.required<string[]>();
  public onPlayerAdd = output<string>();
  public onPlayerRemove = output<string>();

  protected newPlayerName = '';

  protected onAdd(): void {
    console.log(this.playerNames());
    if (this.newPlayerName.trim()) {
      this.onPlayerAdd.emit(this.newPlayerName.trim());
      this.newPlayerName = '';
    }
  }

  protected removePlayer(player: string): void {
    this.onPlayerRemove.emit(player);
  }
}
