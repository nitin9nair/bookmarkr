import { Component, OnInit } from '@angular/core';

import { BookmarkModel } from '../bookmark.model';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {

  bookmarks: BookmarkModel[] = [
    new BookmarkModel('Google','http://www.google.com'),
    new BookmarkModel('Facebook', 'http://www.facebook.com')
  ];

  constructor() { }

  ngOnInit() {
  }

  onBookmarkAdded(bookmark: BookmarkModel) {
    this.bookmarks.push(bookmark);
  }

}
