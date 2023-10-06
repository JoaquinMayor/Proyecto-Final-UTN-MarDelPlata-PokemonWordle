import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniquePokemonComponent } from './unique-pokemon.component';

describe('UniquePokemonComponent', () => {
  let component: UniquePokemonComponent;
  let fixture: ComponentFixture<UniquePokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniquePokemonComponent]
    });
    fixture = TestBed.createComponent(UniquePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
