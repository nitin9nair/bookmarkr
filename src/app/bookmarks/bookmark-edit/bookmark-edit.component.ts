import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Response } from "@angular/http";

import { BookmarkService } from "../bookmark.service";
import { BookmarkModel } from "../bookmark.model";
import { DataService } from "../../shared/data.service";

@Component({
  selector: "app-bookmark-edit",
  templateUrl: "./bookmark-edit.component.html",
  styleUrls: ["./bookmark-edit.component.css"]
})
export class BookmarkEditComponent implements OnInit {
  @ViewChild('f') editform: NgForm;
  editedBookmark: BookmarkModel;
  editedItemIndex: number;
  subscription: Subscription;

  constructor(private bookmarkService: BookmarkService, private dataService: DataService) {}

  ngOnInit() {}

  onFetchBookmarkValues(fetchedIndex: number) {
    this.editedItemIndex = fetchedIndex;
    this.editform.setValue({
      bookmarkDesc: this.bookmarkService.bookmarks[fetchedIndex].bookmark_description,
      bookmarkLink: this.bookmarkService.bookmarks[fetchedIndex].bookmark_url  
    });
  }

  onEditBookmark() {
    const bookmarkDescription = this.editform.value.bookmarkDesc;
    const bookmarkLink = this.editform.value.bookmarkLink;
    const newBookmark = new BookmarkModel(bookmarkDescription, bookmarkLink);
    this.editform.reset();
    this.bookmarkService.updateBookmark(this.editedItemIndex, newBookmark);

    this.dataService.storeBookmarks().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onClear(f: NgForm) {
    f.reset();
  }
}
