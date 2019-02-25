import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookmarksComponent } from './bookmarks.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { SettingsComponent } from '../auth/settings/settings.component';

const bookmarksRoutes: Routes = [
    { path: 'dashboard', component: BookmarksComponent, canActivate: [AuthGuard] },
    { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] }
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