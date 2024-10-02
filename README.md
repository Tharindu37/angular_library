# MyWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Setup
Use the Angular CLI to generate a new library skeleton in a new workspace with the following commands.
```
ng new my-workspace --no-create-application
cd my-workspace
ng generate library my-lib
```

Build, test, and lint the project with CLI commands
```
ng build my-lib --configuration development
ng test my-lib
ng lint my-lib
```

Publishing your library
```
ng build my-lib
cd dist/my-lib
npm publish
```
```
npm login
```

Use library
```
ng generate application my-app
```
```
npm install my-lib
```
If you’re using a local version of your library, install it like this
```
npm install ../dist/my-lib
```
```
import { Component } from '@angular/core';
import { MyLibComponent } from 'my-lib'; // Adjust this if using a local version

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyLibComponent], // Import the standalone component
  template: `
    <h1>My Application</h1>
    <lib-my-lib message="This is a success message!" type="success"></lib-my-lib>
  `,
})
export class AppComponent {}
```
```
ng serve
```