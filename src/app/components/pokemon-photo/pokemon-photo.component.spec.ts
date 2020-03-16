import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPhotoComponent } from './pokemon-photo.component';

describe('PokemonPhotoComponent', () => {
  let component: PokemonPhotoComponent;
  let fixture: ComponentFixture<PokemonPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
