import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-careers',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './careers.component.html',
    styleUrl: './careers.component.css'
})
export class CareersComponent {
    openPositions = [
        {
            title: 'Senior IoT Engineer',
            type: 'Full-time',
            location: 'San Francisco, CA',
            department: 'Engineering',
            description: 'Lead the development of next-generation smart home devices and integration platforms. Requires 5+ years of IoT experience.'
        },
        {
            title: 'Smart Home Installation Technician',
            type: 'Full-time',
            location: 'Multiple Locations',
            department: 'Operations',
            description: 'Install and configure smart home systems for residential and commercial clients. Technical certification required.'
        },
        {
            title: 'Product Designer',
            type: 'Full-time',
            location: 'Remote',
            department: 'Design',
            description: 'Design intuitive user interfaces for our smart home control applications. 3+ years of UX/UI design experience.'
        },
        {
            title: 'Customer Success Manager',
            type: 'Full-time',
            location: 'New York, NY',
            department: 'Customer Success',
            description: 'Build and maintain relationships with enterprise clients, ensuring successful implementation and adoption.'
        }
    ];
}
