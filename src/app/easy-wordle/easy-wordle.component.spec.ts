import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyWordleComponent } from './easy-wordle.component';

describe('EasyWordleComponent', () => {
  let component: EasyWordleComponent;
  let fixture: ComponentFixture<EasyWordleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EasyWordleComponent]
    });
    fixture = TestBed.createComponent(EasyWordleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
