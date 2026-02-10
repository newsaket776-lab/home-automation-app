import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-container">
      <div class="page-header">
        <h2>Settings</h2>
        <p class="subtitle">Customize your experience</p>
      </div>

      <div class="settings-group glass-panel">
        <h3>Profile</h3>
        <div class="setting-item">
          <div class="label">
            <span>Display Name</span>
            <p>Saket Kumar</p>
          </div>
          <button class="edit-btn">Edit</button>
        </div>
        <div class="setting-item">
           <div class="label">
            <span>Email</span>
            <p>saket&#64;example.com</p>
          </div>
        </div>
      </div>

      <div class="settings-group glass-panel">
        <h3>Preferences</h3>
        <div class="setting-item">
          <div class="label">
            <span>Dark Mode</span>
            <p>Enable dark theme across the app</p>
          </div>
          <label class="switch">
            <input type="checkbox" checked>
            <span class="slider round"></span>
          </label>
        </div>
        <div class="setting-item">
           <div class="label">
            <span>Notifications</span>
            <p>Receive alerts for security events</p>
          </div>
          <label class="switch">
            <input type="checkbox" checked>
            <span class="slider round"></span>
          </label>
        </div>
         <div class="setting-item">
           <div class="label">
            <span>Temperature Unit</span>
            <p>Celsius (°C) / Fahrenheit (°F)</p>
          </div>
          <select class="select-input">
            <option>Celsius (°C)</option>
            <option>Fahrenheit (°F)</option>
          </select>
        </div>
      </div>
      
      <div class="settings-group glass-panel">
        <h3>System</h3>
        <div class="setting-item">
          <div class="label">
            <span>Hub Version</span>
            <p>v2.4.1 (Latest)</p>
          </div>
          <button class="check-btn">Check for Updates</button>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .page-container {
      padding: var(--spacing-sm);
      max-width: 800px;
      margin: 0 auto;
    }
    
    .page-header {
      margin-bottom: var(--spacing-lg);
    }
    
    .subtitle {
      color: var(--text-muted);
    }
    
    .settings-group {
      padding: var(--spacing-lg);
      margin-bottom: var(--spacing-lg);
    }
    
    .settings-group h3 {
      margin-bottom: var(--spacing-md);
      color: var(--primary-color);
      font-size: 1.1rem;
    }
    
    .setting-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--spacing-md) 0;
      border-bottom: 1px solid var(--glass-border);
    }
    
    .setting-item:last-child {
      border-bottom: none;
    }
    
    .label span {
      display: block;
      font-weight: 500;
      margin-bottom: 4px;
    }
    
    .label p {
      font-size: 0.85rem;
      color: var(--text-muted);
    }
    
    button {
      background: transparent;
      border: 1px solid var(--glass-border);
      color: var(--text-main);
      padding: 6px 12px;
      border-radius: var(--radius-sm);
      cursor: pointer;
      transition: all 0.2s;
    }
    
    button:hover {
      background: rgba(255,255,255,0.1);
    }
    
    .edit-btn {
      color: var(--primary-color);
      border-color: var(--primary-color);
    }
    
    /* Toggle Switch (reused) */
    .switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 28px;
    }
    
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: .4s;
    }
    
    .slider:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
    }
    
    input:checked + .slider {
      background-color: var(--primary-color);
    }
    
    input:checked + .slider:before {
      transform: translateX(22px);
    }
    
    .slider.round {
      border-radius: 34px;
    }
    
    .slider.round:before {
      border-radius: 50%;
    }
    
    .select-input {
      background: var(--bg-dark);
      color: var(--text-main);
      border: 1px solid var(--glass-border);
      padding: 8px;
      border-radius: var(--radius-sm);
    }
  `]
})
export class SettingsComponent { }
