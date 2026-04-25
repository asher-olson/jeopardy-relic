import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseRelic } from './choose-relic';

describe('ChooseRelic', () => {
  let component: ChooseRelic;
  let fixture: ComponentFixture<ChooseRelic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseRelic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseRelic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
