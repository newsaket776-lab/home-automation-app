import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-container">
      <div class="page-header">
        <h1>Our Services</h1>
        <p>Comprehensive smart home solutions tailored to your needs</p>
      </div>
      
      <div class="services-grid">
        <div class="service-card glass-panel" *ngFor="let service of services">
          <div class="service-icon">{{ service.icon }}</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <ul class="service-features">
            <li *ngFor="let feature of service.features">{{ feature }}</li>
          </ul>
          <button class="btn-learn-more">Learn More</button>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .page-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: var(--spacing-lg);
    }
    
    .page-header {
      text-align: center;
      margin-bottom: 60px;
    }
    
    .page-header h1 {
      font-size: 3rem;
      margin-bottom: var(--spacing-md);
    }
    
    .page-header p {
      font-size: 1.2rem;
      color: var(--text-muted);
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: var(--spacing-lg);
    }
    
    .service-card {
      padding: var(--spacing-lg);
      transition: all 0.3s ease;
    }
    
    .service-card:hover {
      transform: translateY(-5px);
      border-color: var(--primary-color);
    }
    
    .service-icon {
      font-size: 3.5rem;
      margin-bottom: var(--spacing-md);
    }
    
    .service-card h3 {
      font-size: 1.5rem;
      margin-bottom: var(--spacing-md);
      color: var(--primary-color);
    }
    
    .service-card p {
      color: var(--text-muted);
      margin-bottom: var(--spacing-md);
      line-height: 1.6;
    }
    
    .service-features {
      list-style: none;
      padding: 0;
      margin: var(--spacing-md) 0;
    }
    
    .service-features li {
      padding: 8px 0;
      color: var(--text-muted);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .service-features li:before {
      content: '✓ ';
      color: var(--primary-color);
      font-weight: bold;
      margin-right: 8px;
    }
    
    .btn-learn-more {
      width: 100%;
      padding: 12px;
      background: transparent;
      color: var(--primary-color);
      border: 2px solid var(--primary-color);
      border-radius: var(--radius-sm);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: var(--spacing-md);
    }
    
    .btn-learn-more:hover {
      background: var(--primary-color);
      color: var(--bg-dark);
    }
  `]
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
