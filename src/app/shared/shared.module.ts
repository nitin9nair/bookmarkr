import { NgModule } from '@angular/core';

import { SearchPipe } from './search.pipe';
import { ShortenPipe } from './shorten.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SearchPipe,
        ShortenPipe
    ],
    exports: [
        CommonModule,
        SearchPipe,
        ShortenPipe
    ]
})
export class SharedModule {

}