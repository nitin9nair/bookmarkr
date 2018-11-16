import * as firebase from "firebase";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

// using injectable ad we're injecting router service
@Injectable()
export class AuthService {
  token: string;
  userEmail: string;
  currentUserId: any;

  // to check login state is whether true or false with different parameters
  isDuplicateUser: boolean = false;
  isSignupSuccessful: boolean = false;
  isSigninFailed: boolean = false;

  // get error_code
  error_code: string;
  // using instance of router service
  constructor(private router: Router) {}

  // method to signup user
  signupUser(email: string, password: string) {
    // createing user with firebase's inbuilt method
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        // if user is duplicate then navigate back to 'signup' page
        this.isDuplicateUser = true;
        this.router.navigate(["/signup"]);
        console.log(error);
      });
    this.isSignupSuccessful = true;
    this.isDuplicateUser = false;
  }

  // method to signin users
  signinUser(email: string, password: string) {
    // firebase inbuilt signin method
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        // if signin is successful then naviagte to user's dashboard
        this.isSigninFailed = false;
        this.router.navigate(["/dashboard"]);
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
          });
          this.currentUserId = firebase.auth().currentUser.uid;
          
      })
      .catch(error => {
        // setting sign in failed to true
        this.isSigninFailed = true;
        this.router.navigate(["/signin"]);
        this.error_code = error.code;
        console.log(error.code);
      });
  }

  sendUserEmail(emailValue) {
    this.userEmail = emailValue;
  }

  // method to get token value
  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => {
        this.token = token;
      });
    return this.token;
  }

  logout() {
    // if logout then redirect to home
    this.router.navigate(["/home"]);
    firebase.auth().signOut();
    this.token = null;
  }

  // to check whether user is authenticated or not
  isAuthenticated() {
    return this.token != null;
  }
}
