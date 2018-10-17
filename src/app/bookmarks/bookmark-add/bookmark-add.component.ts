import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BookmarkModel } from '../bookmark.model';

@Component({
  selector: 'app-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.css']
})
export class BookmarkAddComponent implements OnInit {

  @Output() bookmarkAdded = new EventEmitter<BookmarkModel>();
  constructor() { }

  ngOnInit() {
  }

  onAddBookmark(form: NgForm) {
    const bookmarkDescription = form.value.bookmarkDesc;
    const bookmarkLink = form.value.bookmarkLink;
    const newBookmark = new BookmarkModel(bookmarkDescription, bookmarkLink);
    this.bookmarkAdded.emit(newBookmark);
  }

}
