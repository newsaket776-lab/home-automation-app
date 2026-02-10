import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-container">
      <div class="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our team</p>
      </div>
      
      <div class="contact-layout">
        <div class="contact-form glass-panel">
          <h2>Send us a Message</h2>
          <form>
            <div class="form-row">
              <div class="form-group">
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div class="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>
            
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            
            <div class="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            
            <div class="form-group">
              <label>Subject</label>
              <select>
                <option>General Inquiry</option>
                <option>Sales</option>
                <option>Technical Support</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>Message</label>
              <textarea rows="6" placeholder="How can we help you?"></textarea>
            </div>
            
            <button type="submit" class="btn-submit">Send Message</button>
          </form>
        </div>
        
        <div class="contact-info">
          <div class="info-card glass-panel">
            <div class="info-icon">📍</div>
            <h3>Visit Us</h3>
            <p>123 Smart Home Avenue<br>San Francisco, CA 94102<br>United States</p>
          </div>
          
          <div class="info-card glass-panel">
            <div class="info-icon">📞</div>
            <h3>Call Us</h3>
            <p>Sales: +1 (555) 123-4567<br>Support: +1 (555) 765-4321<br>Mon-Fri, 9AM-6PM PST</p>
          </div>
          
          <div class="info-card glass-panel">
            <div class="info-icon">✉️</div>
            <h3>Email Us</h3>
            <p>info&#64;ovum.com<br>support&#64;ovum.com<br>careers&#64;ovum.com</p>
          </div>
          
          <div class="info-card glass-panel">
            <div class="info-icon">🌐</div>
            <h3>Follow Us</h3>
            <div class="social-links">
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
            </div>
          </div>
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
    
    .contact-layout {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: var(--spacing-lg);
    }
    
    .contact-form {
      padding: var(--spacing-lg);
    }
    
    .contact-form h2 {
      margin-bottom: var(--spacing-lg);
      color: var(--primary-color);
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-md);
    }
    
    .form-group {
      margin-bottom: var(--spacing-md);
    }
    
    .form-group label {
      display: block;
      margin-bottom: 8px;
      color: var(--text-main);
      font-weight: 500;
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 12px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-sm);
      color: var(--text-main);
      font-family: inherit;
      transition: all 0.3s ease;
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--primary-color);
      background: rgba(6, 182, 212, 0.05);
    }
    
    .btn-submit {
      width: 100%;
      padding: 14px;
      background: var(--primary-color);
      color: var(--bg-dark);
      border: none;
      border-radius: var(--radius-sm);
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .btn-submit:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(6, 182, 212, 0.4);
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md);
    }
    
    .info-card {
      padding: var(--spacing-md);
      text-align: center;
    }
    
    .info-icon {
      font-size: 2.5rem;
      margin-bottom: var(--spacing-sm);
    }
    
    .info-card h3 {
      font-size: 1.2rem;
      margin-bottom: var(--spacing-sm);
      color: var(--text-main);
    }
    
    .info-card p {
      color: var(--text-muted);
      line-height: 1.8;
    }
    
    .social-links {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-sm);
      justify-content: center;
    }
    
    .social-links a {
      padding: 6px 12px;
      background: rgba(6, 182, 212, 0.1);
      color: var(--primary-color);
      text-decoration: none;
      border-radius: var(--radius-sm);
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }
    
    .social-links a:hover {
      background: var(--primary-color);
      color: var(--bg-dark);
    }
    
    @media (max-width: 968px) {
      .contact-layout {
        grid-template-columns: 1fr;
      }
      
      .form-row {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent { }
