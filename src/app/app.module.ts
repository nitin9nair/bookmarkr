import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BookmarkListComponent } from './bookmarks/bookmark-list/bookmark-list.component';
import { BookmarkAddComponent } from './bookmarks/bookmark-add/bookmark-add.component';
import { BookmarkEditComponent } from './bookmarks/bookmark-edit/bookmark-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { DataService } from './shared/data.service';
import { ShortenPipe } from './shared/shorten.pipe';
import { AuthGuard } from './auth/auth-guard.service';
import { BookmarkService } from './bookmarks/bookmark.service';
import { FeaturesComponent } from './core/features/features.component';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { SearchPipe } from './shared/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BookmarksComponent,
    BookmarkListComponent,
    BookmarkAddComponent,
    BookmarkEditComponent,
    ShortenPipe,
    FeaturesComponent,
    AboutComponent,
    ContactComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, DataService, BookmarkService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
