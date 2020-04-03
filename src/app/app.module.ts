import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, TooltipModule } from 'ngx-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterPipe } from './shared/filter.pipe';
import { IconesComponent } from './pages/icones/icones.component';
import { TabelasComponent } from './pages/tabelas/tabelas.component';
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectComponent } from './pages/select/select.component';
import { DualListComponent } from './pages/dual-list/dual-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    IconesComponent,
    TabelasComponent,
    SelectComponent,
    DualListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    DataTablesModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
