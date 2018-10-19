import { BookmarkModel } from "../bookmarks/bookmark.model";

export class DataService {
  bookmarks: BookmarkModel[] = [
    new BookmarkModel("Google", "http://www.google.com"),
    new BookmarkModel("Facebook", "http://www.facebook.com")
  ];

  getBookmarks() {
      return this.bookmarks.slice();
  }
}
