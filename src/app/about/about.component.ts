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
  public skills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'SCSS',
    'Python',
    'C',
    'C++',
    'C#',
  ];
  public backendSkills: string[] = [
    'Node.js',
    'Nest.js',
    'Angular.js',
    'React.js',
    'Flask',
    'React Native',
    '.net',
  ];
  public roboticSkills: string[] = ['robotic.js', 'roboticdb', 'authanticator'];
}
