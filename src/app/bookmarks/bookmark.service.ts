import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { BookmarkModel } from "./bookmark.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class BookmarkService {
  // RxJS subject used to check changes in bookmark values and notify others of changes
  bookmarksChanged = new Subject<BookmarkModel[]>();
  searchString: string;
  bookmarks: BookmarkModel[] = [];
  isSearchActive: boolean = false;
  
  constructor(private authService: AuthService) {}

  // set bookmark method
  setBookmarks(bookmarks: BookmarkModel[]) {
    this.bookmarks = bookmarks;
    this.bookmarksChanged.next(this.bookmarks.slice());
  }

  // get bookmark method
  getBookmarks() {
      return this.bookmarks.slice();
  }

  // add bookmark
  addBookmark(bookmark: BookmarkModel) {
    this.bookmarks.push(bookmark);
    this.bookmarksChanged.next(this.bookmarks.slice());
  }

  // update bookmark values
  updateBookmark(index: number, newbookmark: BookmarkModel) {
    this.bookmarks[index] = newbookmark;
    console.log('ES - ' + index);
    this.bookmarksChanged.next(this.bookmarks.slice());
  }

  // delete bookmark method
  deleteBookmark(index: number) {
    this.bookmarks.splice(index, 1);
    this.bookmarksChanged.next(this.bookmarks.slice());
  }

  fetchSearchValue(searchInput: string) {
    this.isSearchActive = true;
    this.searchString = searchInput;
    if(this.searchString == '') {
      this.isSearchActive = false;
    }
  }
}
