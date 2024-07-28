const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js",
    library: {
      name: "@zdp-pim/zdp-ui-kit",
      type: "umd",
    },
  },
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.css$/i,
      //   use: [
      //     {
      //       loader: "style-loader",
      //       options: {
      //         attributes: {
      //           nonce: "12345678",
      //         },
      //       },
      //     },
      //     "css-loader",
      //   ],
      // },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
      "react-router-dom": path.resolve(
        __dirname,
        "./node_modules/react-router-dom"
      ),
    },
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
    "react-router-dom": {
      commonjs: "react-router-dom",
      commonjs2: "react-router-dom",
      amd: "ReactRouterDOM",
      root: "ReactRouterDOM",
    },
  },
};
