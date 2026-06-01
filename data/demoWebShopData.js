// @ts-check

export const baseUrl = 'https://demowebshop.tricentis.com';

export const serviceCoverage = [
  { name: "Authentication", testCases: 15 },
  { name: "Product and Search", testCases: 15 },
  { name: "Cart", testCases: 15 },
  { name: "Wishlist and Compare", testCases: 15 },
  { name: "User Profile and Account", testCases: 15 },
  { name: "Address and Shipping", testCases: 15 },
  { name: "Checkout and Payment", testCases: 15 },
  { name: "Customer Support and Information", testCases: 15 },
];

export const browsers = ['chromium', 'firefox', 'webkit'];

export const expectedResult = {
  functionalTestCases: 120,
  crossBrowserExecutions: 360,
};
