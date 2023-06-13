const APPLICATION = 'application';

export const getTranslations = (t) => ({
  English: t(`${APPLICATION}:English`),
  Polish: t(`${APPLICATION}:Polish`),
  logOut: t(`${APPLICATION}:logOut`),
  Main: t(`${APPLICATION}:Main`),
  Test: t(`${APPLICATION}:Test`),
  SubRoutes: t(`${APPLICATION}:SubRoutes`),
  ForStaff: t(`${APPLICATION}:ForStaff`),
  ForCustomer: t(`${APPLICATION}:ForCustomer`),
  breadcrumbs: {
    home: t(`${APPLICATION}:Home`),
    greeting: t(`${APPLICATION}:greeting`),
    'test-page': t(`${APPLICATION}:testPage`),
    'sub-pages': t(`${APPLICATION}:subPage`),
    'main-page': t(`${APPLICATION}:mainPage`),
    landing: t(`${APPLICATION}:landing`),
    secondPages: t(`${APPLICATION}:staffSubPage`),
  },
});
