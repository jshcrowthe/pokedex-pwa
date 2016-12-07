module.exports = {
  staticFileGlobs: [
    'index.html',
    'elements/**.html',
    'bower_components/**/*.+(html|js|css)'
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!.*\.html$|.*\.js$|.*\.css$).*/],
  runtimeCaching: [{
    urlPattern: /https?\:\/\/pokeapi\.co.*/,
    handler: 'fastest',
    options: {
      cache: {
        maxEntries: 100,
        name: 'data-cache'
      }
    }
  }]
};