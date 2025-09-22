import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  imports: [],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {

  techStack = {
    frontend: [ "JavaScript", "TypeScript", "Bootstrap", "Angular" ],
    backend: [ "C#","SQL","ASP.NET Core", "ASP.NET MVC", "Node.js" ],
    cloud: [ "Azure", "AWS" ],
    tools: [ "Agile","Git", "GitHub","SSMS", "Postman", "Talend", "Visual Studio", "VS Code" ]
  }

}
