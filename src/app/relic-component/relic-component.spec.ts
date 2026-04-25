import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelicComponent } from './relic-component';

describe('RelicComponent', () => {
  let component: RelicComponent;
  let fixture: ComponentFixture<RelicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelicComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
