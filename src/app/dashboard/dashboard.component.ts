import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  item: any[] | undefined;

  ngOnInit() {
    this.item = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Service',
        icon: 'pi pi-briefcase',
      },
      {
        label: 'About',
        icon: 'pi pi-user',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
      },
    ];
  }
}
