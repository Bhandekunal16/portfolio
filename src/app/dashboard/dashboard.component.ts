import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenubarModule, ButtonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private router: Router) {}
  public item: any[] | undefined;
  public status: any = 'HI';

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

  package(): void {
    this.router.navigate(['/package']);
  }

  packageInformation(): void {
    this.router.navigate(['/package-information']);
  }

  ngOnInit() {
    this.item = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          this.initial();
        },
      },
      {
        label: 'Project',
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
      {
        label: 'Package',
        icon: 'pi pi-box',
        command: () => {
          this.package();
        },
      },
      {
        label: 'Package-information',
        icon: 'pi pi-box',
        command: () => {
          this.packageInformation();
        },
      }
    ];
  }
}
