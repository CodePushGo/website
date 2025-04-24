---
"title": "Using @fullstory/babel-plugin-react-native package"
"description": "A tutorial on how to install and enable the @fullstory/babel-plugin-react-native package for FullStory integration in React Native apps."
"created_at": "2021-10-21"
"published": true
---

# Using @fullstory/babel-plugin-react-native package

In this tutorial, we will walk through the steps to install and enable the `@fullstory/babel-plugin-react-native` package for integrating FullStory with React Native apps.

## Installing the Package

You can install the `@fullstory/babel-plugin-react-native` package using npm or yarn.

#### with npm

```bash
npm install @fullstory/babel-plugin-react-native --save
```

#### with yarn

```bash
yarn add @fullstory/babel-plugin-react-native
```

## Enabling the Plugin

After installing the package, you need to enable the plugin in your `babel.config.js` file. Here is an example configuration:

```javascript
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['@fullstory/react-native'],
};
```

By following these steps, you can effectively integrate FullStory with your React Native app using the `@fullstory/babel-plugin-react-native` package.

Make sure to check the official [documentation](https://help.fullstory.com/hc/en-us/articles/360052419133) for more details or reach out to mobile-support@fullstory.com for further assistance.
```