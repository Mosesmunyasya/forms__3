import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  constructor() {}

  // Basic login function (replace with real authentication logic)
  login(username: string, password: string): boolean {
    const validUsername = 'admin';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  // Check if user is authenticated
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Logout function
  logout() {
    this.isAuthenticated = false;
  }
}

