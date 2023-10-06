import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardWordleComponent } from './hard-wordle.component';

describe('HardWordleComponent', () => {
  let component: HardWordleComponent;
  let fixture: ComponentFixture<HardWordleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HardWordleComponent]
    });
    fixture = TestBed.createComponent(HardWordleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
