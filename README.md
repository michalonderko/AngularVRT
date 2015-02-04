# AngularVRT
Visual regression testing angular apps.

Very ispired by [Automating CSS Regression Testing](http://css-tricks.com/automating-css-regression-testing/).

## Getting Started

To get you started you can simply install [Node.js](http://nodejs.org/) and clone the AngularVRT repository:

```
git clone https://github.com/michalonderko/AngularVRT.git
```

Then you install npm and bower dependencies:

```
npm install
bower install
```

## Run tests

### Simple DemoApp

There is prepared simple angularjs demo application. You can start it by:

```
npm start
```

### Your application

When you want test your own application, then edit `e2e-tests/protractor.conf`:

```
// write url address of your tested application
baseUrl: 'http://localhost:8234/',
```

### Execute tests

Simply type:

```
npm test
```

This command runs some tasks:

1. Remove `visual-regression-test/reference.json` and `visual-regression-test/test.json` which contain lists of screenshots to compare.
2. Clear directory `visual-regression-test/imgs-test`.
3. Update [Selenium Webdriver](http://docs.seleniumhq.org/projects/webdriver/).
4. Run [Protractor](http://angular.github.io/protractor/) (e2e testing tool). It generates screenshots to directory `visual-regression-test/imgs-test`.
5. Generate new `visual-regression-test/reference.json` and `visual-regression-test/test.json`.
6. Run application for visual regression testing.

## Workflow

After first run of tests you may simple copy images from `visual-regression-test/imgs-test` to `visual-regression-test/imgs-reference`. If you modify your application, start tests again. Reggresion testing tool shows you all visual changes. So you can decide that changes are awaited or not (bugs). If you have only awaited diffs then copy images to `visual-regression-test/imgs-reference` (make it reference).