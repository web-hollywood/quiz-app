# Quiz App

## Quick Overview

Make sure you have Node v6 or later installed. No Xcode or Android Studio installation is required.

Clone this repo

```sh
$ npm install -g expo-cli
$ git clone https://github.com/web-hollywood/quiz-app.git
$ cd quiz-app
$ yarn install or npm install
$ yarn start or npm start
```

The `yarn start or npm start` command starts the Expo CLI server. You can now run the project on your phone by using the Expo app.

### Android

- Install the [Expo](https://expo.io) app on your Android device.
- Scan the QR code in your terminal from the Expo app to run the project on your phone.
- Alternatively you can press 's' in the terminal and sign in with an Expo account, and sign in with the same account in the Expo app: your projects will automatically appear in the "Projects" tab.

### iOS

- Install the [Expo](https://expo.io) app on your iOS device.
- Press 'e' in the terminal to send the app link to your email address or phone number. This link can be used to run your project from the Expo app.
- Alternatively you can press 's' in the terminal and sign in with an Expo account, and sign in with the same account in the Expo app: your projects will automatically appear in the "Projects" tab.

Expo CLI allows you to work with all of the [Components and APIs](https://facebook.github.io/react-native/docs/getting-started.html) in React Native, as well as the [JavaScript APIs](https://docs.expo.io/versions/latest/sdk/index.html) that the Expo app provides.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

#### Manual Installation for Android

You can manually install `/apk/quiz-app.apk` file on your Android device.