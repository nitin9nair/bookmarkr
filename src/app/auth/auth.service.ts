import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    token: string;

    constructor(private router: Router) {

    }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            error => {
                console.log(error);
            }
        )
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
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
                console.log(error);
            }
        )
    }

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
        this.router.navigate(['/home']);
        firebase.auth().signOut();
        this.token = null;
    }

    isAuthenticated() {
        console.log(this.token);
        return this.token != null;
    }
}