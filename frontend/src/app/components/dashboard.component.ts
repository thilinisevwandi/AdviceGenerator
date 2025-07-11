import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <div class="welcome-card">
        <h1>Welcome to Your Dashboard!</h1>
        <div *ngIf="authService.currentUser() as user" class="user-info">
          <h3>Hello, {{ user.firstName }} {{ user.lastName }}!</h3>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Account Created:</strong> {{ user.createdAt | date }}</p>
        </div>
        
        <div class="dashboard-content">
          <h3>Protected Content</h3>
          <p>This content is only visible to authenticated users.</p>
          
          <div class="feature-grid">
            <div class="feature-card">
              <h4>🔐 Secure Access</h4>
              <p>Your data is protected with JWT authentication</p>
            </div>
            <div class="feature-card">
              <h4>👤 User Profile</h4>
              <p>Manage your account settings and preferences</p>
            </div>
            <div class="feature-card">
              <h4>📊 Analytics</h4>
              <p>View your usage statistics and insights</p>
            </div>
            <div class="feature-card">
              <h4>🚀 Premium Features</h4>
              <p>Access advanced functionality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    .welcome-card {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      margin-bottom: 2rem;
    }
    .welcome-card h1 {
      text-align: center;
      color: #333;
      margin-bottom: 2rem;
      font-size: 2.5rem;
    }
    .user-info {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1.5rem;
      border-radius: 10px;
      margin-bottom: 2rem;
    }
    .user-info h3 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
    }
    .user-info p {
      margin: 0.5rem 0;
      opacity: 0.9;
    }
    .dashboard-content {
      margin-top: 2rem;
    }
    .dashboard-content h3 {
      color: #333;
      margin-bottom: 1rem;
      font-size: 1.8rem;
    }
    .dashboard-content > p {
      color: #666;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }
    .feature-card {
      background: #f8f9fa;
      padding: 1.5rem;
      border-radius: 10px;
      border-left: 4px solid #667eea;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    .feature-card h4 {
      margin: 0 0 1rem 0;
      color: #333;
      font-size: 1.2rem;
    }
    .feature-card p {
      margin: 0;
      color: #666;
      line-height: 1.5;
    }
    @media (max-width: 768px) {
      .dashboard-container {
        padding: 1rem;
      }
      .welcome-card {
        padding: 1.5rem;
      }
      .welcome-card h1 {
        font-size: 2rem;
      }
      .feature-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {
    // Component initialization logic here
  }
}