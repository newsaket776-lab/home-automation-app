import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="sidebar glass-panel">
      <!-- Main Navigation -->
      <ul class="nav-links main-nav">
        <li>
          <a routerLink="/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="hover-effect">
            <span class="icon">🏠</span>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a routerLink="/automation" class="hover-effect"> <!-- Mock Link -->
            <span class="icon">⚡</span>
            <span>Automation</span>
          </a>
        </li>
      </ul>

      <!-- Categories -->
      <div class="section-title">Categories</div>
      <ul class="nav-links">
        <li><a class="hover-effect"><span class="icon">💡</span> Lights</a></li>
        <li><a routerLink="/security" routerLinkActive="active" class="hover-effect"><span class="icon">🛡️</span> Security</a></li>
        <li><a class="hover-effect"><span class="icon">🌡️</span> Climate</a></li>
        <li><a class="hover-effect"><span class="icon">🎵</span> Audio</a></li>
        <li><a class="hover-effect"><span class="icon">📹</span> Video</a></li>
      </ul>
      
      <!-- Rooms -->
      <div class="section-title">Rooms</div>
      <ul class="nav-links rooms-list">
        <li *ngFor="let room of homeService.getRooms()">
          <a class="hover-effect checkbox-style">
            <span class="custom-check"></span>
            <span>{{ room }}</span>
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
    
    .sidebar {
      height: 95%;
      width: 240px;
      display: flex;
      flex-direction: column;
      padding: var(--spacing-md);
      margin: var(--spacing-sm);
      overflow-y: auto;
    }
    
    .nav-links {
      list-style: none;
      padding: 0;
      margin: 0 0 var(--spacing-lg) 0;
    }
    
    .nav-links li {
      margin-bottom: 8px;
    }
    
    .nav-links a {
      display: flex;
      align-items: center;
      padding: 8px 12px;
      color: var(--text-muted);
      text-decoration: none;
      border-radius: var(--radius-sm);
      font-size: 0.9rem;
      transition: all 0.2s;
    }
    
    .nav-links a:hover, .nav-links a.active {
      color: var(--text-main);
      background: rgba(255, 255, 255, 0.05);
    }
    
    .nav-links a.active {
      color: var(--primary-color);
    }
    
    .icon {
      margin-right: 12px;
      width: 20px;
      text-align: center;
    }
    
    .section-title {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--text-muted);
      margin-bottom: var(--spacing-sm);
      padding-left: 12px;
      opacity: 0.7;
    }
    
    /* Room List Style specific to image (Checkbox look) */
    .checkbox-style .custom-check {
      width: 14px;
      height: 14px;
      border: 1px solid var(--text-muted);
      border-radius: 4px;
      margin-right: 12px;
      display: inline-block;
    }
    
    .checkbox-style:hover .custom-check {
      border-color: var(--primary-color);
      background: rgba(6, 182, 212, 0.2);
    }
  `]
})
export class SidebarComponent {
  homeService = inject(HomeService);
}
