export default {
  // https://nodejs.org/dist/index.json
  ChromeToNode: [
    [3, '0.0.3'],
    [4, '0.1.19'],
    [5, '0.1.27'],
    [6, '0.1.90'],
    [7, '0.1.101'],
    [9, '0.3.0'],
    [10, '0.3.2'],
    [11, '0.3.8'],
    [14, '0.5.1'],
    [15, '0.5.4'],
    [16, '0.5.6'],
    [18, '0.7.0'],
    [19, '0.7.3'],
    [21, '0.7.11'],
    [23, '0.9.3'],
    [24, '0.9.6'],
    [27, '0.11.0'],
    [28, '0.11.1'],
    [29, '0.11.2'],
    [30, '0.11.4'],
    [31, '0.11.8'],
    [32, '0.11.9'],
    [35, '0.11.13'],
    [36, '0.11.14'],
    [38, '0.11.15'],
    [41, '1.0'], // io.js
    [42, '2.0'], // io.js
    [44, '3.0'], // io.js
    [45, '4.0'],
    [46, '5.0'],
    [50, '6.0'],
    [51, '6.5'],
    [54, '7.0'],
    [55, '7.6'],
    [58, '8.0'],
    [60, '8.3'],
    [61, '8.7'],
    [62, '8.10'],
    [66, '10.0'],
    [67, '10.4'],
    [68, '10.9'],
    [70, '11.0'],
    [74, '12.0'],
    [75, '12.5'],
    [76, '12.9'],
    [77, '12.11'],
    [78, '13.0'],
    [79, '13.2'],
    [81, '14.0'],
    [83, '14.5'],
    [84, '14.6'],
    [86, '15.0'],
    [90, '16.0'],
    [91, '16.4'],
    [92, '16.6'],
    [93, '16.9'],
    [94, '16.11'],
    [95, '17.0'],
    [96, '17.2'],
    [101, '18.0'],
    [102, '18.3'],
    [107, '19.0'],
  ],
  // https://github.com/mdn/browser-compat-data/blob/main/browsers/deno.json
  ChromeToDeno: [
    [84, '1.0'],
    [85, '1.2'],
    [86, '1.3'],
    [87, '1.4'],
    [88, '1.6'],
    [89, '1.7'],
    [90, '1.8'],
    [91, '1.9'],
    [92, '1.12'],
    [93, '1.13'],
    [94, '1.14'],
    [95, '1.15'],
    [97, '1.16'],
    [98, '1.18'],
    [99, '1.19'],
    [100, '1.20'],
    [104, '1.23'],
    [106, '1.25'],
    [107, '1.26'],
    [108, '1.27'],
  ],
  // https://github.com/Kilian/electron-to-chromium/blob/master/chromium-versions.js
  // Maybe also required to handle used Node versions?
  // https://github.com/electron/releases/blob/master/lite.json
  ChromeToElectron: [
    [39, '0.20'],
    [41, '0.21'],
    [42, '0.25'],
    [43, '0.27'],
    [44, '0.30'],
    [45, '0.31'],
    [47, '0.36'],
    [49, '0.37'],
    [50, '1.1'],
    [51, '1.2'],
    [52, '1.3'],
    [54, '1.4'],
    [56, '1.6'],
    [58, '1.7'],
    [59, '1.8'],
    [61, '2.0'],
    [66, '3.0'],
    [69, '4.0'],
    [73, '5.0'],
    [76, '6.0'],
    [78, '7.0'],
    [80, '8.0'],
    [83, '9.0'],
    [85, '10.0'],
    [87, '11.0'],
    [89, '12.0'],
    [91, '13.0'],
    [93, '14.0'],
    [94, '15.0'],
    [96, '16.0'],
    [98, '17.0'],
    [100, '18.0'],
    [102, '19.0'],
    [104, '20.0'],
    [106, '21.0'],
    [108, '22.0'],
  ],
  // https://medium.com/samsung-internet-dev
  // https://github.com/mdn/browser-compat-data/blob/main/browsers/samsunginternet_android.json
  ChromeToSamsung: [
    [18, '1.0'],
    [28, '1.5'],
    [34, '2.0'],
    [38, '3.0'],
    [42, '3.4'],
    [44, '4.0'],
    [51, '5.0'],
    [56, '6.0'],
    [59, '7.0'],
    [63, '8.0'],
    [67, '9.0'],
    [71, '10.0'],
    [75, '11.0'],
    [79, '12.0'],
    [83, '13.0'],
    [87, '14.0'],
    [90, '15.0'],
    [92, '16.0'],
    [96, '17.0'],
    [99, '18.0'],
  ],
  // https://github.com/mdn/browser-compat-data/blob/main/browsers/opera.json
  ChromeToOpera(chrome) {
    return chrome <= 28 ? 15
         : chrome <= 82 ? chrome - 13
         : chrome - 14;
  },
  // https://github.com/mdn/browser-compat-data/blob/main/browsers/opera_android.json
  ChromeToOperaMobile: [
    [59, 43],
    [60, 44],
    [61, 45],
    [63, 46],
    [66, 47],
    [69, 48],
    [70, 49],
    [71, 50],
    [72, 51],
    [73, 52],
    [74, 53],
    [76, 54],
    [77, 55],
    [78, 56],
    [80, 57],
    [81, 58],
    [83, 59],
    [85, 60],
    [86, 61],
    [87, 62],
    [89, 63],
    [91, 64],
    [92, 65],
    [94, 66],
    [96, 67],
    [99, 68],
    [100, 69],
    [102, 70],
    [104, 71],
    [106, 72],
  ],
  ChromeToAndroid: [
    [9, '3.0'],
    [12, '4.0'],
    [30, '4.4'],
    [33, '4.4.3'],
  ],
  // https://developer.oculus.com/documentation/web/browser-release-notes/
  // Need to find another data source since release notes are not available for new versions.
  // https://github.com/mdn/browser-compat-data/blob/main/browsers/oculus.json
  AndroidToOculus: [
    [57, '3.0'],
    [61, '4.0'],
    [66, '5.0'],
    [74, '6.0'],
    [77, '7.0'],
    [79, '8.0'],
    [81, '9.0'],
    [83, '10.0'],
    [84, '11.0'],
    [86, '12.0'],
    [87, '13.0'],
    [88, '14.0'],
    [89, '15.0'],
    [91, '16.0'],
    [93, '17.0'],
    [95, '18.0'],
    [96, '19.0'],
    [98, '20.0'],
    [100, '21.0'],
    [102, '22.0'],
    [104, '23.0'],
  ],
  // This is the base data. Since it have no direct Safari equals by the
  // WebKit / JavaScriptCore version, don't use mapping for future releases.
  // https://github.com/oven-sh/bun/issues/396
  SafariToBun: [
    ['16.0', '0.1.1'],
  ],
  // https://github.com/mdn/browser-compat-data/blob/main/browsers/safari_ios.json
  // https://en.wikipedia.org/wiki/Safari_version_history
  SafariToIOS: [
    ['3.0', '1.0'],
    ['3.1', '2.0'],
    ['4.0', '3.0'],
    ['4.1', '3.2'],
    ['5.0', '4.2'],
    ['5.1', '5.0'],
    ['6.0', '6.0'],
    ['6.1', '7.0'],
    ['7.1', '8.0'],
    ['9.0', '9.0'],
    ['9.1', '9.3'],
    ['10.0', '10.0'],
    ['10.1', '10.3'],
    ['11.0', '11.0'],
    ['11.1', '11.3'],
    ['12.0', '12.0'],
    ['12.1', '12.2'],
    ['13.0', '13.0'],
    ['13.1', '13.4'],
    ['14.0', '14.0'],
    ['14.1', '14.5'],
  ],
  SafariToPhantom: [
    ['4.1', '1.9'],
    ['6.0', '2.0'],
  ],
};
