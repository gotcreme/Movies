System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "es7.decorators",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.1.1",
    "aurelia-framework": "npm:aurelia-framework@1.1.2",
    "aurelia-http-client": "npm:aurelia-http-client@1.1.1",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.2.1",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "core-js": "npm:core-js@1.2.7",
    "font-awesome": "npm:font-awesome@4.7.0",
    "github:twbs/bootstrap@3.3.7": {
      "jquery": "npm:jquery@3.2.1"
    },
    "npm:aurelia-binding@1.2.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:aurelia-bootstrapper@2.1.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.1.2",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.2.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.2.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.3.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.1.0"
    },
    "npm:aurelia-dependency-injection@1.3.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-framework@1.1.2": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-http-client@1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-loader-default@1.0.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-pal-browser@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-polyfills@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.3.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-templating-binding@1.3.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-resources@1.4.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-router@1.1.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating@1.4.2": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:font-awesome@4.7.0": {
      "css": "github:systemjs/plugin-css@0.1.33"
    }
  }
});
