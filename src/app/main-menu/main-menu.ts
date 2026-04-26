import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-menu',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.scss',
})
export class MainMenu {
  constructor(private router: Router) {}

  protected startGame(): void {
    this.router.navigate(['/game']);
  }
}
