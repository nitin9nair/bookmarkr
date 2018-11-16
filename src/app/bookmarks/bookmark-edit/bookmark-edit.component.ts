import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Response } from "@angular/http";

import { BookmarkService } from "../bookmark.service";
import { BookmarkModel } from "../bookmark.model";
import { DataService } from "../../shared/data.service";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-bookmark-edit",
  templateUrl: "./bookmark-edit.component.html",
  styleUrls: ["./bookmark-edit.component.css"]
})
export class BookmarkEditComponent implements OnInit {

  // using viewchild to access editform
  @ViewChild('f') editform: NgForm;
  editedItemIndex: number;

  // injecting bookmark-serice and data-service
  constructor(private bookmarkService: BookmarkService, private dataService: DataService, private authService: AuthService) {}

  ngOnInit() {}

  // method to fetch bookmark values using index number
  onFetchBookmarkValues(fetchedIndex: number) {
    this.editedItemIndex = fetchedIndex;
    // setting edit form values 
    this.editform.setValue({
      bookmarkDesc: this.bookmarkService.bookmarks[fetchedIndex].bookmark_description,
      bookmarkLink: this.bookmarkService.bookmarks[fetchedIndex].bookmark_url  
    });
  }

  //  method to implement edit bookmark
  onEditBookmark() {
    const bookmarkDescription = this.editform.value.bookmarkDesc;
    const bookmarkLink = this.editform.value.bookmarkLink;
    const newBookmark = new BookmarkModel( this.authService.currentUserId, bookmarkDescription, bookmarkLink);
    this.editform.reset();
    this.bookmarkService.updateBookmark(this.editedItemIndex, newBookmark);

    // storing edited bookmark
    this.dataService.storeBookmarks().subscribe(
      (response: Response) => {
       // console.log(response.json());
      }
    );
  }

  // to clear all input fields in form
  onClear(f: NgForm) {
    f.reset();
  }
}
