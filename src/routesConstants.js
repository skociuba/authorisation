const generatePrefixedRootContext = (path) => `/${path}`;

const routes = {
  root: generatePrefixedRootContext(''),
  mainPage: {
    root: generatePrefixedRootContext('main-page'),
  },
  testPage: {
    root: generatePrefixedRootContext('test-page'),
  },
  loginPage: {
    root: generatePrefixedRootContext('login-page'),
  },
  deniedPage: {
    root: generatePrefixedRootContext('denied-page'),
  },
  subRoutes: {
    root: generatePrefixedRootContext('sub-pages'),
    landing: generatePrefixedRootContext('sub-pages/landing'),
    secondPages: generatePrefixedRootContext('sub-pages/secondPages'),
  },
};

export {routes};
