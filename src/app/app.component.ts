import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bookmarkr';

  ngOnInit() {

    // initializing firebase db configuration with API key and domain name
    firebase.initializeApp({
      apiKey: "AIzaSyBkjVphQERLb991Sd_CXtf3cKY2BH5fsAA",
      authDomain: "bookmarkr-3c56f.firebaseapp.com",
    });
  }
}
