import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayers } from './add-players';

describe('AddPlayers', () => {
  let component: AddPlayers;
  let fixture: ComponentFixture<AddPlayers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlayers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlayers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
