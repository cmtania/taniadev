import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  imports: [],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {

  techStack = {
    frontend: [ "JavaScript", "TypeScript", "Angular", "RxJS", "NGXS", "ReactJS", "Bootstrap" ],
    backend: [ "C#", "SQL", "ASP.NET Core", "ASP.NET MVC", "Node.js", "Python", "Microservices", "REST APIs" ],
    cloud: [ "Azure", "Azure DevOps", "Azure Databricks", "AWS Lambda", "AWS API Gateway", "IIS" ],
    tools: [ "Agile","Git", "GitHub","SSMS", "Postman", "Talend", "Visual Studio", "VS Code" ]
  }

}
