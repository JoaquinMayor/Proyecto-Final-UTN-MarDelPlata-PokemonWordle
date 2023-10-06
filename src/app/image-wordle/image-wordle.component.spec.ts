import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWordleComponent } from './image-wordle.component';

describe('ImageWordleComponent', () => {
  let component: ImageWordleComponent;
  let fixture: ComponentFixture<ImageWordleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageWordleComponent]
    });
    fixture = TestBed.createComponent(ImageWordleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
