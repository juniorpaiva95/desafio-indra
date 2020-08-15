import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDefailtComponent } from './poke-defailt.component';

describe('PokeDefailtComponent', () => {
  let component: PokeDefailtComponent;
  let fixture: ComponentFixture<PokeDefailtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeDefailtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeDefailtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
