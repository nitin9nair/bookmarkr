import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Response } from "@angular/http";
import { Subscription } from "rxjs/Subscription";

import { BookmarkModel } from "../bookmark.model";
import { BookmarkService } from "../bookmark.service";
import { DataService } from "../../shared/data.service";
import { BookmarkEditComponent } from "../bookmark-edit/bookmark-edit.component";
import { AuthService } from "../../auth/auth.service";
import { empty } from "rxjs";

@Component({
  selector: "app-bookmark-list",
  templateUrl: "./bookmark-list.component.html",
  styleUrls: ["./bookmark-list.component.css"]
})
export class BookmarkListComponent implements OnInit, OnDestroy {
  bookmarks: BookmarkModel[] = [];
  // RxJS subscription to subscribe to change events
  subscription: Subscription;

  searchValue: string;

  // default start and end value for pagination
  startValue: number = 0;
  endValue: number = 5;

  // pagination method variables
  currentPage: number = 1;
  totalItemToShowInPage: number = 5;
  totalItems: number;
  totalPages: number;

  // to access bookmark-edit component
  @ViewChild(BookmarkEditComponent)
  private editBmkr: BookmarkEditComponent;

  // injecting bookmark and data service
  constructor(
    public bookmarkService: BookmarkService,
    public dataService: DataService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    // subscribing to the changes occuring in bookmark's data
    this.subscription = this.bookmarkService.bookmarksChanged.subscribe(
      (bookmarks: BookmarkModel[]) => {
        this.bookmarks = bookmarks;

        this.totalItems = this.bookmarks.length;
        this.totalPages = Math.ceil(
          this.totalItems / this.totalItemToShowInPage
        );
      }
    );
    this.dataService.storeBookmarks();
    this.dataService.getBookmarks();
    this.onSearch();
    this.currentPage = 1;
  }

  // method when edit button is clicked in template
  onEditBookmark(index: number) {
    this.editBmkr.onFetchBookmarkValues(index);
  }

  // delete bookmark method
  onDeleteBookmark(index: number) {
    if (confirm("Do you want to delete this bookmark ?") === true) {
      this.bookmarkService.deleteBookmark(index);
      this.dataService.storeBookmarks().subscribe((response: Response) => {
        console.log(response);
      });
      if (index == this.totalItems && index == this.startValue) {
        this.currentPage = this.currentPage - 1;
        this.startValue -= this.totalItemToShowInPage;
        this.endValue -= this.totalItemToShowInPage;
      }
    }
  }

  onSearch() {
    this.currentPage = 1;
    this.startValue = 0;
    this.endValue = 5;
  }

  // previous button method
  onPrevPage() {
    this.currentPage -= 1;
    this.startValue -= this.totalItemToShowInPage;
    this.endValue -= this.totalItemToShowInPage;
  }

  // next button method
  onNextPage() {
    this.currentPage += 1;
    this.startValue += this.totalItemToShowInPage;
    this.endValue += this.totalItemToShowInPage;
  }

  ngOnDestroy() {
    // unsubscribing the subscription on OnDestroy lifecycle hook after its use
    this.subscription.unsubscribe();
  }
}
