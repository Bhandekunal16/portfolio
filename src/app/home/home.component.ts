import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  About(): void {
    this.router.navigate(['/about']);
  }

  personalInfo: { name: string; email: string; contact: string } = {
    name: 'Kunal Eknath Bhande',
    email: 'bhandekunal16@gmail.com',
    contact: '8779143048',
  };
}
