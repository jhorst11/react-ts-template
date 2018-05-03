const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const reactAppRewired = require("react-app-rewired");

const getLoader = reactAppRewired.getLoader;
const Matcher = reactAppRewired.Matcher;

const typescriptLoaderMatcher = rule =>
  rule.test &&
  rule.test.toString() === /\.(ts|tsx)$/.toString() &&
  "use" in rule &&
  Array.isArray(rule.use) &&
  rule.use.find(r => r.loader && /ts-loader/.test(r.loader));

module.exports = {
  webpack: function(config, env) {
    if (env === "development") {
      config = rewireReactHotLoader(config, env);

      // Locate the Webpack loader responsible for handling Typescript and
      // add babel before typescript for hot loader
      const typescriptLoader = getLoader(config.module.rules, typescriptLoaderMatcher);
      if (!typescriptLoader) {
        throw new Error("Unable to locate typescript loader.");
      }

      typescriptLoader.use.unshift({
        loader: "babel-loader",
        options: {
          babelrc: true,
          plugins: ["react-hot-loader/babel"]
        }
      });
    }

    return config;
  }
};
