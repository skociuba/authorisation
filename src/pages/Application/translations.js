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
});
