import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoEliminarComponent } from './botao-eliminar.component';

describe('BotaoEliminarComponent', () => {
  let component: BotaoEliminarComponent;
  let fixture: ComponentFixture<BotaoEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoEliminarComponent]
    });
    fixture = TestBed.createComponent(BotaoEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
