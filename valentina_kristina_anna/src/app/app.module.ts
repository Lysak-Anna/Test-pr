import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../app/store/tasks.reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    FilterComponent,
    HeaderComponent,
    ModalEditComponent,
  ],

  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
