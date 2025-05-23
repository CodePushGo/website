---
title: Kanalsystem
description: capacitor-updater와 채널 시스템을 사용하는 방법
sidebar:
  order: 6
locale: ko
---

Capgo와 capacitor-updater는 강력한 채널 시스템을 제공합니다

## 채널로 할 수 있는 것:

* 개발, 베타 테스트를 위해 기기를 채널에 연결
* 개발 브랜치당 하나의 채널을 사용하고 팀원이 휴대폰에서 자체 할당하여 테스트

## 기기를 채널에 할당하기:

* 채널을 기본값으로 설정하면 새로운 기기가 CodePushGo에 업데이트를 요청할 때마다 이 채널이 응답
* [**getDeviceId**](/docs/plugin/api#getdeviceid) 메소드로 **deviceId**를 백엔드에 전송하고 CodePushGo 공개 API로 할당
* 채널을 자체 할당 가능하도록 설정([**setChannel**](/docs/plugin/api#setchannel) 메소드)하고 플러그인의 `setChannel` 메소드를 사용하여 기기가 채널을 구독하도록 함(사용자 상호작용 여부 선택)
* [config](/docs/plugin/settings#defaultchannel)의 `defaultChannel` 옵션을 사용하여 이 플러그인 구성의 모든 기기에 대한 기본 채널 설정

:::note
기기를 번들에 직접 할당할 수도 있습니다
:::

## 채널 옵션

<figure><img src="/channel_setting_1.webp" alt=""><figcaption></figcaption></figure>

각 옵션에 대한 설명:

| 옵션 | 설명 |
| --- | --- |
| **네이티브 버전 이하로 자동 다운그레이드 비활성화** | 앱의 네이티브 버전이 채널 버전보다 큰 경우 업데이트를 보내지 않음 |
| **메이저 버전 이상으로 자동 업그레이드 비활성화** | 앱의 네이티브 버전이 채널의 메이저 버전(**1**23)보다 낮은 경우 업데이트를 보내지 않음 |
| **마이너 버전 이상으로 자동 업그레이드 비활성화** | 앱의 네이티브 버전이 채널의 마이너 버전(1**2**3)보다 낮은 경우 업데이트를 보내지 않음 |
| **기기 자체 할당 허용** | 기기가 이 채널에 `setChannel` 메소드를 사용할 수 있도록 허용 |
| **iOS** | iOS 기기가 이 채널에서 업데이트를 다운로드할 수 있도록 허용 |
| **Android** | Android 기기가 이 채널에서 업데이트를 다운로드할 수 있도록 허용 |
| **에뮬레이터 허용** | 에뮬레이터가 이 채널에서 업데이트를 받을 수 있도록 허용 |
| **개발 빌드 허용** | 개발 빌드가 이 채널에서 업데이트를 받을 수 있도록 허용 |

:::note
CI/CD가 Google Play에 버전을 보내도록 구성된 경우, Google Play는 매번 20개 이상의 실제 기기에서 앱을 실행합니다. CodePushGo는 통계에 포함되는 것을 방지하기 위해 새로운 번들의 처음 4시간 동안 Google 데이터 센터 IP를 차단합니다.
:::

:::note
Capgo는 에뮬레이터와 개발 빌드를 사용량에 포함하지 **않지만**, 3% 이상을 초과할 수 없으며 초과 시 수정할 때까지 계정이 잠긴다는 점을 유의하세요
:::