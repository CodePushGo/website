---
title: React Native updater overview
description: Install and configure the CodePushGo React Native updater client.
sidebar:
  order: 1
---

The CodePushGo updater package is the React Native client that checks for available JavaScript bundle updates, downloads release metadata, reports stats, and respects channel overrides from the Worker backend.

Native bundle swapping is intentionally simplified for the current product phase. The JavaScript client and native-facing contracts are present; full native bridge/build support is deferred.

## Install

```bash
npm install @codepushgo/react-native-updater
```

## Configure

```ts
import { configureCodePushGo, startCodePushGo } from '@codepushgo/react-native-updater'

configureCodePushGo({ endpoint: 'https://api.codepushgo.com' })

await startCodePushGo({ defaultChannel: 'production' })
```

## Identity

The updater resolves the React Native bundle ID from explicit options, runtime config, native/global values, Expo config, or React Native constants. That ID is sent as both `app_id` and `bundle_id` so the backend and console stay aligned with the native app identity.

## Update scope

CodePushGo updates JavaScript bundles and assets. If you change native code, entitlements, permissions, native modules, or platform configuration, ship a new native binary through the stores.

## Backend

The updater talks to the Cloudflare Worker device endpoints:

- `/updates` checks for available releases.
- `/stats` records install/download events.
- `/channel_self` stores device channel overrides.

Supabase Edge Functions are not part of this architecture.
