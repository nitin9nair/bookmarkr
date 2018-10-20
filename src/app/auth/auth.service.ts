import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

// using injectable ad we're injecting router service
@Injectable()
export class AuthService {

    token: string;

    // to check login state is whether true or false with different parameters
    isDuplicateUser: boolean = false;
    isSignupSuccessful: boolean = false;
    isSigninFailed: boolean = false;

    // using instance of router service
    constructor(private router: Router) {

    }

    // method to signup user
    signupUser(email: string, password: string) {
        // createing user with firebase's inbuilt method
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            error => {
                // if user is duplicate then navigate back to 'signup' page
                this.isDuplicateUser = true;
                this.router.navigate(['/signup']);
                console.log(error);
            }
        )
        this.isSignupSuccessful = true;
        this.isDuplicateUser = false;
    }

    // method to signin users
    signinUser(email: string, password: string) {
        // firebase inbuilt signin method
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                // if signin is successful then naviagte to user's dashboard
                this.isSigninFailed = false;
                this.router.navigate(['/dashboard']);
                firebase.auth().currentUser.getIdToken()
                .then(
                    (token: string) => {
                        this.token = token
                    }
                )
            }
        )
        .catch(
            error => {
                // setting sign in failed to true
                this.isSigninFailed = true;
                console.log(error);
            }
        )
    }

    // method to get token value
    getToken() {
        firebase.auth().currentUser.getIdToken()
        .then(
            (token: string) => {
                this.token = token
            }
        )
        return this.token;
    }

    logout() {
        // if logout then redirect to home 
        this.router.navigate(['/home']);
        firebase.auth().signOut();
        this.token = null;
    }

    // to check whether user is authenticated or not
    isAuthenticated() {
        console.log(this.token);
        return this.token != null;
    }
}