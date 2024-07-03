import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private router: Router) {}
  public item: any[] | undefined;
  public status: any = 'HI';

  private About(): void {
    this.router.navigate(['/about']);
  }

  private contact(): void {
    this.router.navigate(['/contact']);
  }

  private service(): void {
    this.router.navigate(['/service']);
  }

  private initial(): void {
    this.router.navigate(['']);
  }

  private package(): void {
    this.router.navigate(['/package']);
  }

  private packageInformation(): void {
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
      },
    ];
  }
}
