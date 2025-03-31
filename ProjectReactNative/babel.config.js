module.exports = {
      presets: [
      'babel-preset-expo', // This is required for Expo-managed projects
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript'
    ],
    plugins: ["react-native-reanimated/plugin"],
  };