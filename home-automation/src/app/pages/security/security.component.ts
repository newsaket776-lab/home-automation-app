import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { WidgetComponent } from '../../components/widget/widget.component';

@Component({
    selector: 'app-security',
    standalone: true,
    imports: [CommonModule, WidgetComponent],
    template: `
    <div class="page-container">
      <div class="page-header">
        <h2>Security</h2>
        <p class="subtitle">Monitor your home's safety</p>
      </div>

      <div class="system-status glass-panel hover-effect">
        <div class="status-icon">🛡️</div>
        <div class="status-info">
          <h3>System Armed</h3>
          <p>All sensors active</p>
        </div>
        <button class="action-btn">Disarm</button>
      </div>

      <div class="security-grid">
         <div class="section">
            <h3>Cameras</h3>
            <div class="grid">
              <app-widget 
                *ngFor="let device of cameras()" 
                [device]="device"
                (toggle)="homeService.toggleDevice(device.id)">
              </app-widget>
            </div>
         </div>
         
         <div class="section">
            <h3>Locks & Sensors</h3>
            <div class="grid">
              <app-widget 
                *ngFor="let device of locks()" 
                [device]="device"
                (toggle)="homeService.toggleDevice(device.id)">
              </app-widget>
            </div>
         </div>
      </div>
      
      <div class="activity-log glass-panel">
        <h3>Recent Activity</h3>
        <ul class="log-list">
          <li class="log-item">
            <span class="time">10:42 AM</span>
            <span class="event">Front Door unlocked</span>
          </li>
           <li class="log-item">
            <span class="time">09:15 AM</span>
            <span class="event">Motion detected in Garden</span>
          </li>
           <li class="log-item">
            <span class="time">08:00 AM</span>
            <span class="event">System Armed</span>
          </li>
        </ul>
      </div>
    </div>
  `,
    styles: [`
    .page-container {
      padding: var(--spacing-sm);
    }
    
    .page-header {
      margin-bottom: var(--spacing-lg);
    }

    .subtitle {
      color: var(--text-muted);
    }
    
    .system-status {
      display: flex;
      align-items: center;
      padding: var(--spacing-lg);
      margin-bottom: var(--spacing-lg);
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 95, 70, 0.4));
      border: 1px solid rgba(16, 185, 129, 0.3);
    }
    
    .status-icon {
      font-size: 3rem;
      margin-right: var(--spacing-md);
    }
    
    .status-info {
      flex: 1;
    }
    
    .status-info h3 {
      color: #34d399;
    }
    
    .action-btn {
      background: rgba(255,255,255,0.1);
      border: 1px solid white;
      color: white;
      padding: 8px 16px;
      border-radius: var(--radius-sm);
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s;
    }
    
    .action-btn:hover {
      background: white;
      color: var(--bg-dark);
    }

    .security-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: var(--spacing-lg);
      margin-bottom: var(--spacing-lg);
    }
    
    .section h3 {
      margin-bottom: var(--spacing-md);
      border-bottom: 1px solid var(--glass-border);
      padding-bottom: 4px;
    }
    
    .grid {
      display: grid;
      gap: var(--spacing-md);
    }
    
    .activity-log {
      padding: var(--spacing-md);
    }
    
    .log-list {
      list-style: none;
      padding: 0;
      margin-top: var(--spacing-md);
    }
    
    .log-item {
      display: flex;
      padding: var(--spacing-sm) 0;
      border-bottom: 1px solid var(--glass-border);
    }
    
    .log-item:last-child {
      border-bottom: none;
    }
    
    .time {
      color: var(--text-muted);
      width: 100px;
      font-size: 0.9rem;
    }
  `]
})
export class SecurityComponent {
    homeService = inject(HomeService);

    cameras = computed(() => this.homeService.devices().filter(d => d.type === 'camera'));
    locks = computed(() => this.homeService.devices().filter(d => d.type === 'lock'));
}
