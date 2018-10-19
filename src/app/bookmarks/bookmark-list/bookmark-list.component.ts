import { Component, OnInit } from '@angular/core';

import { BookmarkModel } from '../bookmark.model';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {

  bookmarks: BookmarkModel[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.bookmarks = this.dataService.getBookmarks();
  }

  onBookmarkAdded(bookmark: BookmarkModel) {
    this.bookmarks.push(bookmark);
  }

}
