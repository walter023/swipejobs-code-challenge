module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@helpers": "./src/helpers",
            "@layouts": "./src/layouts",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@store": "./src/store",
            "@styles": "./src/styles",
          },
        },
      ],
    ],
  };
};
