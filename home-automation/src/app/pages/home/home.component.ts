import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-container">
      <section class="hero">
        <div class="hero-content">
          <h1>Welcome to OVUM Smart Node</h1>
          <p class="hero-subtitle">Intelligent Home Automation Solutions</p>
          <p class="hero-description">
            Transform your living space with cutting-edge smart home technology. 
            Control lighting, climate, security, and more from anywhere.
          </p>
          <div class="cta-buttons">
            <button class="btn-primary">Get Started</button>
            <button class="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>
      
      <section class="features">
        <h2>Why Choose OVUM?</h2>
        <div class="features-grid">
          <div class="feature-card glass-panel">
            <div class="feature-icon">🏠</div>
            <h3>Smart Control</h3>
            <p>Manage all your devices from a single, intuitive interface</p>
          </div>
          <div class="feature-card glass-panel">
            <div class="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Enterprise-grade security to protect your home and data</p>
          </div>
          <div class="feature-card glass-panel">
            <div class="feature-icon">⚡</div>
            <h3>Energy Efficient</h3>
            <p>Optimize energy usage and reduce your carbon footprint</p>
          </div>
          <div class="feature-card glass-panel">
            <div class="feature-icon">📱</div>
            <h3>Remote Access</h3>
            <p>Control your home from anywhere in the world</p>
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
    
    .hero {
      text-align: center;
      padding: 80px 20px;
      background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
      border-radius: var(--radius-lg);
      margin-bottom: var(--spacing-lg);
    }
    
    .hero-content h1 {
      font-size: 3rem;
      margin-bottom: var(--spacing-md);
      background: linear-gradient(135deg, var(--primary-color), #3b82f6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .hero-subtitle {
      font-size: 1.5rem;
      color: var(--text-main);
      margin-bottom: var(--spacing-md);
    }
    
    .hero-description {
      font-size: 1.1rem;
      color: var(--text-muted);
      max-width: 600px;
      margin: 0 auto var(--spacing-lg);
      line-height: 1.6;
    }
    
    .cta-buttons {
      display: flex;
      gap: var(--spacing-md);
      justify-content: center;
    }
    
    .btn-primary, .btn-secondary {
      padding: 12px 32px;
      font-size: 1rem;
      font-weight: 600;
      border-radius: var(--radius-sm);
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
    }
    
    .btn-primary {
      background: var(--primary-color);
      color: var(--bg-dark);
    }
    
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(6, 182, 212, 0.4);
    }
    
    .btn-secondary {
      background: transparent;
      color: var(--primary-color);
      border: 2px solid var(--primary-color);
    }
    
    .btn-secondary:hover {
      background: rgba(6, 182, 212, 0.1);
    }
    
    .features {
      padding: 60px 20px;
    }
    
    .features h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: var(--spacing-lg);
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-lg);
    }
    
    .feature-card {
      padding: var(--spacing-lg);
      text-align: center;
      transition: all 0.3s ease;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      border-color: var(--primary-color);
    }
    
    .feature-icon {
      font-size: 3rem;
      margin-bottom: var(--spacing-md);
    }
    
    .feature-card h3 {
      font-size: 1.3rem;
      margin-bottom: var(--spacing-sm);
      color: var(--primary-color);
    }
    
    .feature-card p {
      color: var(--text-muted);
      line-height: 1.6;
    }
    
    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2rem;
      }
      
      .hero-subtitle {
        font-size: 1.2rem;
      }
      
      .cta-buttons {
        flex-direction: column;
      }
    }
  `]
})
export class HomeComponent { }
