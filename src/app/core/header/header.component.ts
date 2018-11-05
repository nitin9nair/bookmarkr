import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { BookmarkService } from '../../bookmarks/bookmark.service';
import { BookmarkListComponent } from '../../bookmarks/bookmark-list/bookmark-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private authService: AuthService, private bookmarkService: BookmarkService) { }

  ngOnInit() {
  }

  // logout method
  onLogout() {
    if(confirm('Do you want to logout ?') === true) {
      this.authService.logout();
    }
  }

  sendSearchValue(searchInput: string) {
    this.bookmarkService.fetchSearchValue(searchInput);
  }

}
