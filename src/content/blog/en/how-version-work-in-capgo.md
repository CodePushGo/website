---
slug: how-version-work-in-codepushgo
title: How version work in CodePushGo
description: >-
  Understand how CodePushGo manage versions in your React Native app, and use it at
  best. Learn the meaning of major, minor, patch.
author: Martin Donadieu
author_image_url: 'https://avatars.githubusercontent.com/u/4084527?v=4'
author_url: 'https://x.com/martindonadieu'
created_at: 2022-08-25T00:00:00.000Z
updated_at: 2023-06-29T00:00:00.000Z
head_image: /versionning.webp
head_image_alt: CodePushGo bundle version system
keywords: mobile app development, live updates, OTA updates, continuous integration, mobile app updates
tag: Tutorial
published: true
locale: en
next_blog: how-to-release-major-version-in-codepushgo
---

CodePushGo uses 2 main variables to manage versions in your React Native app:
  - Native version
  - JavaScript versions


<div class="mx-auto" style="width:100%;">
  <img src="/graph_codepushgo.webp" alt="React Native update system">
</div>

All versions choices are decided server side by CodePushGo.

## Versioning system

To manage version CodePushGo use the SemVer system, read more about it [here](https://semver.org/).
### Versions

Where CodePushGo find the version to compare

  > You can override this behavior by setting version key in `capacitor.config.json` file [docs here](/docs/plugin/settings/#version)
  > The native version will be ignored for all platforms.

#### IOS

 In IOS the var is set on your project here `ios/App/App/Info.plist` under the key`CFBundleShortVersionString` or `ios/App/App.xcodeproj/project.pbxproj` under the key `MARKETING_VERSION` if `MARKETING_VERSION` was set in your `Info.plist` file.

#### Android

  In Android, the var is set on your project here `android/app/build.gradle` under the key `defaultConfig.versionName`

#### JavaScript ( CodePushGo bundle version )

  In JavaScript, the var can be set in your `package.json` under the key `version`
  Otherwise you need to provide it in the upload command.

## Default behavior

This is how CodePushGo channel will behave if you didn't change any settings.

> This behavior will be based on the unique channel you made default.

### When Fresh installation of your React Native app
When user did download your Ionic app for the first time and opens the app it contacts CodePushGo server.

Currently, 4 outputs can happen:
  - The native bundle version (1.2.3) is lower than CodePushGo bundle version (1.2.4), CodePushGo sends his bundle to the user.
  - The native bundle version (1.2.3) is equal to CodePushGo bundle version (1.2.3), CodePushGo send “no need to update”.
  - The native bundle version (1.2.4) is higher than CodePushGo bundle version (1.2.3), CodePushGo send “no need to update”.
  - The native bundle version (1.2.3) is MAJOR lower than CodePushGo bundle version (2.2.3), CodePushGo send “no need to update”.

### Other settings

#### Disable auto-downgrade under native

If you change this setting to false, CodePushGo will consider is always the trustable source of the version.
Then the behavior become :
- The native version (1.2.4) is higher than CodePushGo version (1.2.3)

> CodePushGo sends his version to the user.

#### Disable auto-upgrade strategy

There are a couple of stategies you can chose from. You can learn more about it [here](/docs/cli/commands/#disable-updates-strategy)

## JavaScript bundle version

The JavaScript bundle version is the one you send when doing `npx @codepushgo/cli@latest bundle upload --channel production`

If you didn't use the option `--bundle 1.2.3`, CodePushGo will get the bundle version from your `package.json` file (in the version key).

After Your Ionic app has installed one version from CodePushGo, this is this version who will be compared for:
  - Their JavaScript bundle version (1.2.3) is lower than CodePushGo bundle version (1.2.4), CodePushGo send his bundle to the user.

With some guard conditions:
  - If native bundle version is higher than CodePushGo version, the `Disable auto downgrade under native` condition is applied.
  - If native bundle version is MAJOR lower than CodePushGo version, the `Disable auto upgrade above major` condition is applied.

## App store update

When you publish your React Native JS app on the App Store, what happens is simple.

Your user will get the new version from the store and remove all local updates in their app by default.

If you want to change that behavior, you need to set the setting `resetWhenUpdate` read more about it [here](/docs/plugin/api#settings)

This can only be changed on the app side, not from the cloud like other settings.

### Other settings

After all this behavior, you can have above that some specific one liked to the deviceID.

In CodePushGo, you can decide to override the behavior for each deviceID.

Yon can link one deviceID to:
  - a specific bundle version
  - a specific channel

This will bypass all the settings done above.

Learn more about it in the article below.
