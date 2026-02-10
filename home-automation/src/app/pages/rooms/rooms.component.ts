import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService, Device } from '../../services/home.service';
import { WidgetComponent } from '../../components/widget/widget.component';

@Component({
    selector: 'app-rooms',
    standalone: true,
    imports: [CommonModule, WidgetComponent],
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.css'
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
