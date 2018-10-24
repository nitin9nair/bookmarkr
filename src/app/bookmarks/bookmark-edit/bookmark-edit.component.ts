import { Component, OnInit } from "@angular/core";

import { BookmarkService } from "../bookmark.service";

@Component({
  selector: "app-bookmark-edit",
  templateUrl: "./bookmark-edit.component.html",
  styleUrls: ["./bookmark-edit.component.css"]
})
export class BookmarkEditComponent implements OnInit {
  fetchBookmark;

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit() {}
}
