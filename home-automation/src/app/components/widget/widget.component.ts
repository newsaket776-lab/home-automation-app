import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Device } from '../../services/home.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-widget',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="widget" [class.active]="isActive" (click)="onToggle()">
      <div class="icon-ring">
        <div class="icon-inner">
           <!-- Dynamic Icon based on type -->
           <span *ngIf="device.type === 'light'">💡</span>
           <span *ngIf="device.type === 'thermostat'">🌡️</span>
           <span *ngIf="device.type === 'shutter'">🪟</span>
           <span *ngIf="device.type === 'water-heater'">💧</span>
           <span *ngIf="device.type === 'extraction'">🌪️</span>
           <span *ngIf="device.type === 'tv'">📺</span>
           <span *ngIf="device.type === 'lock'">🔒</span>
           <span *ngIf="device.type === 'camera'">📹</span>
        </div>
        
        <!-- Status indicator dot -->
        <div class="status-dot"></div>
      </div>
      
      <div class="label">
        <span class="name">{{ device.name }}</span>
        <span class="state" *ngIf="device.value">{{ device.value }}{{ getUnit() }}</span>
        <span class="state" *ngIf="!device.value">{{ device.status | titlecase }}</span>
      </div>
    </div>
  `,
    styles: [`
    .widget {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      width: 80px;
    }
    
    .icon-ring {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      border: 2px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-bottom: 8px;
      transition: all 0.3s ease;
    }
    
    .widget.active .icon-ring {
      border-color: var(--primary-color);
      box-shadow: 0 0 15px rgba(6, 182, 212, 0.3);
      background: rgba(6, 182, 212, 0.1);
    }
    
    .icon-inner {
      font-size: 1.5rem;
    }
    
    .status-dot {
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #334155; /* Inactive gray */
      border: 2px solid var(--bg-dark);
    }
    
    .widget.active .status-dot {
      background: var(--primary-color);
      box-shadow: 0 0 5px var(--primary-color);
    }
    
    .label {
      text-align: center;
    }
    
    .name {
      display: block;
      font-size: 0.8rem;
      color: var(--text-main);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 80px;
    }
    
    .state {
      font-size: 0.7rem;
      color: var(--text-muted);
    }
  `]
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
