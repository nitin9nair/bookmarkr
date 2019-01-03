import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookmarksComponent } from './bookmarks.component';
import { AuthGuard } from '../auth/auth-guard.service';

const bookmarksRoutes: Routes = [
    { path: 'dashboard', component: BookmarksComponent, canActivate: [AuthGuard] }
]

@NgModule({
    imports: [
        RouterModule.forChild(bookmarksRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class BookmarksRoutingModule {

}