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
  subscription: Subscription;

  @ViewChild(BookmarkEditComponent) private editBmkr: BookmarkEditComponent;

  constructor(private bookmarkService: BookmarkService, private dataService: DataService) { }

  ngOnInit() {
    this.subscription = this.bookmarkService.bookmarksChanged
    .subscribe(
      (bookmarks: BookmarkModel[]) => {
        this.bookmarks = bookmarks;
      }
    );
    this.dataService.storeBookmarks();
    this.dataService.getBookmarks();
  }

  onEditBookmark(index: number) {
    this.editBmkr.onFetchBookmarkValues(index);
  }

  onDeleteBookmark(index: number) {
    if( confirm('Do you want to delete this bookmark ?') === true) {
    this.bookmarkService.deleteBookmark(index);
    this.dataService.storeBookmarks().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
    }
    else {

    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
