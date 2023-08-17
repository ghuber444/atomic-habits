import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButaoNovaTarefaComponent } from './butao-nova-tarefa.component';

describe('ButaoNovaTarefaComponent', () => {
  let component: ButaoNovaTarefaComponent;
  let fixture: ComponentFixture<ButaoNovaTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButaoNovaTarefaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButaoNovaTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
