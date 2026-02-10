import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Device } from '../../services/home.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-widget',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './widget.component.html',
    styleUrl: './widget.component.css'
})
export class WidgetComponent {
    @Input({ required: true }) device!: Device;
    @Output() toggle = new EventEmitter<void>();
    @Output() valueChange = new EventEmitter<number>();

    get isActive(): boolean {
        return this.device.status === 'on' ||
            this.device.status === 'open' ||
            this.device.status === 'playing' ||
            this.device.status === 'heating' ||
            this.device.status === 'unlocked';
    }

    getUnit(): string {
        if (this.device.type === 'thermostat' || this.device.type === 'water-heater') return '°C';
        if (this.device.type === 'light' || this.device.type === 'shutter') return '%';
        return '';
    }

    onToggle() {
        this.toggle.emit();
    }
}
