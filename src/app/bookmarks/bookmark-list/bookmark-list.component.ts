import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import { BookmarkModel } from '../bookmark.model';
import { BookmarkService } from '../bookmark.service';
import { DataService } from '../../shared/data.service';
import { BookmarkEditComponent } from '../bookmark-edit/bookmark-edit.component';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit, OnDestroy {

  bookmarks: BookmarkModel[] = [];
  // RxJS subscription to subscribe to change events
  subscription: Subscription;

  // to access bookmark-edit component
  @ViewChild(BookmarkEditComponent) private editBmkr: BookmarkEditComponent;

  // injecting bookmark and data service
  constructor(private bookmarkService: BookmarkService, private dataService: DataService) { }

  ngOnInit() {
    // subscribing to the changes occuring in bookmark's data
    this.subscription = this.bookmarkService.bookmarksChanged
    .subscribe(
      (bookmarks: BookmarkModel[]) => {
        this.bookmarks = bookmarks;
      }
    );
    this.dataService.storeBookmarks();
    this.dataService.getBookmarks();
  }

  // method when edit button is clicked in template
  onEditBookmark(index: number) {
    this.editBmkr.onFetchBookmarkValues(index);
  }

  // delete bookmark method
  onDeleteBookmark(index: number) {
    if( confirm('Do you want to delete this bookmark ?') === true) {
    this.bookmarkService.deleteBookmark(index);
    this.dataService.storeBookmarks().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
    }
  }

  ngOnDestroy() {
    // unsubscribing the subscription on OnDestroy lifecycle hook
    this.subscription.unsubscribe();
  }

}
