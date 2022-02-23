import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedInfoProductPageComponent } from './detailed-info-product-page.component';

describe('DetailedInfoProductPageComponent', () => {
  let component: DetailedInfoProductPageComponent;
  let fixture: ComponentFixture<DetailedInfoProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedInfoProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedInfoProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
