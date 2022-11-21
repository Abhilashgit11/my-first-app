# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

-------------Angular tutorial from Udemy with Maximilian-----------------
-------------Angular 8 The Complete Guide-----------------

<!-- 1. Getting Started -->

1. Created this app with command "ng new my-first-app".
2. Installed bootstrap (within this app, not globally) with "npm i bootstrap".
3. Added the path to bootstrap.min.css file in angular.json file under styles.
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
4. Added <input> and <p> tag in app.component.html and imported "FormsModule" in app.module.ts

<!-- 2. The Basics -->
1. Created a component with command "ng g c servers". It automatically adds the declaration in app.module.ts.
2. For inline html we can try the following approach
@Component({
  selector: 'app-root',
  template: `<app-servers></app-servers>`,
  styleUrls: ['./app.component.css']
})
3. 2.12 Assignment: Created two components "WarningAlert and SuccessAlert" through the command "ng g c WarningAlert" and "ng g c SuccessAlert" and added CSS styling to it.
4. 2.13 Types of Binding
  4.1 String Interpolation eg. <p>Server One: ID: {{serverId}} STATUS: {{serverStatus}} // Default</p>
  4.2 Property Binding eg. <button class= "btn btn-primary" [disabled] = "!addServer">Add Server</button><br />
  4.3 Event Binding eg. <button class = "btn btn-primary" [disabled] = "!addServer" (click) = "onCreateServer()">Add Server</button>
  4.4 Two-way Databinding <input type="text" class="form-control" [(ngModel)] = "serverName">
5. 2.26 Directives
  5.1 *ngIf : prints something based on a condition. eg. <p *ngIf = "isServerCreated">Server is created! server name is {{serverName}}</p>
  5.2 [ngStyle] : Adds CSS styles to a tag. 
      eg. <p [ngStyle] = "{color: getTextColor()}">Server One: ID: {{serverId}} STATUS: {{serverStatus}} // Default</p>
      The above line prints the text in green.
  5.3 [ngClass] : Adds or doesnot add CSS classes. It can be done in 5- 6 ways. Look at server.component.ts, server.component.css, server.component.html
  5.4 [ngFor] : With *ngFor we can re-use a component.
      In the below example the componet "<app-server>" is rendered twice on the web page because the array variable "servers" has two elements
      eg. In servers.component.html
          <div class = "servers">
            <app-server *ngFor = "let server of servers"></app-server>
          </div>
          In servers.component.ts
          servers = ['Testserver', 'Testserver 2'];
6. 2.32 Assignment 3: display-details component
  6.1 Add A button which says 'Display Details'
  6.2 Add a paragraph with any content of your choice (e.g. ' Secret Passwo rd = tuna')
  6.3 Toggle the displaying of that paragraph with the button created in the first step
  6.4 Log all button clicks in an array and output that array below the secret paragraph
  (maybe Log a timestamp or simply an incrementing number) 
  6.5 Starting at the 5th log item, give all future log items a blue background (via
  ngstyle) and white color (ngclass ) 
