// @ts-check
import { test } from '@playwright/test';
import { addressShippingScenarios } from '../data/serviceScenarios.js';
import { runScenario } from '../support/serviceRunner.js';

test.describe('Address and shipping service', () => {
  for (const scenario of addressShippingScenarios) {
    test(`${scenario.id} ${scenario.name}`, async ({ page }) => {
      await runScenario(page, scenario);
    });
  }
});
