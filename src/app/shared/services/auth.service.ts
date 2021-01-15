import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any;
  constructor(private afAuth: AngularFireAuth,
              private afFirestore: AngularFirestore,
              private router: Router) { }


  login(email: string, password: string): void {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.afFirestore.collection('users').ref.where('id', '==', user.user.uid).onSnapshot(
          snap => {
            snap.forEach(userRef => {
              console.log('userRef', userRef.data());
              this.currentUser = userRef.data();
              localStorage.setItem('admin', JSON.stringify(this.currentUser));
              this.router.navigateByUrl('/admin');
            });
          }
        );
      })
      .catch(err => console.log(err));
  }
}
