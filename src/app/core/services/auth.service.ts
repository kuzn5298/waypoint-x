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
  createUserWithEmailAndPassword,
  User as FirebaseUser,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);

  authUser$ = authState(this.auth);

  async getUserData(user: FirebaseUser): Promise<User> {
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
  }

  async registerWithEmailAndPassword(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      console.error(error);
    }
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      console.error(error);
    }
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
