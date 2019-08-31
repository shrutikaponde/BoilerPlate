# Boilerplate for react-native
===========================================

All you need to start your React Native application. This project is configured with redux, redux saga 
and redux persist. Latest version of react-navigation with NavigationService.

## Directory layout

- [`app/common`](app/common): common stuff used across application
- [`app/common/actions`](app/common/actions): redux actions 
- [`app/common/api`](app/common/api): api calls e.g. login user
- [`app/common/assets`](app/common/assets): assets (image, audio files, ...) used by the application
- [`app/common/components`](app/common/components): pure components used in modules e.g. scrollview, spinner, message
- [`app/common/config`](app/common/config): configuration of the application
- [`app/common/constants`](app/common/constants): configuration of the application
- [`app/common/lib`](app/common/lib): helper libs for components/ reducers e.g. create reducer
- [`app/common/navigation`](app/common/navigation): react navigation ( navigation stck and navigation service )   
- [`app/common/reducers`](app/common/reducers): redux reducers
- [`app/common/sagas`](app/common/sagas): redux sagas
- [`app/common/services`](app/common/services): application services, e.g. application persist information
- [`app/common/store`](app/common/store): configure redux store
- [`app/common/utils`](app/common/utils): utilities e.g. scaling 
- [`app/modules`](app/modules): functionality wise distribution of container components in the application e.g. auth, home, settings, 

## Getting Started

1. Clone this repo, `git clone https://github.com/shrutikaponde/BoilerPlate.git <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder,  `rm -rf .git`
4. Open `package.json` and change the `name` property with your project name
5. Open `index.js` and replace `'BoilerPlate'` by your project name
6. Open `app.json` and replace `'BoilerPlate'` by your project name 
7. Run `yarn` or `npm install` to install dependencies
8. Connect a mobile device to your development machine
9. Run the test application:
  * On Android:
    * Run `react-native run-android`
  * On iOS:
    * Open `ios/YourReactProject.xcodeproj` in Xcode
    * Hit `Run` after selecting the desired device
10. Start coding !!!!

## Features

* [Redux](http://redux.js.org/)
* [Redux Saga](https://redux-saga.js.org/)
* [Redux Persist](https://github.com/rt2zz/redux-persist/)
* [React Navigation](https://reactnavigation.org/) 

## Prerequisites

* [Node](https://nodejs.org) v8.10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
* [Yarn](https://yarnpkg.com/)
* A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Referrrence

* [react-native-boilerplate](https://github.com/victorkvarghese/react-native-boilerplate)

## Contributing

Open for PRs