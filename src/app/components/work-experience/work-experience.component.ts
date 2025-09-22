import { Component, AfterViewInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-work-experience',
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
  standalone: true,
})
export class WorkExperienceComponent implements AfterViewInit {

  experiences = [
    {
      id: 3,
      role: 'Web Developer',
      company: 'Frontier Software Asia',
      duration: 'Present',
      info: 'July 2023 - Present'
    },
    { 
      id: 2,
      role: 'Sr. Software Engineer',
      company: 'Accenture',
      duration: '2021',
      info: 'May 2021 - June 2023'
    },
    {
      id: 1,
      role: 'Programmer II',
      company: 'Systems & Software Consulting Group Inc.',
      duration: '2018',
      info: 'March 2018 - April 2021'
    },
  ];

  ngAfterViewInit() {
    // Initialize Bootstrap tooltips
    if (typeof bootstrap !== 'undefined') {
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }
  }

}
