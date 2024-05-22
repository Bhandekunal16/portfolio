import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private router: Router) {}

  About(): void {
    this.router.navigate(['/about']);
  }

  contact(): void {
    this.router.navigate(['/contact']);
  }

  service(): void {
    this.router.navigate(['/service']);
  }

  initial(): void {
    this.router.navigate(['']);
  }
  

  item: any[] | undefined;

  ngOnInit() {
    this.item = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          this.initial();
        }
      },
      {
        label: 'Service',
        icon: 'pi pi-briefcase',
        command: () => {
          this.service();
        },
      },
      {
        label: 'About',
        icon: 'pi pi-user',
        command: () => {
          this.About();
        },
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        command: () => {
          this.contact();
        },
      },
    ];
  }
}
