import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmProgressoComponent } from './em-progresso.component';

describe('EmProgressoComponent', () => {
  let component: EmProgressoComponent;
  let fixture: ComponentFixture<EmProgressoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmProgressoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmProgressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
