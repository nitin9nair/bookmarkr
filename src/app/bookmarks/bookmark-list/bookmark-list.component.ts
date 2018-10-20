import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import { BookmarkModel } from '../bookmark.model';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit, OnDestroy {

  bookmarks: BookmarkModel[];
  subscription: Subscription;

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.subscription = this.bookmarkService.bookmarksChanged
    .subscribe(
      (bookmarks: BookmarkModel[]) => {
        this.bookmarks = bookmarks;
      }
    );
  this.bookmarks = this.bookmarkService.getBookmarks();
  }

  onEditBookmark(index: number) {
    
  }

  onDeleteBookmark(index: number) {
    this.bookmarkService.deleteBookmark(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
