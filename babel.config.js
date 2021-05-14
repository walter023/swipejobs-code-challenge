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
            "@styles": "./src/styles",
            "@constants": "./src/constants",
            "@routes": "./src/routes",
            "@layouts": "./src/layouts",
            "@screens": "./src/screens",
            "@store": "./src/store",
          },
        },
      ],
    ],
  };
};
