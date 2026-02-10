import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { WidgetComponent } from '../../components/widget/widget.component';

@Component({
    selector: 'app-security',
    standalone: true,
    imports: [CommonModule, WidgetComponent],
    templateUrl: './security.component.html',
    styleUrl: './security.component.css'
})
export class SecurityComponent {
    homeService = inject(HomeService);

    cameras = computed(() => this.homeService.devices().filter(d => d.type === 'camera'));
    locks = computed(() => this.homeService.devices().filter(d => d.type === 'lock'));
}
