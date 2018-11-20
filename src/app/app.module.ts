import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatStepperModule,
  MatNativeDateModule,
  MatCardModule,
  MatGridListModule,
  MatDividerModule,
  MatCheckboxModule,
  MatSelectModule
  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormConsComponent } from './forms/form-cons/form-cons.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    FormConsComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatStepperModule,
    MatGridListModule,
    MatDividerModule,
    HttpClientModule,
    MatCheckboxModule,
    MatSelectModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
