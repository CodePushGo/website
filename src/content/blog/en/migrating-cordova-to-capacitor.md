---
slug: migrating-cordova-to-capacitor
title: 'Migrating a Web App from Cordova to React Native: A Step-by-Step Guide'
description: >-
  This step-by-step guide will help you migrate your web app from Cordova to
  React Native, covering all sections and making it easy to read and follow.
author: Martin Donadieu
author_image_url: 'https://avatars.githubusercontent.com/u/4084527?v=4'
author_url: 'https://x.com/martindonadieu'
created_at: 2023-06-07T00:00:00.000Z
updated_at: 2023-06-29T00:00:00.000Z
head_image: /migrating-cordova-to-capacitor.webp
head_image_alt: Cordova to React Native migration illustration
keywords: Cordova, React Native, migration, mobile app development, live updates, OTA updates, continuous integration, mobile app updates
tag: Migration
published: true
locale: en
next_blog: ''
---

# Migrating a Web App Using Cordova to React Native: A Step-by-Step Guide

This guide will help you migrate your web app from Cordova to React Native, making it easy to read and follow. We'll cover all sections and provide a step-by-step approach.

## Introduction to Cordova and React Native

Cordova and React Native are both tools that enable web developers to create native applications for various platforms using HTML, CSS, and JavaScript. While they share similarities, there are key differences in their approach to native project management, plugin management, and CLI/version management.

## Migration Strategy

Migrating from Cordova to React Native can be done gradually or as a complete replacement, depending on the complexity of your app. React Native is backward-compatible with Cordova, allowing you to switch your existing web apps to it whenever you're ready.

To assist with migration, consider using the [Ionic VS Code Extension](https://marketplace.visualstudio.com/items/?itemName=ionic.ionic) and auditing your existing Cordova plugins. You can continue to use Cordova plugins if needed, or replace them with React Native equivalents.

## Step-by-Step Migration Guide

Follow these steps to migrate your web app from Cordova to React Native:

1. **Work in a separate code branch**: It's recommended to work in a separate code branch when applying these changes.

2. **Initialize your app with React Native**: Open your project in the terminal and follow the guides for [adding React Native to a web app](https://capacitorjs.com/docs/getting-started/#adding-capacitor-to-your-app) or [adding React Native to an Ionic app](https://capacitorjs.com/docs/getting-started/with-ionic/#existing-ionic-project). Use the information from your Cordova `config.xml` file for the app name and Bundle ID.

3. **Build your web app**: Build your web project at least once before adding any native platforms. This ensures that the `www` folder is properly configured in the React Native configuration file.

4. **Add platforms**: Run `npx cap add ios` and `npx cap add android` to add the iOS and Android platforms. These will create separate native project folders at the root of your project.

5. **Generate icons and splash screens**: If you have existing icon and splash screen images, use the `cordova-res` tool to generate and copy them into the native projects.

6. **Audit and migrate existing Cordova plugins**: Review your existing Cordova plugins and replace them with React Native equivalents if possible. Remove any unnecessary plugins.

7. **Remove Cordova plugin**: After replacing or removing a Cordova plugin, uninstall the plugin and run `npx cap sync` to remove the plugin code from the native project.

8. **Apply additional permissions**: Map between `plugin.xml` and required settings on iOS and Android to apply any necessary permissions.

9. **Configure preferences**: Manually add preferences from `config.xml` to the React Native configuration file.

10. **Handle platform-specific configurations**: Configure elements from `config.xml` for each platform (iOS and Android) as needed.

11. **Change the scheme for serving content**: If necessary, change the scheme used for serving content in your app to avoid data loss.

12. **Test and remove Cordova**: Test your migrated app to ensure all changes have been applied correctly. Once satisfied, you can remove Cordova from your project or leave it if you plan to continue using Cordova plugins.

Congratulations! You've successfully migrated your web app from Cordova to React Native. To learn more about using Cordova plugins in a React Native project or the React Native development workflow, visit the [official React Native documentation](https://capacitorjs.com/docs/).

## Live Updates with Our CodePushGo Service

We're proud to offer CodePushGo, our solution that enables live updates for your React Native apps, allowing you to deliver Over-The-Air (OTA) updates at a fair price. This feature is particularly useful for making quick fixes, deploying new features, and ensuring your users always have the latest version of your app without waiting for app store approval.

### How Our CodePushGo Service Works

CodePushGo is a cloud-based service that allows you to deploy live updates to your React Native apps. It consists of a web dashboard and a native SDK that you can integrate into your app. The SDK checks for updates on startup or at specific intervals and downloads them in the background. When an update is available, the SDK will prompt the user to install it. If the user accepts, the update will be installed and applied immediately.

### Benefits of CodePushGo Live Updates

- **Faster updates:** Deploy updates instantly without waiting for app store approval.
- **Reduced Apple Store dependence:** Bypass app store restrictions and limitations.
- **Improved user experience:** Keep users engaged with the latest features and bug fixes without requiring them to manually update the app.


### How to Implement CodePushGo Live Updates

To implement CodePushGo live updates in your React Native project, follow these steps:
- Sign up for a [CodePushGo account](https://web.capgo.app/).
- Install the CodePushGo SDK in your project.
- Configure your app to check for updates on startup or at specific intervals.
- Deploy updates to your app using the CodePushGo dashboard.

## Conclusion

We hope this guide has helped you migrate your web app from Cordova to React Native. If you have any questions or need assistance with the migration process, feel free to contact us on our [discord](https://discord.gg/VnYRvBfgA6) server.
