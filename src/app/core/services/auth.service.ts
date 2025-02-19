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
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '@/app/shared/models/user.interface';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);
  private errorHandler = inject(ErrorHandlerService);
  private messageService = inject(MessageService);

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
      this.showErrorMessage(error);
      console.error(error);
    }
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      this.showErrorMessage(error);
      console.error(error);
    }
  }

  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(this.auth, provider);
    } catch (error) {
      this.showErrorMessage(error);
      console.error(error);
    }
  }

  async loginWithGithub() {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(this.auth, provider);
    } catch (error) {
      this.showErrorMessage(error);
      console.error(error);
    }
  }

  async resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(this.auth, email);
    } catch (error) {
      this.showErrorMessage(error);
      console.error(error);
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      this.router.navigate(['/']);
    } catch (error) {
      this.showErrorMessage(error);
      console.error(error);
    }
  }

  private showErrorMessage(error: unknown) {
    const message = this.errorHandler.getFirebaseErrorMessage(error);
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  }
}
