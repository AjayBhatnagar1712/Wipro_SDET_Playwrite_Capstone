// @ts-check
import { test } from '@playwright/test';
import { checkoutPaymentScenarios } from '../data/serviceScenarios.js';
import { runScenario } from '../support/serviceRunner.js';

test.describe('Checkout and payment service', () => {
  for (const scenario of checkoutPaymentScenarios) {
    test(`${scenario.id} ${scenario.name}`, async ({ page }) => {
      await runScenario(page, scenario);
    });
  }
});
