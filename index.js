/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { LogLevel, OneSignal } from 'react-native-onesignal';
// Remove this method to stop OneSignal Debugging
OneSignal.Debug.setLogLevel(LogLevel.Verbose);

// OneSignal Initialization
OneSignal.initialize("c3a91cfa-556e-4d6a-bac2-2b2c9dffbc79");

// requestPermission will show the native iOS or Android notification permission prompt.
// We recommend removing the following code and instead using an In-App Message to prompt for notification permission
OneSignal.Notifications.requestPermission(true);

// Method for listening for notification clicks
OneSignal.Notifications.addEventListener('click', (event) => {
  console.log('OneSignal: notification clicked:', event);
});

AppRegistry.registerComponent(appName, () => App);
