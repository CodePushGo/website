---
title: "Hybrid update"
description: "Update methods for auto updates"
sidebar:
  order: 3
---

When pushing updates to your user you have a few ways to deal with the update cycle as you see fit before applying them.

- Silent update
- Listen for ```updateAvailable``` event
- Show a modal window or delay updates


## Silent update

You can force an update cycle to happen at every app start by setting `directUpdate` to `true`,
this will trigger the update cycle as usual without the user interaction.

```tsx
// capacitor.config.json
{
	"appId": "**.***.**",
	"appName": "Name",
	"plugins": {
		"React NativeUpdater": {
			"directUpdate": true,
		},
    "SplashScreen": {
      "launchAutoHide": false,
    }
	}
}
```

And then in your app, you should hide the splash screen when you receive the event `appReady`:

```js
import { React NativeUpdater } from '@codepushgo/capacitor-updater'
import { SplashScreen } from '@capacitor/splash-screen'

React NativeUpdater.addListener('appReady', () => {
  // Hide splash
  SplashScreen.hide()
})

React NativeUpdater.notifyAppReady()
```

## Force update

Add a listener to the event `updateAvailable` and then show an alert to let the user know the app will update:

```js
import { React NativeUpdater } from '@codepushgo/capacitor-updater'
import { Dialog } from '@capacitor/dialog'

React NativeUpdater.addListener('updateAvailable', async (res) => {
  try {
    await Dialog.alert({
      title: 'Update Available',
      message: `Version ${res.bundle.version} is available. The app will update now`,
    })
    React NativeUpdater.set(res.bundle)
  }
  catch (error) {
    console.log(error)
  }
})

React NativeUpdater.notifyAppReady()
```

## Modal update

You can also let the user decide by showing a dialog to ask them to update:

```js
import { React NativeUpdater } from '@codepushgo/capacitor-updater'
import { Dialog } from '@capacitor/dialog'

React NativeUpdater.addListener('updateAvailable', async (res) => {
  try {
    const { value } = await Dialog.confirm({
      title: 'Update Available',
      message: `Version ${res.bundle.version} is available. Would you like to update now?`,
    })

    if (value)
      React NativeUpdater.set(res.bundle)

  }
  catch (error) {
    console.log(error)
  }
})

React NativeUpdater.notifyAppReady()
```
