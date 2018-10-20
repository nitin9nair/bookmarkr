import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BookmarkModel } from '../bookmark.model';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.css']
})
export class BookmarkAddComponent implements OnInit {

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
  }

  onAddBookmark(form: NgForm) {
    const bookmarkDescription = form.value.bookmarkDesc;
    const bookmarkLink = form.value.bookmarkLink;
    const newBookmark = new BookmarkModel(bookmarkDescription, bookmarkLink);
    form.reset();
    this.bookmarkService.addBookmark(newBookmark);
  }

  onClear(f: NgForm) {
    f.reset();
  }

}
