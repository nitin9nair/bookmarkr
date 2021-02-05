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
      apiKey: "AIzaSyApRqd-4pt7piX3N1KabacmrldQY0lWvHo",
      authDomain: "bookmarkr-33970.firebaseapp.com",
    });
  }
}
