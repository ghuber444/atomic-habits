import { Component, Input, Inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Status } from '../tarefas';
import { FormBuilder, FormsModule } from '@angular/forms';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Dialog } from '@angular/cdk/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-edicao',
  templateUrl: './modal-edicao.component.html',
  styleUrls: ['./modal-edicao.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ModalEdicaoComponent {
  constructor(
    private tarefaService: TarefaService,
    private dialog: Dialog,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<ModalEdicaoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder
  ) {}

  @Input() id = 0;

  minDate = new Date();

  myFormControl = '';
  value = '';


  tarefaForm = this.formBuilder.group({
    id: 0,
    nome: '',
    prioridade: this.myFormControl,
    descricao: '',
    prazo: '',
    status: Status.PorFazer,
  })


  tarefa: any = {
    id: 0,
    nome: '',
    prioridade: this.myFormControl,
    descricao: '',
    prazo: '',
    status: Status.PorFazer,
  };

  ngOnInit(): void {
    this.tarefaForm.patchValue(this.data)
    console.log('Dados recebidos'+this.id);
    this.tarefaService.buscarPorId(this.id).subscribe((tarefa) => {
      // this.tarefa = this.tarefaForm
      console.log("Hey:", this.tarefa);
      this.tarefa = this.data
    })
  }

  ngOnSubmit(){
    this.data
  }

  editarTarefa(tarefa: any) {
    this.tarefaService.buscarPorId(this.id).subscribe(tarefa => {
      this.tarefa = tarefa
    })
    console.log('Dados recebidos'+this.tarefa);
    this.tarefaService.criar(this.tarefa).subscribe(() => {
      this.dialog.closeAll();
      window.location.reload();
      setTimeout(() => {
        this.snackBar.open('Nova tarefa', 'Fechar'), 500;
      });
    });
  }
}
