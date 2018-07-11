# Angular2Prep

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Adding Angular Material

1. Install dependencies:
    ```bash
    npm i --save @angular/cdk @angular/material @angular/animations hammerjs
    ```

2. Include a theam:
In `styles.css` file
    ```javascript
    @import "~@angular/material/prebuilt-themes/indigo-pink.css";
    ```
3. Import in `app.module.ts` file
    * If you want to add animation support import the following 
     ```javascript
    `import {BrowserAnimationsModule} from '@angular/platform-browser/animations';`
     ```
    * If you DONT wish to add animation support import the following 
    ```javascript
    `import {NoopAnimationsModule} from '@angular/platform-browser/animations';`
    ```

4. Import one of the above modules in `imports` array
    ```javascript
    imports : [
        BrowserModule
        BrowserAnimationsModule
    ]
    ```