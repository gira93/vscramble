module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~bulma/sass/utilities/_all";
          @import "~bulma/sass/base/_all";
          @import "@/assets/initial-variables.sass";
          @import "@/assets/derived-variables.sass";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Vscramble';
        return args;
      });
  },
};
