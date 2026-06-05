// @ts-check

export const baseUrl = 'https://demowebshop.tricentis.com';

export const serviceCoverage = [
  { name: "Authentication", type: "Core Module", testCases: 15 },
  { name: "Product and Search", type: "Core Module", testCases: 15 },
  { name: "Cart", type: "Core Module", testCases: 15 },
  { name: "Wishlist and Compare", type: "Core Module", testCases: 15 },
  { name: "User Profile and Account", type: "Core Module", testCases: 15 },
  { name: "Address and Shipping", type: "Core Module", testCases: 15 },
  { name: "Add on - Checkout and Payment", type: "Add on Module", testCases: 15 },
  { name: "Add on - Customer Support and Information", type: "Add on Module", testCases: 15 },
];

export const browsers = ['chromium', 'firefox', 'webkit'];

export const expectedResult = {
  functionalTestCases: 120,
  crossBrowserExecutions: 360,
};
