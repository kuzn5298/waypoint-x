import { User } from '@/app/shared/models/user.interface';
import { inject, Injectable } from '@angular/core';
import {
  Auth,
  authState,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User as FirebaseUser,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);

  user$ = authState(this.auth);

  async getUserData(user: FirebaseUser): Promise<User> {
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
  }

  async login(email: string, password: string) {
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(this.auth, provider);
    } catch (error) {
      console.error(error);
    }
  }

  async loginWithGithub() {
    const provider = new GithubAuthProvider();
    await signInWithPopup(this.auth, provider);
  }

  async resetPassword(email: string) {
    await sendPasswordResetEmail(this.auth, email);
  }

  async logout() {
    await signOut(this.auth);
  }
}
