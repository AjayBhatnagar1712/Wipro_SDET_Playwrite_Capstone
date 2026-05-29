// @ts-check

export const baseUrl = 'https://demowebshop.tricentis.com';

export const serviceCoverage = [
  { name: "Authentication", testCases: 15 },
  { name: "Product and Search", testCases: 15 },
  { name: "Cart", testCases: 15 },
  { name: "Wishlist and Compare", testCases: 15 },
];

export const browsers = ['chromium', 'firefox', 'webkit'];

export const expectedResult = {
  functionalTestCases: 60,
  crossBrowserExecutions: 180,
};
