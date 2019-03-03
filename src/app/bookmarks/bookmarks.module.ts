import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms"

import { BookmarksComponent } from "./bookmarks.component";
import { BookmarkListComponent } from "./bookmark-list/bookmark-list.component";
import { BookmarkAddComponent } from "./bookmark-add/bookmark-add.component";
import { BookmarkEditComponent } from "./bookmark-edit/bookmark-edit.component";
import { BookmarksRoutingModule } from "./bookmarks-routing.module";
import { SharedModule } from "../shared/shared.module";
import { BookmarkDetailComponent } from './bookmark-detail/bookmark-detail.component';
;

@NgModule({
  declarations: [
    BookmarksComponent,
    BookmarkListComponent,
    BookmarkAddComponent,
    BookmarkEditComponent,
    BookmarkDetailComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      BookmarksRoutingModule,
      SharedModule
  ]
})
export class BookmarksModule {}
