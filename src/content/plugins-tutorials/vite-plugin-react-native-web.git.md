---
"title": "Using vite-plugin-react-native-web Package Tutorial"
"description": "This tutorial will guide you through setting up and using the vite-plugin-react-native-web package in your project. It covers installation, usage, and helpful information for utilizing React Native Web support in Vite."
"created_at": "2022-01-24"
"published": true
---

# Using vite-plugin-react-native-web Package Tutorial

The `vite-plugin-react-native-web` package offers support for React Native Web in Vite projects, allowing you to remove Flow types, alias `react-native` to `react-native-web`, and transform `.js` files to `.jsx` files using ESBuild. 

## Installation

To install the plugin, simply run:

```bash
npm i vite-plugin-react-native-web -D
```

## Usage

```typescript
import reactNativeWeb from "vite-plugin-react-native-web";

export default defineConfig({
  plugins: [
    reactNativeWeb()
  ]
});
```

During Vite's build process, the following variables are defined in the transformed files:
- `global` as `self`
- `__DEV__` as `process.env.NODE_ENV === 'development'`
- `process.env.NODE_ENV` as `process.env.NODE_ENV`

If you encounter any errors, please report them in the issues section.

## Contributing

Feel free to contribute to this project by forking it and submitting a PR.

## License

MIT

This tutorial provides a step-by-step guide to help you integrate React Native Web support in your Vite project using the `vite-plugin-react-native-web` package.