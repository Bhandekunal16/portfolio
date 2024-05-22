import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  skills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'SCSS',
    'Python',
    'C',
    'C++',
    'C#',
  ];
  backendSkills: string[] = [
    'Node.js',
    'Nest.js',
    'Angular.js',
    'React.js',
    'Flask',
    'React Native',
    '.net',
  ];
  roboticSkills: string[] = ['robotic.js', 'roboticdb', 'authanticator'];
}
