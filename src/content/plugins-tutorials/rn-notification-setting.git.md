---
"title": "Using rn-notification-setting Package Tutorial"
"description": "Learn how to use the rn-notification-setting package in your React Native project to customize notification settings, check status, and more."
"created_at": "October 28, 2021"
"published": true
---

# Using rn-notification-setting Package Tutorial

If you want to integrate notification settings in your React Native project, the `rn-notification-setting` package can help you achieve that. This tutorial will guide you through the installation, usage, and API of this package.

## Installation

To install the `rn-notification-setting` package, run:

```bash
npm install rn-notification-setting
```

For older React Native versions, make sure to link the package manually.

## Usage

Here's an example of how to use the `rn-notification-setting` plugin in your React Native project:

```javascript
import React from "react";
import { Text } from "react-native";
import { useNotificationSettingListner } from "rn-notification-setting";
import { FirebaseMessagingTypes } from "@react-native-firebase/messaging";

const App = () => {
  const notificationSetting = FirebaseMessagingTypes.AuthorizationStatus.AUTHORIZED;
  const { notificationAllowed, setNotificationAllowed } = useNotificationSettingListner(notificationSetting);

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
```
