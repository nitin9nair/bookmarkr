// app-routing module used to navigate to different pages based on paths. For this we will be using angular's routing module.

import { Routes, RouterModule, RouterEvent } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';

// appRoutes variable having all paths
const appRoutes: Routes = [
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}