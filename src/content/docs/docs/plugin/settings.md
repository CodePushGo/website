---
title: "Settings"
description: "All available settings for Capacitor Updater, all the configuration you can set in you capacitor config and what they used for"
sidebar:
  order: 8
---

To have more fine-grained control over the update system, you can configure it with these settings:

## `appReadyTimeout` 

> Configure the number of milliseconds the native plugin should wait before considering an update 'failed'.

Only available for Android and iOS.

Default: `10000` (10 seconds)

```json
// capacitor.config.json
{
  "plugins": {
    "CapacitorUpdater": {
      "appReadyTimeout": 1000
    }
  }
}
```

## `responseTimeout` 

> Configure the number of milliseconds the native plugin should wait before considering API timeout.

Only available for Android and iOS.

Default: `20` (20 second)

```json
// capacitor.config.json
{
  "plugins": {
    "CapacitorUpdater": {
      "responseTimeout": 1000
    }
  }
}
```

## `autoDeleteFailed` 

> Configure whether the plugin should automatically delete failed bundles.

Only available for Android and iOS.

Default: `true`

```json
// capacitor.config.json
{
  "plugins": {
    "CapacitorUpdater": {
      "autoDeleteFailed": false
    }
  }
}
```

## `autoDeletePrevious` 

> Configure whether the plugin should automatically delete previous bundles after a successful update.

Only available for Android and iOS.

Default: `true`

```json
// capacitor.config.json
{
  "plugins": {
    "CapacitorUpdater": {
      "autoDeletePrevious": false
    }
  }
}
```

## `autoUpdate`

> Configure how the plugin should use Auto Update via an update server.

Only available for Android and iOS.

Default: `true`

Boolean values keep their previous behavior:

- `true`: same as `"atBackground"`
- `false`: same as `"off"`

String values let you choose the full update policy:

- `"off"`: disable Auto Update.
- `"atBackground"`: check and download updates automatically, then apply them the next time the app moves to background.
- `"atInstall"`: direct install only after app install or native app update, otherwise use `"atBackground"` behavior.
- `"onLaunch"`: direct install on app launch, otherwise use `"atBackground"` behavior after the first launch attempt.
- `"always"`: direct install whenever Auto Update runs.
- `"onlyDownload"`: check and download updates automatically and emit `updateAvailable`, but never direct install or set the next bundle automatically.

```json
// capacitor.config.json
{
  "plugins": {
    "CapacitorUpdater": {
      "autoUpdate": "onlyDownload"
    }
  }
}
```

Use `"onlyDownload"` when you want Capgo to download updates in the background but keep full control over when the app applies them.

## `updateUrl` 

> Configure the URL / endpoint to which update checks are sent.

Only available for Android and iOS.

Default: `https://api.capgo.app/updates`

```json
// capacitor.config.json
{
  "plugins": {
    "CapacitorUpdater": {
      "updateUrl": "https://example.com/api/updates"
    }
  }
}
```

## `statsUrl` 

> Configure the URL / endpoint to which update statistics are sent.

Only available for Android and iOS. Set to "" to disable stats reporting.

Default: `https://api.capgo.app/stats`

```json
// capacitor.config.json
{
  "plugins": {
    "CapacitorUpdater": {
      "statsUrl": "https://example.com/api/stats"
    }
  }
}
```

## `privateKey` 

> Configure the private key for end-to-end live update encryption.

Only available for Android and iOS.

Create the private key with the command `npx @capgo/cli key create`

Default: `undefined`

```json
// capacitor.config.json
{
  "plugins": {
    "CapacitorUpdater": {
      "privateKey": "YOUR_KEY"
    }
  }
}
```

## `directUpdate`

> Deprecated. Use the `autoUpdate` string modes instead.

The old `directUpdate` setting is still supported for backward compatibility, but new configuration should use `autoUpdate: "atInstall"`, `autoUpdate: "onLaunch"`, or `autoUpdate: "always"`.

Only available for Android and iOS.

Default: `false`

```json
// capacitor.config.json
{
  "plugins": {
    "CapacitorUpdater": {
      "autoUpdate": "always"
    }
  }
}
```

## `resetWhenUpdate` 

:::note
When an store update happens, disable force reset to the native version
:::

There are many more settings avaialble only on the [web app](https://web.capgo.app/login)


To configure the plugin, use these settings:

```json
// capacitor.config.json
{
  "plugins": {
    "CapacitorUpdater": {
      "autoUpdate": "atBackground",
      "resetWhenUpdate": false
    }
  }
}
```

## `defaultChannel`
Set the default channel for the app. This will override any other channel set in CodePushGo if the channel allows overwriting. 

> The channel name is case sensitive

```json
// capacitor.config.json
{
  "plugins": {
    "CapacitorUpdater": {
      "defaultChannel": "production"
    }
  }
}
```

## `appId`
Set the appId for the app. This will override any other way to get the appId. This is useful when you want to have a different appId in CodePushGo and in your native code.
:::note
This is the new way to set the appId. The old way is still and will stay supported.
:::
```json
// capacitor.config.json
{
  "plugins": {
    "CapacitorUpdater": {
      "AppId": "com.example.app"
    }
  }
}
```

## `version`
Set the version for the app. This will override any other way to get the version. This is useful when you want to have a different version in CodePushGo and in your native code.
:::note
This is the new way to set the version. The old way is still and will stay supported.
:::
```json
// capacitor.config.json
{
  "plugins": {
    "CapacitorUpdater": {
      "version": "1.2.3"
    }
  }
}
```
