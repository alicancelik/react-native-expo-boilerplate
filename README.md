# react-native-expo-boilerplate
# React Native Boilerplate

## Features
- [x] Redux setup
- [x] Applied ESLint settings
- [x] Sentry Configuration
- [x] Translate
- [x] SignIn, SignOut, Authenticate
- [x] Remote Redux DevTools Configuration

## Libraries in the boilerplate

- expo
- react-navigation
- react-redux
- redux
- redux-thunk
- sentry-expo
- i18n-js

## How to Use

1. Download zip
2. Update `app.json`
```
 "name": "your-app-name",
 "slug": "your-app-name",
```
3. `yarn install` or `npm install`
4. To open devTools run `npm run debug`
5. To running on simulator or emulator run `npm run ios` or `npm run android`
6. To running test run `npm run test`

## Sentry 
 
- When you decide to use Sentry , remove comment lines in App.js and use your DSN


## SignOut, SignIn and Auth request

- You have to set your URL in Config.js and file of actions.