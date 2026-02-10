import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { TechnicianComponent } from './pages/technician/technician.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'technician', component: TechnicianComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '/home' }
];
