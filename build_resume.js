const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat,
  BorderStyle, TabStopType,
} = require('docx');

const FONT = 'Calibri';
const RIGHT_TAB = 10080; // content width for Letter with 0.75" margins

const run = (text, opts = {}) => new TextRun({ text, font: FONT, size: 20, ...opts });

const section = (title) => new Paragraph({
  spacing: { before: 200, after: 80 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '2E5A88', space: 2 } },
  children: [run(title, { bold: true, size: 22, color: '2E5A88' })],
});

const bullet = (text) => new Paragraph({
  numbering: { reference: 'bullets', level: 0 },
  spacing: { after: 20 },
  children: [run(text)],
});

const jobHeader = (left, right) => new Paragraph({
  tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
  spacing: { before: 120, after: 20 },
  children: [run(left, { bold: true }), run('\t' + right, { bold: true })],
});

const subRole = (title, dates) => new Paragraph({
  tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
  spacing: { after: 20 },
  children: [run(title, { italics: true }), run('\t' + dates, { italics: true })],
});

const labeled = (label, text) => new Paragraph({
  spacing: { after: 30 },
  children: [run(label + ': ', { bold: true }), run(text)],
});

const project = (name, type) => new Paragraph({
  spacing: { before: 80, after: 20 },
  children: [run(name, { bold: true }), run(' | ' + type, { italics: true })],
});

const children = [
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [run('CHRISTIAN TANIA', { bold: true, size: 32 })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [run('Full Stack Web Developer', { size: 22 })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 80 },
    children: [run('San Jose Del Monte, Bulacan, Philippines | +63 935 319 8827 | tania.dev.ph@gmail.com')],
  }),

  section('PROFESSIONAL SUMMARY'),
  new Paragraph({
    children: [run(
      'Full Stack Web Developer with 8+ years of experience building and maintaining web applications and backend ' +
      'services using C#, ASP.NET Core, Angular, and SQL Server. Experienced in microservice architecture, Azure ' +
      'DevOps pipelines, AWS serverless services, and Azure Databricks. Has served as Developer Lead, conducting ' +
      'code reviews and managing release branches.'
    )],
  }),

  section('TECHNICAL SKILLS'),
  labeled('Languages', 'C#, JavaScript, TypeScript, Python, SQL'),
  labeled('Frameworks and Libraries', 'ASP.NET Core, ASP.NET MVC, Angular, RxJS, NGXS, ReactJS, Node.js, KnockoutJS, Bootstrap, Syncfusion, Serilog, Autofac, Xamarin'),
  labeled('Cloud and DevOps', 'Azure, Azure DevOps (Azure Pipelines, Azure Repos), Azure Databricks, Azure MSAL / Microsoft Entra ID, AWS Lambda, AWS API Gateway, AWS Serverless, AWS CloudWatch, IIS'),
  labeled('Databases', 'Microsoft SQL Server (MSSQL), Stored Procedures, Views, Functions'),
  labeled('Tools and Practices', 'Git, GitHub, Postman, Talend, Agile/Scrum, Microservice Architecture, REST APIs, JWT Authentication, Unit Testing, Code Review'),

  section('PROFESSIONAL EXPERIENCE'),

  jobHeader('Senior Back End Developer, KPMG Philippines', 'January 2026 - September 2026'),
  bullet('Integrated third-party APIs using Python.'),
  bullet('Built a Python wheel package and deployed it to Azure Databricks.'),
  bullet('Implemented Azure MSAL (Microsoft Entra ID) authentication in a ReactJS application.'),
  bullet('Developed a team dashboard application.'),

  jobHeader('Web Developer, Frontier Software Asia, Inc.', 'July 2023 - January 2026'),
  bullet('Developed backend services using microservice architecture with C# and ASP.NET Core 9.'),
  bullet('Designed the initial microservice architecture; implemented Serilog for logging, JWT Bearer token authentication, and dependency injection with Autofac; developed middleware for decrypting user credentials.'),
  bullet('Created an Azure Pipelines YAML pipeline to package the microservice.'),
  bullet('Created sprint release branches for the testing phase in Azure Repos.'),
  bullet('Developed and maintained three existing applications (Organizational Chart, Payslip Portal, and Payslip Verification) using Angular 12, RxJS, and NGXS.'),
  bullet('Built mobile-responsive interfaces, fixed client-reported bugs, and wrote unit tests for services and components.'),
  bullet('Created HTTP interceptors, implemented API request and response encryption, and implemented lazy loading for data retrieval.'),
  bullet('Integrated the Syncfusion library into the Organizational Chart application.'),

  jobHeader('Accenture, Inc.', 'May 2021 - June 2023'),
  subRole('Software Engineering Senior Analyst', 'June 2022 - June 2023'),
  subRole('Software Engineering Analyst', 'May 2021 - May 2022'),
  bullet('Served as Developer Lead.'),
  bullet('Converted C# web services to C# ASP.NET Core services.'),
  bullet('Managed branching for minor releases using Azure Repos (Git).'),
  bullet('Uploaded deployment scripts to higher environments using Azure Pipelines.'),
  bullet('Developed and maintained web applications using Angular 14.'),
  bullet('Created AWS Lambda functions using Node.js.'),
  bullet('Created and updated SQL Server stored procedures, views, and functions.'),
  bullet('Conducted code reviews.'),
  bullet('Assessed user stories and presented them in team meetings.'),

  jobHeader('Systems & Software Consulting Group, Inc.', 'March 2018 - April 2021'),
  subRole('Programmer II', 'April 2020 - April 2021'),
  subRole('Programmer I', 'March 2018 - April 2020'),
  bullet('Developed backend services using C# ASP.NET MVC API and MSSQL.'),
  bullet('Developed and maintained system features using Angular 4, KnockoutJS, and Bootstrap.'),
  bullet('Deployed systems on client servers using IIS.'),
  bullet('Created and updated SQL stored procedures, views, and functions.'),
  bullet('Participated in User Acceptance Testing with clients.'),

  section('PROJECTS'),
  project('Agent Loan Application System', 'Web Application'),
  bullet('Developed from scratch using C# (ASP.NET MVC, Entity Framework), Angular 4, and MSSQL, with a Xamarin mobile application.'),
  project('Investment Management Information System (IMIS)', 'Web Application'),
  bullet('Developed and maintained using C# (ASP.NET MVC, Entity Framework), KnockoutJS, and MSSQL.'),
  project('Inventory Management System', 'Personal Project'),
  bullet('Built a fully functional inventory system to add, edit, and delete products.'),
  bullet('Developed using Angular v18 (front end), ASP.NET Core 8 (back end), and MSSQL (database).'),
  project('Resume Builder', 'Personal Project'),
  bullet('Built a resume builder where users enter their data and generate a professionally formatted resume exported to PDF with one click.'),
  bullet('Developed using Angular v18, jsPDF for PDF export, NGXS for state management, and Bootstrap for styling.'),
  project('FreeSkwela', 'Personal Project'),
  bullet('Built a landing page listing free trainings and hackathons in the Philippines, with data fetched from a REST API.'),
  bullet('Developed using Angular v20 and Bootstrap.'),

  section('EDUCATION'),
  jobHeader('Bachelor of Science in Information Technology, Isabela State University', 'June 2011 - April 2015'),
];

const doc = new Document({
  numbering: {
    config: [{
      reference: 'bullets',
      levels: [{
        level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 360, hanging: 240 } } },
      }],
    }],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1080, bottom: 1080, left: 1080, right: 1080 },
      },
    },
    children,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync('Christian_Tania_Resume.docx', buf);
  console.log('written');
});
