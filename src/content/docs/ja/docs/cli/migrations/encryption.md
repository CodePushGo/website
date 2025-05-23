---
title: 暗号化
description: データを新しい暗号化で暗号化する方法
sidebar:
  order: 5
locale: ja
---

この文書では、新しい暗号化システムでデータを暗号化し、古いシステムを削除する方法について説明します。

新しい暗号化システムについての詳細は[ブログ投稿](https://capgo.app/blog/introducing-end-to-end-security-to-capacitor-updater-with-code-signing)をご覧ください。

---

まず、以下のコマンドで新しい鍵ペアを作成します：

```bash
npx @capgo/cli key create
```

このコマンドはアプリに新しい鍵ペアを作成します。秘密鍵は安全な場所に保管することが重要です。秘密鍵をソースコントロールにコミットしたり、信頼できない相手と共有したりしてはいけません。

このコマンドは、Capacitorの設定から古い鍵を削除しますが、古い鍵ファイルは削除しません。CLIはこれらを保持し、アプリストアの更新を受け取っていない古いプラグインを使用しているアププリへのライブアップデートの送信を継続できるようにします。これにより移行が容易になります。

移行時に「古いアプリのサポートと移行を容易にするために、新しいチャンネルで暗号化を設定しますか？」と尋ねられたら、同意してください。これによりCapacitorの設定に新しい「defaultChannel」オプションが追加されます。これにより、アプリは「encryption_v2」チャンネルを使用するようになります。これにより、新しい暗号化はそれをサポートするアプリでのみ使用されます。アプリストアの更新を受け取っていないアプリは、以前のデフォルトチャンネルを引き続き使用します。

---

次に、JSバンドルをビルドして新しいチャンネルにアップロードする必要があります。以下のコマンドを実行してください：

```bash
npx @capgo/cli bundle upload --channel encryption_v2
```

---

その後、アプリが「encryption_v2」チャンネルに自己割り当てできるようにするために、このコマンドを実行します：

:::caution
これは新しい「defaultChannel」オプションが機能するために必要です
:::

```bash
npx @capgo/cli channel set encryption_v2 --self-assign
```

---

これでアプリを実行できます。新しい暗号化システムが使用されます。

古いチャンネルに新しいJSバンドルをアップロードするには、以下のコマンドを実行するだけです：

```bash
npx @capgo/cli bundle upload --channel production
```

---

Capacitorの設定については心配する必要はありません。これはCapgoにアップロードされることはありません。

すべてのユーザーがアプリを更新した後（3〜4ヶ月かかる可能性があります）、Capacitorの設定から「defaultChannel」を削除できます。

その後、以下のコマンドで古いチャンネルを削除できます：

```bash
npx @capgo/cli channel delete encryption_v2
```

---

「encryption_v2」チャンネルを削除すると、それをデフォルトとして使用していたすべてのアプリは「production」チャンネルを使用し始めます。