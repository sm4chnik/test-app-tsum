import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { FioComponent } from './pages/first-page/fio/fio.component';
import { GenderComponent } from './pages/first-page/gender/gender.component';
import { BirthdayComponent } from './pages/first-page/birthday/birthday.component';
import { MaritalStatusComponent } from './pages/first-page/marital-status/marital-status.component';
import { ChildrenCountComponent } from './pages/first-page/children-count/children-count.component';
import { EmailComponent } from './pages/first-page/email/email.component';
import { CommentComponent } from './pages/first-page/comment/comment.component';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {OWL_DATE_TIME_LOCALE, OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MyGuard} from "./secondPage.guard";

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    FioComponent,
    GenderComponent,
    BirthdayComponent,
    MaritalStatusComponent,
    ChildrenCountComponent,
    EmailComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatSelectModule,
    NgbModule,
    MatFormFieldModule
  ],
  providers: [
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'ru'},
    MyGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
