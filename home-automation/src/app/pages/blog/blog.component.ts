import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-blog',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.css'
})
export class BlogComponent {
    blogPosts = [
        {
            icon: '🏠',
            date: 'Feb 8, 2026',
            category: 'Smart Home',
            title: '10 Ways Smart Lighting Can Transform Your Home',
            excerpt: 'Discover how intelligent lighting systems can enhance your living space, save energy, and create the perfect ambiance for any occasion.'
        },
        {
            icon: '🔒',
            date: 'Feb 5, 2026',
            category: 'Security',
            title: 'The Ultimate Guide to Smart Home Security',
            excerpt: 'Learn about the latest security technologies and best practices to keep your smart home safe from cyber threats and physical intrusions.'
        },
        {
            icon: '⚡',
            date: 'Feb 1, 2026',
            category: 'Energy',
            title: 'Reduce Your Energy Bills with Smart Automation',
            excerpt: 'Find out how smart thermostats, lighting, and appliances can significantly reduce your monthly energy costs while improving comfort.'
        },
        {
            icon: '🎵',
            date: 'Jan 28, 2026',
            category: 'Entertainment',
            title: 'Creating the Perfect Multi-Room Audio System',
            excerpt: 'A comprehensive guide to designing and installing a whole-home audio system that delivers exceptional sound quality in every room.'
        },
        {
            icon: '🌡️',
            date: 'Jan 25, 2026',
            category: 'Climate',
            title: 'Smart Climate Control: Comfort Meets Efficiency',
            excerpt: 'Explore how modern climate control systems use AI and sensors to maintain perfect temperature while minimizing energy waste.'
        },
        {
            icon: '📱',
            date: 'Jan 20, 2026',
            category: 'Technology',
            title: 'Voice Assistants: Choosing the Right One for Your Home',
            excerpt: 'Compare popular voice assistants and learn which one best fits your smart home ecosystem and personal preferences.'
        }
    ];
}
