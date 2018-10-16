import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { BookmarkListComponent } from './bookmarks/bookmark-list/bookmark-list.component';
import { BookmarkAddComponent } from './bookmarks/bookmark-add/bookmark-add.component';
import { BookmarkEditComponent } from './bookmarks/bookmark-edit/bookmark-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BookmarkListComponent,
    BookmarkAddComponent,
    BookmarkEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
