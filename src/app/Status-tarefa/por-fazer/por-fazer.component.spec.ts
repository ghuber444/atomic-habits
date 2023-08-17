import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorFazerComponent } from './por-fazer.component';

describe('PorFazerComponent', () => {
  let component: PorFazerComponent;
  let fixture: ComponentFixture<PorFazerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorFazerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorFazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
