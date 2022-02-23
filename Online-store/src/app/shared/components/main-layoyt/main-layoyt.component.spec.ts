import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoytComponent } from './main-layoyt.component';

describe('MainLayoytComponent', () => {
  let component: MainLayoytComponent;
  let fixture: ComponentFixture<MainLayoytComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLayoytComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
