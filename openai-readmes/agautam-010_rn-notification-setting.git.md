# rn-notification-setting

A React Native plugin to determine if notification setting is toggled on both Android and iOS platforms.

## Features

- Enable or disable notifications
- Check notification status
- Customize notification settings

## Installation

To install the plugin, run:

```bash
npm install rn-notification-setting
```

## Linking

If you are using React Native 0.60 or above, the package should be automatically linked. For older versions, you may need to link the package manually:

```bash
react-native link rn-notification-setting
```

For iOS, make sure to run:

```bash
cd ios/
pod install
```

## Usage

Here's an example of how to use the `rn-notification-setting` plugin in your React Native project:

```javascript
import React from "react";
import { Text } from "react-native";
import { useNotificationSettingListner } from "rn-notification-setting";
import { FirebaseMessagingTypes } from "@react-native-firebase/messaging";

const App = () => {
  const notificationSetting =
    FirebaseMessagingTypes.AuthorizationStatus.AUTHORIZED;
  const { notificationAllowed, setNotificationAllowed } =
    useNotificationSettingListner(notificationSetting);

  return <Text>{notificationAllowed ? "Allowed" : "Not Allowed"}</Text>;
};

export default App;
```

## API

### `useNotificationSettingListner(notificationSetting)`

A custom hook to listen for changes in notification settings.

**Parameters:**

- `notificationSetting`: The initial notification setting status.

**Returns:**

- `notificationAllowed`: The current notification setting status.
- `setNotificationAllowed`: Function to manually set the notification setting status.

## Contributing

Contributions are welcome! Please read the CONTRIBUTING.md for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
