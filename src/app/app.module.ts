import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthSigninComponent } from './auth-signin/auth-signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListSingleBookComponent } from './book-list-single-book/book-list-single-book.component';
import { BookListSingleFormComponent } from './book-list-single-form/book-list-single-form.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService} from './services/auth-guard.service';
import { AuthService} from './services/auth.service';
import { BooksService} from './services/books.service';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes =[
  {path: 'auth/signup', component: AuthSignupComponent},
  {path: 'auth/signin', component: AuthSigninComponent},
  {path: 'books', canActivate: [AuthGuardService], component: BookListComponent},
  {path: 'books/new', canActivate: [AuthGuardService], component: BookListSingleFormComponent},
  {path: 'books/view/:id', canActivate: [AuthGuardService], component: BookListSingleBookComponent},
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  { path: '**', redirectTo: 'books'}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthSignupComponent,
    AuthSigninComponent,
    BookListComponent,
    BookListSingleBookComponent,
    BookListSingleFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    BooksService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
