import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-careers',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-container">
      <div class="page-header">
        <h1>Join Our Team</h1>
        <p>Build the future of smart home technology with us</p>
      </div>
      
      <section class="company-culture glass-panel">
        <h2>Why Work at OVUM?</h2>
        <div class="culture-grid">
          <div class="culture-item">
            <div class="culture-icon">🚀</div>
            <h3>Innovation First</h3>
            <p>Work with cutting-edge technology and shape the future of home automation</p>
          </div>
          <div class="culture-item">
            <div class="culture-icon">🤝</div>
            <h3>Collaborative Team</h3>
            <p>Join a diverse team of passionate professionals who support each other</p>
          </div>
          <div class="culture-item">
            <div class="culture-icon">📈</div>
            <h3>Career Growth</h3>
            <p>Continuous learning opportunities and clear paths for advancement</p>
          </div>
          <div class="culture-item">
            <div class="culture-icon">⚖️</div>
            <h3>Work-Life Balance</h3>
            <p>Flexible schedules, remote options, and generous time off</p>
          </div>
        </div>
      </section>
      
      <section class="open-positions">
        <h2>Open Positions</h2>
        <div class="positions-list">
          <div class="position-card glass-panel" *ngFor="let position of openPositions">
            <div class="position-header">
              <h3>{{ position.title }}</h3>
              <span class="position-type">{{ position.type }}</span>
            </div>
            <div class="position-meta">
              <span>📍 {{ position.location }}</span>
              <span>💼 {{ position.department }}</span>
            </div>
            <p>{{ position.description }}</p>
            <button class="btn-apply">Apply Now</button>
          </div>
        </div>
      </section>
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
    
    .company-culture {
      padding: var(--spacing-lg);
      margin-bottom: 60px;
    }
    
    .company-culture h2 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: var(--spacing-lg);
      color: var(--primary-color);
    }
    
    .culture-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-lg);
    }
    
    .culture-item {
      text-align: center;
    }
    
    .culture-icon {
      font-size: 3rem;
      margin-bottom: var(--spacing-md);
    }
    
    .culture-item h3 {
      font-size: 1.2rem;
      margin-bottom: var(--spacing-sm);
      color: var(--text-main);
    }
    
    .culture-item p {
      color: var(--text-muted);
      line-height: 1.6;
    }
    
    .open-positions h2 {
      font-size: 2rem;
      margin-bottom: var(--spacing-lg);
      text-align: center;
    }
    
    .positions-list {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md);
    }
    
    .position-card {
      padding: var(--spacing-lg);
      transition: all 0.3s ease;
    }
    
    .position-card:hover {
      border-color: var(--primary-color);
    }
    
    .position-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-md);
    }
    
    .position-header h3 {
      font-size: 1.5rem;
      color: var(--text-main);
    }
    
    .position-type {
      padding: 6px 12px;
      background: rgba(6, 182, 212, 0.2);
      color: var(--primary-color);
      border-radius: var(--radius-sm);
      font-size: 0.85rem;
      font-weight: 600;
    }
    
    .position-meta {
      display: flex;
      gap: var(--spacing-md);
      margin-bottom: var(--spacing-md);
      color: var(--text-muted);
      font-size: 0.9rem;
    }
    
    .position-card p {
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: var(--spacing-md);
    }
    
    .btn-apply {
      padding: 10px 24px;
      background: var(--primary-color);
      color: var(--bg-dark);
      border: none;
      border-radius: var(--radius-sm);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .btn-apply:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(6, 182, 212, 0.4);
    }
  `]
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
