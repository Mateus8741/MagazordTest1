module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        allowUndefined: false,
      },
    ],
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@dtos': './src/modules/shared/DTOs',
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
          '@api': './src/modules/shared/api',
          '@types': './src/types',
          '@infra': './src/infra',
          '@mock': './src/mock',
        },
      },
    ],
  ],
};
