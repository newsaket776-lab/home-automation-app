import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService, Device } from '../../services/home.service';
import { WidgetComponent } from '../../components/widget/widget.component';

@Component({
    selector: 'app-rooms',
    standalone: true,
    imports: [CommonModule, WidgetComponent],
    template: `
    <div class="page-container">
      <div class="page-header">
        <h2>Rooms</h2>
        <p class="subtitle">Manage devices by room</p>
      </div>

      <div *ngFor="let room of roomGroups()" class="room-section glass-panel">
        <div class="room-header">
           <h3>{{ room.name }}</h3>
           <span class="device-count">{{ room.devices.length }} Devices</span>
        </div>
        
        <div class="room-grid">
           <app-widget 
            *ngFor="let device of room.devices" 
            [device]="device"
            (toggle)="homeService.toggleDevice(device.id)"
            (valueChange)="homeService.updateValue(device.id, $event)">
          </app-widget>
        </div>
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
    
    .room-section {
      margin-bottom: var(--spacing-lg);
      padding: var(--spacing-md);
    }
    
    .room-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-md);
      border-bottom: 1px solid var(--glass-border);
      padding-bottom: var(--spacing-xs);
    }
    
    .room-header h3 {
      font-size: 1.25rem;
      color: var(--text-main);
    }
    
    .device-count {
      background: rgba(255, 255, 255, 0.1);
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .room-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-md);
    }
  `]
})
export class RoomsComponent {
    homeService = inject(HomeService);

    roomGroups = computed(() => {
        const devices = this.homeService.devices();
        const groups: { [key: string]: Device[] } = {};

        devices.forEach(device => {
            if (!groups[device.room]) {
                groups[device.room] = [];
            }
            groups[device.room].push(device);
        });

        return Object.keys(groups).map(room => ({
            name: room,
            devices: groups[room]
        }));
    });
}
