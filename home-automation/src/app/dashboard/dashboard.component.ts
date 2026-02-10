import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService, Device } from '../services/home.service';
import { WidgetComponent } from '../components/widget/widget.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, WidgetComponent],
  template: `
    <div class="dashboard-container">
      <!-- Replicating the Room Layout from Image -->
      <div class="floor-layout">
        <div class="room-card glass-panel" *ngFor="let room of roomGroups()">
          <div class="room-header">
            <h3>{{ room.name }}</h3>
          </div>
          
          <div class="room-devices">
            <app-widget 
              *ngFor="let device of room.devices" 
              [device]="device"
              (toggle)="homeService.toggleDevice(device.id)">
            </app-widget>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: var(--spacing-md);
    }
    
    .floor-layout {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: var(--spacing-lg);
    }
    
    .room-card {
      min-height: 180px;
      padding: var(--spacing-md);
      position: relative;
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .room-header h3 {
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--text-muted);
      margin-bottom: var(--spacing-md);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding-bottom: 8px;
    }
    
    .room-devices {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-md);
    }
  `]
})
export class DashboardComponent {
  homeService = inject(HomeService);

  roomGroups = computed(() => {
    const devices = this.homeService.devices();
    const rooms = ['Living Room', 'Kitchen', 'Bedroom 1', 'Bedroom 2', 'Hallway', 'Bathroom'];

    return rooms.map(roomName => ({
      name: roomName,
      devices: devices.filter((d: Device) => d.room === roomName)
    })).filter(g => g.devices.length > 0);
  });
}
