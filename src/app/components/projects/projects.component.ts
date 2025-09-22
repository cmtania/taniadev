import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      name: 'FreeSkwela',
      description: 'Discover free training programs to advance your career',
      link: 'https://freeskwela.vercel.app/',
      site: 'freeskwela.vercel.app'
    },
    {
      id: 2,
      name: 'Resume Builder',
      description: 'Build your professional resume in just a few minutes!',
      link: 'https://resume-builder-pied-two.vercel.app/',
      site: 'resume-builder.vercel.app'
    },
    {
      id: 3,
      name: 'Philippine Tax & Salary Calculator',
      description: 'Calculate your net salary with the current tax rates and contributions',
      link: 'https://ph-tax-salary-calculator.vercel.app/',
      site: 'ph-tax-salary-calculator.vercel.app'
    },
    {
      id: 4,
      name: 'Work From Anywhere',
      description: 'Sample landing page for job postings.',
      link: 'https://work-from-anywhere.vercel.app/',
      site: 'work-from-anywhere.vercel.app'
    }
  ]

}
