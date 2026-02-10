import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-blog',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-container">
      <div class="page-header">
        <h1>Blog & Resources</h1>
        <p>Latest insights and tips for smart home automation</p>
      </div>
      
      <div class="blog-grid">
        <article class="blog-card glass-panel" *ngFor="let post of blogPosts">
          <div class="blog-image">{{ post.icon }}</div>
          <div class="blog-meta">
            <span class="blog-date">{{ post.date }}</span>
            <span class="blog-category">{{ post.category }}</span>
          </div>
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p>
          <a href="#" class="read-more">Read More →</a>
        </article>
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
    
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: var(--spacing-lg);
    }
    
    .blog-card {
      padding: var(--spacing-lg);
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .blog-card:hover {
      transform: translateY(-5px);
      border-color: var(--primary-color);
    }
    
    .blog-image {
      font-size: 4rem;
      text-align: center;
      margin-bottom: var(--spacing-md);
    }
    
    .blog-meta {
      display: flex;
      gap: var(--spacing-md);
      margin-bottom: var(--spacing-md);
      font-size: 0.85rem;
    }
    
    .blog-date {
      color: var(--text-muted);
    }
    
    .blog-category {
      color: var(--primary-color);
      font-weight: 600;
    }
    
    .blog-card h3 {
      font-size: 1.4rem;
      margin-bottom: var(--spacing-md);
      color: var(--text-main);
    }
    
    .blog-card p {
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: var(--spacing-md);
    }
    
    .read-more {
      color: var(--primary-color);
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    
    .read-more:hover {
      transform: translateX(5px);
      display: inline-block;
    }
  `]
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
