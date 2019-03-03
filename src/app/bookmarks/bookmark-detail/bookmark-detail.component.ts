import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookmarkService } from '../bookmark.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookmark-detail',
  templateUrl: './bookmark-detail.component.html',
  styleUrls: ['./bookmark-detail.component.css']
})
export class BookmarkDetailComponent implements OnInit, OnDestroy {

  bookmarkDescDetail: string;
  bookmarkLinkDetail: string;

  private sub: any;
  bookmarkId: number;
  constructor(private bookmarkService: BookmarkService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.bookmarkId = +params['id']; 
   });

   this.displayBookmarkDetails(this.bookmarkId);
  }

  displayBookmarkDetails(fetchedIndex) {
    this.bookmarkDescDetail = this.bookmarkService.bookmarks[fetchedIndex].bookmark_description;
    this.bookmarkLinkDetail = this.bookmarkService.bookmarks[fetchedIndex].bookmark_url;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
