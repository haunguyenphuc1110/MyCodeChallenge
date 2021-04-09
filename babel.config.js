module.exports = (api) => {
  api.cache.never();
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            Components: './src/components',
            Assets: './src/assets',
            Constants: './src/constants',
            Containers: './src/containers',
            Navigators: './src/navigators',
            Screens: './src/screens',
            Services: './src/services',
            Redux: './src/redux',
            Actions: './src/redux/actions',
            Reducers: './src/redux/reducers',
            Selectors: './src/redux/selectors',
            Sagas: './src/redux/sagas',
            Middlewares: './src/redux/middlewares',
            Types: './src/types',
            Hooks: './src/hooks',
            I18n: './src/i18n',
            Utils: './src/utils'
          },
        },
      ],
    ],
  };
};
