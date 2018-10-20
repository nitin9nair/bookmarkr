import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

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
    this.dataService.getBookmarks().subscribe(
      (data: any) => {
        this.bookmarks = data;
        console.log(data);
      }
  ); 
  }

  onBookmarkAdded(bookmark: BookmarkModel) {
    this.dataService.addBookmark(bookmark);
  }

  onDeleteBookmark(index: number) {
    this.dataService.deleteBookmark(index);
  }

}
