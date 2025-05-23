---
title: Titik akhir statistik
description: Cara membuat endpoint statistik yang dihosting sendiri
sidebar:
  order: 2
locale: id
---

Berikut adalah contoh kode dalam JavaScript untuk menyimpan statistik plugin

```typescript
interface AppInfos {
  version_name: string
  action: 'delete' |
          'reset' |
          'set' |
          'get' |
          'set_fail' |
          'update_fail' |
          'download_fail' |
          'windows_path_fail' |
          'canonical_path_fail' |
          'directory_path_fail' |
          'unzip_fail' |
          'low_mem_fail' |
          'update_fail' |
          'download_10' |
          'download_20' |
          'download_30' |
          'download_40' |
          'download_50' |
          'download_60' |
          'download_70' |
          'download_80' |
          'download_90' |
          'download_complete' |
          'decrypt_fail' |
          'app_moved_to_foreground' |
          'app_moved_to_background'
  version_build: string
  version_code: string
  version_os: string
  plugin_version: string
  platform: string
  app_id: string
  device_id: string
  custom_id?: string
  is_prod?: boolean
  is_emulator?: boolean
}

export const handler: Handler = async (event) => {
  const body = JSONparse(eventbody || '{}') as AppInfos
  const {
    platform,
    app_id,
    action,
    version_code,
    version_os,
    device_id,
    version_name,
    version_build,
    plugin_version,
  } = body
  consolelog('update asked', platform,
    app_id,
    action,
    version_os,
    version_code,
    device_id,
    version_name,
    version_build,
    plugin_version)
  // Simpan di database Anda
  return { status: 'ok' }
}
```

Endpoint ini seharusnya mengembalikan JSON:

```json
{ "status": "ok" }
```

## Aksi:

* **delete**: ketika bundle dihapus secara lokal
* **reset**: ketika aplikasi mereset ke bundle bawaan
* **set**: ketika aplikasi menetapkan bundle baru
* **set_fail**: ketika aplikasi tidak dapat menemukan ID dari bundle yang ditetapkan
* **update_fail**: dikirim setelah penundaan dan `notifyAppReady` tidak pernah dipanggil
* **download_fail**: ketika unduhan tidak pernah selesai
* **download_complete:** Ketika unduhan selesai
* **download_xx:** Dikirim setiap 10% unduhan contoh: download_20, download_70  
* **update_fail:** ketika bundle gagal melakukan `notifyAppReady` dalam jangka waktu yang ditentukan