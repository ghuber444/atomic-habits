import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TabComponent } from './tab/tab.component';
import { PorFazerComponent } from './Status-tarefa/por-fazer/por-fazer.component';
import { EmProgressoComponent } from './Status-tarefa/em-progresso/em-progresso.component';
import { TerminadoComponent } from './Status-tarefa/terminado/terminado.component';
import { ButaoNovaTarefaComponent } from './butao-nova-tarefa/butao-nova-tarefa.component';
import { DetalhesTarefaComponent } from './Status-tarefa/detalhes-tarefa/detalhes-tarefa.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { QuotesService } from './services/quotes.service';
import { HttpClientModule } from '@angular/common/http';


import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CadastroComponent } from './cadastro/cadastro.component';
import { BotaoEliminarComponent } from './botoes/botao-eliminar/botao-eliminar.component';
import { BotaoEditarComponent } from './botoes/botao-editar/botao-editar.component';
import { BotaoComecarComponent } from './botoes/botao-comecar/botao-comecar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabComponent,
    PorFazerComponent,
    EmProgressoComponent,
    TerminadoComponent,
    ButaoNovaTarefaComponent,
    SidebarComponent,
    CadastroComponent,
    BotaoEliminarComponent,
    BotaoEditarComponent,
    BotaoComecarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
