import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { BookmarkModel } from "./bookmark.model";

@Injectable()
export class BookmarkService {
  // RxJS subject used to check changes in bookmark values and notify others of changes
  bookmarksChanged = new Subject<BookmarkModel[]>();

  bookmarks: BookmarkModel[] = [];

  constructor() {}

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
    this.bookmarksChanged.next(this.bookmarks.slice());
  }

  // delete bookmark method
  deleteBookmark(index: number) {
    this.bookmarks.splice(index, 1);
    this.bookmarksChanged.next(this.bookmarks.slice());
  }
}
