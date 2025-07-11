import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  email: string;
  firstName: string;
  lastName: string;
  expiration: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'https://localhost:7000/api/auth';
  private readonly tokenKey = 'auth_token';
  
  isLoggedIn = signal(false);
  currentUser = signal<any>(null);

  constructor(private http: HttpClient, private router: Router) {
    this.checkAuthStatus();
  }

  private checkAuthStatus() {
    const token = localStorage.getItem(this.tokenKey);
    if (token && !this.isTokenExpired(token)) {
      this.isLoggedIn.set(true);
      this.loadUserProfile();
    }
  }

  private isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      return payload.exp < currentTime;
    } catch {
      return true;
    }
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          localStorage.setItem(this.tokenKey, response.token);
          this.isLoggedIn.set(true);
          this.currentUser.set({
            email: response.email,
            firstName: response.firstName,
            lastName: response.lastName
          });
          this.router.navigate(['/dashboard']);
        })
      );
  }

  register(userData: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, userData)
      .pipe(
        tap(response => {
          localStorage.setItem(this.tokenKey, response.token);
          this.isLoggedIn.set(true);
          this.currentUser.set({
            email: response.email,
            firstName: response.firstName,
            lastName: response.lastName
          });
          this.router.navigate(['/dashboard']);
        })
      );
  }

  private loadUserProfile() {
    this.http.get(`${this.apiUrl}/profile`).subscribe({
      next: (user: any) => {
        this.currentUser.set(user);
      },
      error: () => {
        this.logout();
      }
    });
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedIn.set(false);
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}