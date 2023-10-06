import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSystemComponent } from './user-system.component';

describe('UserSystemComponent', () => {
  let component: UserSystemComponent;
  let fixture: ComponentFixture<UserSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSystemComponent]
    });
    fixture = TestBed.createComponent(UserSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
