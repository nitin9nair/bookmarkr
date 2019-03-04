import { NgModule } from '@angular/core';

import { SearchPipe } from './search.pipe';
import { ShortenPipe } from './shorten.pipe';
import { CommonModule } from '@angular/common';
import { TogglePasswordDirective } from './toggle-password.directive';

@NgModule({
    declarations: [
        SearchPipe,
        ShortenPipe,
        TogglePasswordDirective
    ],
    exports: [
        CommonModule,
        SearchPipe,
        ShortenPipe,
        TogglePasswordDirective
    ]
})
export class SharedModule {

}