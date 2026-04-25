import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBarPlayer } from './game-bar-player';

describe('GameBarPlayer', () => {
  let component: GameBarPlayer;
  let fixture: ComponentFixture<GameBarPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBarPlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameBarPlayer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
