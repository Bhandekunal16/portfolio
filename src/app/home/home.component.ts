import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  public personalInfo: { name: string; email: string; contact: string } = {
    name: 'Kunal Eknath Bhande',
    email: 'bhandekunal16@gmail.com',
    contact: '8779143048',
  };

  public information: Array<{ name: string; from: string; to: string }> = [
    {
      name: 'Software Developer at Network People Service Technology',
      from: 'from : 3 Nov 2022',
      to: 'to : present',
    },
  ];

  About(): void {
    this.router.navigate(['/about']);
  }
}
