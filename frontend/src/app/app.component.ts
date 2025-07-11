import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="app-container">
      <nav class="navbar">
        <div class="nav-brand">
          <h2>Auth System</h2>
        </div>
        <div class="nav-links">
          <ng-container *ngIf="!authService.isLoggedIn(); else loggedInNav">
            <a routerLink="/login" routerLinkActive="active">Login</a>
            <a routerLink="/register" routerLinkActive="active">Register</a>
          </ng-container>
          <ng-template #loggedInNav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <button (click)="logout()" class="btn btn-outline">Logout</button>
          </ng-template>
        </div>
      </nav>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
    }
    .nav-brand h2 {
      color: white;
      margin: 0;
    }
    .nav-links {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    .nav-links a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      transition: background 0.3s;
    }
    .nav-links a:hover, .nav-links a.active {
      background: rgba(255, 255, 255, 0.2);
    }
    .btn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s;
    }
    .btn-outline {
      background: transparent;
      color: white;
      border: 1px solid white;
    }
    .btn-outline:hover {
      background: white;
      color: #667eea;
    }
    .main-content {
      padding: 2rem;
    }
  `]
})
export class AppComponent {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}