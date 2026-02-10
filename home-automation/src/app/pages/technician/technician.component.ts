import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-technician',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-container">
      <div class="page-header">
        <h1>Book a Technician</h1>
        <p>Expert installation and support for your smart home</p>
      </div>
      
      <div class="content-layout">
        <div class="booking-form glass-panel">
          <h2>Schedule a Visit</h2>
          <form>
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            
            <div class="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            
            <div class="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            
            <div class="form-group">
              <label>Service Type</label>
              <select>
                <option>Installation</option>
                <option>Maintenance</option>
                <option>Repair</option>
                <option>Consultation</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>Preferred Date</label>
              <input type="date" />
            </div>
            
            <div class="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Tell us about your requirements..."></textarea>
            </div>
            
            <button type="submit" class="btn-submit">Book Appointment</button>
          </form>
        </div>
        
        <div class="info-section">
          <div class="info-card glass-panel">
            <h3>🛠️ Expert Technicians</h3>
            <p>Our certified professionals have years of experience in smart home installation and maintenance.</p>
          </div>
          
          <div class="info-card glass-panel">
            <h3>⏰ Flexible Scheduling</h3>
            <p>We work around your schedule with same-day and weekend appointments available.</p>
          </div>
          
          <div class="info-card glass-panel">
            <h3>✅ Quality Guarantee</h3>
            <p>All work is backed by our satisfaction guarantee and comprehensive warranty.</p>
          </div>
          
          <div class="info-card glass-panel">
            <h3>📞 24/7 Support</h3>
            <p>Emergency support available around the clock for urgent issues.</p>
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
    
    .content-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-lg);
    }
    
    .booking-form {
      padding: var(--spacing-lg);
    }
    
    .booking-form h2 {
      margin-bottom: var(--spacing-lg);
      color: var(--primary-color);
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
    
    .info-section {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md);
    }
    
    .info-card {
      padding: var(--spacing-md);
    }
    
    .info-card h3 {
      font-size: 1.2rem;
      margin-bottom: var(--spacing-sm);
      color: var(--text-main);
    }
    
    .info-card p {
      color: var(--text-muted);
      line-height: 1.6;
    }
    
    @media (max-width: 968px) {
      .content-layout {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class TechnicianComponent { }
