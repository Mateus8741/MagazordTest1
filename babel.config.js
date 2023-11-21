module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@dtos': './src/dtos',
          '@components': './src/components',
          '@todo': './src/modules/TodoApp',
          '@todoComp': './src/modules/TodoApp/components',
          '@weather': './src/modules/WeatherApp',
          '@weatherComp': './src/modules/WeatherApp/components',
          '@store': './src/modules/StoreApp',
          '@storeComp': './src/modules/StoreApp/components',
          '@shared': './src/modules/shared',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@utils': './src/utils',
          '@services': './src/modules/shared/services',
          '@routes': './src/routes',
          '@api': './src/api',
          '@types': './src/types',
          '@infra': './src/infra',
          '@mock': './src/mock',
        },
      },
    ],
  ],
};
