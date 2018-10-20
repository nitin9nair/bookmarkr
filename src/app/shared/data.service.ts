import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/Rx";

import { BookmarkModel } from "../bookmarks/bookmark.model";
import { AuthService } from "../auth/auth.service";
import { BookmarkService } from "../bookmarks/bookmark.service";

@Injectable()
export class DataService {

  DATA_URL = "https://bookmarkr-3c56f.firebaseio.com/bookmarks.json?auth=";

  constructor(private http: Http, private authService: AuthService, private bookmarkService: BookmarkService) {}

  // method to store data in firebase realtime DB
  storeBookmarks() {
    const token = this.authService.getToken();
    return this.http.put(this.DATA_URL + token, this.bookmarkService.getBookmarks());
  }

  // to fetch all bookmarks
  getBookmarks() {
    const token = this.authService.getToken();

    return this.http
      .get(this.DATA_URL + token)
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .subscribe(
        (bookmarks: BookmarkModel[]) => {
          this.bookmarkService.setBookmarks(bookmarks);
        }
      );;

    }
}
