const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push("cjs");

module.exports = defaultConfig;

//https://stackoverflow.com/questions/72180464/firebase-js-sdk-v9-doesnt-work-with-react-native-error-while-trying-to-resolv
