import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';

import { BookmarkModel } from '../bookmark.model';
import { BookmarkService } from '../bookmark.service';
import { DataService } from '../../shared/data.service';
import { BookmarkListComponent } from '../bookmark-list/bookmark-list.component';

@Component({
  selector: 'app-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.css']
})
export class BookmarkAddComponent implements OnInit {

  // injecting bookmark-service and data-service
  constructor(private bookmarkService: BookmarkService, private dataService: DataService) { }

  ngOnInit() {
  }

  // method to add bookmark
  onAddBookmark(form: NgForm) {
    const bookmarkDescription = form.value.bookmarkDesc;
    const bookmarkLink = form.value.bookmarkLink;
    const newBookmark = new BookmarkModel(bookmarkDescription, bookmarkLink);
    form.reset();
    this.bookmarkService.addBookmark(newBookmark);

    this.dataService.storeBookmarks().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  // clear form method
  onClear(f: NgForm) {
    f.reset();
  }

}
