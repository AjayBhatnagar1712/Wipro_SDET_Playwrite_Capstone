// @ts-check

export const baseUrl = 'https://demowebshop.tricentis.com';

export const serviceCoverage = [
  { name: "Authentication", testCases: 15 },
  { name: "Product and Search", testCases: 15 },
];

export const browsers = ['chromium', 'firefox', 'webkit'];

export const expectedResult = {
  functionalTestCases: 30,
  crossBrowserExecutions: 90,
};
