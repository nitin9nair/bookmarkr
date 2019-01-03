import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth/auth.service';
import { BookmarkService } from './bookmarks/bookmark.service';
import { DataService } from './shared/data.service';
import { AuthGuard } from './auth/auth-guard.service';

import { HeaderComponent } from './core/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    BookmarksModule,
    AuthModule,
    CoreModule
  ],
  providers: [AuthService, DataService, BookmarkService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
