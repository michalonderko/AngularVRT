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

## Run simple DemoApp

For example there is prepared simple angularjs demo application. You can start it by:

```
npm start
```

## Run tests

Simply type:

```
npm test
```

This command runs some tasks:

1. Remove `visual-regression-test/reference.json` and `visual-regression-test/test.json` which contain lists of screenshots to compare.
2. Clear directory `visual-regression-test/imgs-test`.
3. Updates webdriver.
4. Runs protractor (e2e tests). It generates screenshots to directory `visual-regression-test/imgs-test`.
5. Generates new `visual-regression-test/reference.json` and `visual-regression-test/test.json`.
6. Runs application for visual regression testing.