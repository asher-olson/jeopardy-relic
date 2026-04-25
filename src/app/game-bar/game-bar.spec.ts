import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBar } from './game-bar';

describe('GameBar', () => {
  let component: GameBar;
  let fixture: ComponentFixture<GameBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
