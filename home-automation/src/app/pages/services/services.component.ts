import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './services.component.html',
    styleUrl: './services.component.css'
})
export class ServicesComponent {
    services = [
        {
            icon: '💡',
            title: 'Smart Lighting',
            description: 'Intelligent lighting control for every room in your home',
            features: ['Automated scheduling', 'Voice control', 'Energy monitoring', 'Custom scenes']
        },
        {
            icon: '🌡️',
            title: 'Climate Control',
            description: 'Maintain perfect temperature and air quality',
            features: ['Smart thermostats', 'Zone control', 'Energy optimization', 'Remote access']
        },
        {
            icon: '🔒',
            title: 'Security Systems',
            description: 'Comprehensive security for peace of mind',
            features: ['24/7 monitoring', 'Smart locks', 'Camera systems', 'Motion detection']
        },
        {
            icon: '🎵',
            title: 'Audio & Entertainment',
            description: 'Multi-room audio and entertainment systems',
            features: ['Whole-home audio', 'Smart speakers', 'Streaming integration', 'Voice control']
        },
        {
            icon: '🪟',
            title: 'Window Automation',
            description: 'Automated blinds and shutter control',
            features: ['Scheduled operation', 'Light sensors', 'Remote control', 'Energy savings']
        },
        {
            icon: '⚡',
            title: 'Energy Management',
            description: 'Monitor and optimize your energy consumption',
            features: ['Real-time monitoring', 'Usage analytics', 'Cost tracking', 'Smart recommendations']
        }
    ];
}
