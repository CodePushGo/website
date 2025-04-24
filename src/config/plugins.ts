// import {
//   ArchiveBoxArrowDownIcon,
//   ArrowPathIcon,
//   ArrowUpOnSquareIcon,
//   Bars3Icon,
//   BoltIcon,
//   CameraIcon,
//   ChartBarIcon,
//   ChatBubbleLeftIcon,
//   CircleStackIcon,
//   CurrencyDollarIcon,
//   DevicePhoneMobileIcon,
//   FingerPrintIcon,
//   GlobeAltIcon,
//   HomeIcon,
//   MapPinIcon,
//   PlayCircleIcon,
//   SpeakerWaveIcon,
//   SpeakerXMarkIcon,
//   VideoCameraIcon,
//   UserCircleIcon,
// } from '@heroicons/vue/20/solid'

export interface Action {
  icon?: any
  href: string
  title: string
  name?: string
  author: string
  description: string
  iconForeground?: string
  iconBackground?: string
}

export interface Plugin extends Action {
  npmDownloads?: number
  githubStars?: number
  readme?: string
  datePublished?: string
  dateModified?: string
  tutorial?: string
  locale?: string
}

export const actions = [
  {
    name: 'infobip-mobile-messaging-react-native-plugin',
    href: 'git+https://github.com/infobip/mobile-messaging-react-native-plugin.git',
    title: 'infobip-mobile-messaging-react-native-plugin',
    description: 'Infobip Mobile Messaging React Native Plugin',
    author: 'infobip.mobile',
  },
  {
    name: 'react-native-elastos-carrier',
    href: 'git+https://github.com/cyber-republic/react-native-elastos-carrier.git',
    title: 'react-native-elastos-carrier',
    description: 'react native plugin for elastos carrier',
    author: 'jackylee',
  },
  {
    name: '@react-native/gradle-plugin',
    href: 'git+https://github.com/facebook/react-native.git',
    title: 'gradle-plugin',
    description: 'Gradle Plugin for React Native',
    author: 'react-native-bot',
  },
  {
    name: '@react-native/babel-plugin-codegen',
    href: 'git+https://github.com/facebook/react-native.git',
    title: 'babel-plugin-codegen',
    description: 'Babel plugin to generate native module and view manager code for React Native.',
    author: 'react-native-bot',
  },
  {
    name: '@fullstory/babel-plugin-react-native',
    href: 'git://github.com/fullstorydev/fullstory-babel-plugin-react-native.git',
    title: 'babel-plugin-react-native',
    description: 'The official FullStory React Native babel plugin',
    author: 'patrick-fs',
  },
  {
    name: 'rn-notification-setting',
    href: 'git+https://github.com/agautam-010/rn-notification-setting.git',
    title: 'rn-notification-setting',
    description: 'A React Native plugin to determine if notification setting is toggled',
    author: 'agautam-010',
  },
  {
    name: 'react-native-elastos-unity-carrier',
    href: 'git+https://github.com/cyber-republic/react-native-elastos-carrier.git',
    title: 'react-native-elastos-unity-carrier',
    description: 'react native plugin for elastos carrier',
    author: 'ademcan',
  },
  {
    name: 'vite-plugin-react-native-web',
    href: 'git+https://github.com/Bram-dc/vite-plugin-react-native-web.git',
    title: 'vite-plugin-react-native-web',
    description: 'React Native Web support for Vite',
    author: 'bram-dc',
  },
  {
    name: 'create-react-native-plugin',
    href: 'git+https://github.com/tobua/create-react-native-plugin.git',
    title: 'create-react-native-plugin',
    description: 'Template for creating React Native plugins without native code.',
    author: 'naminho',
  },
  {
    name: 'elastos-unity-carrier',
    href: 'git+https://github.com/cyber-republic/react-native-elastos-carrier.git',
    title: 'elastos-unity-carrier',
    description: 'react native plugin for elastos carrier',
    author: 'jackylee',
  },
  { name: 'react-native-moengage-cards', href: '', title: 'react-native-moengage-cards', description: 'Cards Module for the MoEngage Platform', author: 'moengagecordava' },
  {
    name: '@bam.tech/react-native-make',
    href: 'git+https://github.com/bamlab/react-native-make.git',
    title: 'react-native-make',
    description: '<p align="center"><img src="./docs/assets/make-logo.png"></p> <h2 align="center">Everyday tools for simpler React Native development</h2>',
    author: 'almouro',
  },
  {
    name: 'keen-slider',
    href: 'git+https://github.com/rcbyr/keen-slider.git',
    title: 'keen-slider',
    description: 'The HTML touch slider carousel with the most native feeling you will get.',
    author: 'rcbyr',
  },
]
