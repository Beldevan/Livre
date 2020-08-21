import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  constructor(){
    const config = {
      apiKey: "AIzaSyBJ_dbtEDKcrRK9SFSV454cO3ODh0yHAus",
      authDomain: "livre-af9cd.firebaseapp.com",
      databaseURL: "https://livre-af9cd.firebaseio.com",
      projectId: "livre-af9cd",
      storageBucket: "livre-af9cd.appspot.com",
      messagingSenderId: "1013833788401",
      appId: "1:1013833788401:web:e50c8d4afe18b7f1a37250",
      measurementId: "G-5HQGPC07PC"
    };
    // Initialize Firebase  https://livre-af9cd.firebaseio.com/
    firebase.initializeApp(config);
    firebase.analytics();
  }
}
