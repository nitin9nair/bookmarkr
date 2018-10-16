import { Routes, RouterModule, RouterEvent } from '@angular/router';
import { NgModule } from '@angular/core';

import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './core/home/home.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';


const appRoutes: Routes = [
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: BookmarksComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}