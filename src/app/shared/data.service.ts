// Data service used to interact with all the data handling done across components

import { Injectable, Sanitizer } from "@angular/core";
import { Http, Response } from "@angular/http";
import { DomSanitizer } from "@angular/platform-browser";
import "rxjs/Rx";

import { BookmarkModel } from "../bookmarks/bookmark.model";
import { AuthService } from "../auth/auth.service";
import { BookmarkService } from "../bookmarks/bookmark.service";

@Injectable()
export class DataService {
  // firebase DB data url
  API_URL = "https://bookmarkr-3c56f.firebaseio.com/bookmarks.json?auth=";

  constructor(
    private http: Http,
    private authService: AuthService,
    private bookmarkService: BookmarkService,
    private sanitizer: DomSanitizer
  ) {}

  DATA_URL = this.sanitizer.bypassSecurityTrustUrl(this.API_URL);

  // method to store data in firebase realtime DB
  storeBookmarks() {
    const TOKEN = this.authService.getToken();
    // http put request to store data in DB
    return this.http.put(
      this.DATA_URL + TOKEN,
      this.bookmarkService.getBookmarks()
    );
  }

  // to fetch all bookmarks
  getBookmarks() {
    const TOKEN = this.authService.getToken();
    // http get request to fetch all data
    this.http
      .get(this.DATA_URL + TOKEN)
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .subscribe((bookmarks: BookmarkModel[]) => {
        this.bookmarkService.setBookmarks(bookmarks);
      });
  }
}
