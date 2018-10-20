import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { BookmarkModel } from "../bookmarks/bookmark.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataService {

  bookmarks: BookmarkModel[] = [
    new BookmarkModel("Google", "http://www.google.com"),
    new BookmarkModel("Facebook", "http://www.facebook.com"),
    new BookmarkModel("Twitter", "http://www.twitter.com")
  ];

  DATA_URL = 'https://bookmarkr-3c56f.firebaseio.com/bookmarks.json?auth=';

  constructor(private http: Http,
              private authService: AuthService) {

  }

  // method to store data in firebase realtime DB
  storeBookmarks() {
    const token = this.authService.getToken();
    return this.http.put(this.DATA_URL + token,this.bookmarks);
  }

  // to fetch all bookmarks
  getBookmarks() {
    const token = this.authService.getToken();

    return this.http.get(this.DATA_URL + token)
    .map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }

  addBookmark(newBookmark: BookmarkModel) {
    this.bookmarks.push(newBookmark);
    console.log(this.bookmarks);
  }

  // delete bookmark based on index value
  deleteBookmark(index: number) {
    this.bookmarks.splice(index, 1);
  }
}
