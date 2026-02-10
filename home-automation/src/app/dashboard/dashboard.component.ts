import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService, Device } from '../services/home.service';
import { WidgetComponent } from '../components/widget/widget.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, WidgetComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
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
