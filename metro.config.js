const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add support for react-native-reanimated
config.resolver.alias = {
  ...config.resolver.alias,
  'react-native-reanimated': require.resolve('react-native-reanimated'),
};

// Add TypeScript support
config.resolver.sourceExts.push('ts', 'tsx');

module.exports = config;
