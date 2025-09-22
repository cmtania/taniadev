import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { HeaderComponent } from '../header/header.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

@Component({
  selector: 'app-layout',
  imports: [
    HeaderComponent,
    AboutComponent,
    WorkExperienceComponent,
    TechStackComponent,
    ProjectsComponent,
    ContactDetailsComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
