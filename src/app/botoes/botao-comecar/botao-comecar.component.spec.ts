import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoComecarComponent } from './botao-comecar.component';

describe('BotaoComecarComponent', () => {
  let component: BotaoComecarComponent;
  let fixture: ComponentFixture<BotaoComecarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoComecarComponent]
    });
    fixture = TestBed.createComponent(BotaoComecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
